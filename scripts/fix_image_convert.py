import os
import re
import shutil
from pathlib import Path
from urllib.parse import quote, unquote

ROOT = Path(__file__).resolve().parent.parent
CONTENT_BASE = ROOT / "content" / "docs"
STATIC_BASE = ROOT / "static" / "docs"

MARKDOWN_IMAGE_REGEX = re.compile(
    r'!\[(?P<alt>.*?)\]\((?P<path>[^)\s]+)(?P<tail>[^)]*)\)'
)
WIKILINK_IMAGE_REGEX = re.compile(
    r'!\[\[(?P<path>[^]|]+)(?:\|(?P<alt>[^]]+))?\]\]'
)
IMAGE_EXTENSIONS = {".avif", ".bmp", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"}


def ensure_dir(path):
    path.mkdir(parents=True, exist_ok=True)


def is_image_path(path: str) -> bool:
    path = unquote(path).split("?", 1)[0].split("#", 1)[0]
    return Path(path).suffix.lower() in IMAGE_EXTENSIONS


def sanitize_dir_segment(segment: str) -> str:
    """Sanitize a directory segment for use in URLs.

    We normalize spaces to hyphens and lowercase the segment to match Hugo's
    default slugs.
    """
    return segment.replace(" ", "-").lower().strip("./")


def sanitize_file_segment(segment: str) -> str:
    """Sanitize a filename for use in URLs/files.

    This replaces spaces with underscores and preserves the extension.
    """
    return segment.replace(" ", "_")


def resolve_source(md_dir: Path, raw_path: str):
    path = unquote(raw_path).replace("\\", "/").split("?", 1)[0].split("#", 1)[0]
    path = re.sub(r"/+", "/", path).strip()
    if not path or re.match(r"^[a-zA-Z][a-zA-Z0-9+.-]*:", path):
        return None

    candidates = []

    def add_candidate(candidate: Path):
        candidates.append(candidate)
        try:
            relative = candidate.relative_to(CONTENT_BASE)
        except ValueError:
            return
        parts = list(relative.parts)
        clean_relative = Path(
            *[sanitize_dir_segment(part) for part in parts[:-1]],
            sanitize_file_segment(parts[-1]),
        )
        candidates.append(STATIC_BASE / clean_relative)

    if path.startswith("/docs/"):
        relative = path.lstrip("/")
        while relative.startswith("docs/"):
            relative = relative[5:]
        url_parts = Path(relative).parts
        clean_relative = Path(
            *[sanitize_dir_segment(part) for part in url_parts[:-1]],
            sanitize_file_segment(url_parts[-1]),
        )
        candidates.append(STATIC_BASE / clean_relative)
        path = relative
    elif path.startswith("/"):
        return None

    relative_path = Path(path.lstrip("./"))
    current = md_dir
    while current == CONTENT_BASE or CONTENT_BASE in current.parents:
        add_candidate(current / relative_path)
        if len(relative_path.parts) == 1:
            add_candidate(current / "assets" / relative_path)
        if current == CONTENT_BASE:
            break
        current = current.parent

    for candidate in candidates:
        try:
            candidate.resolve().relative_to(CONTENT_BASE.resolve())
        except ValueError:
            if candidate.is_file() and candidate.is_relative_to(STATIC_BASE):
                return candidate
            continue
        if candidate.is_file():
            return candidate
    return None


def move_image(md_dir: Path, rel_path: str):
    src = resolve_source(md_dir, rel_path)
    if src is None:
        print(f"Warning: Image not found for {rel_path!r} in {md_dir}")
        return None

    if src.is_relative_to(STATIC_BASE):
        source_rel = src.relative_to(STATIC_BASE)
    else:
        source_rel = src.relative_to(CONTENT_BASE)

    parts = list(source_rel.parts)
    clean_rel = Path(
        *[sanitize_dir_segment(part) for part in parts[:-1]],
        sanitize_file_segment(parts[-1]),
    )
    dest = STATIC_BASE / clean_rel
    ensure_dir(dest.parent)

    if not src.is_relative_to(STATIC_BASE) and src != dest and not dest.exists():
        print(f"Moving: {src} -> {dest}")
        shutil.move(str(src), str(dest))

    return clean_rel.as_posix()


def converted_markdown_image(match, md_dir: Path):
    if not is_image_path(match.group("path")):
        return match.group(0)
    alt = match.group("alt") or ""
    clean_rel_path = move_image(md_dir, match.group("path"))
    if clean_rel_path is None:
        return match.group(0)
    image_url = "/docs/" + quote(clean_rel_path, safe="/._-")
    return f"![{alt}]({image_url}{match.group('tail')})"


def converted_wikilink_image(match, md_dir: Path):
    if not is_image_path(match.group("path")):
        return match.group(0)
    clean_rel_path = move_image(md_dir, match.group("path"))
    if clean_rel_path is None:
        return match.group(0)
    image_url = "/docs/" + quote(clean_rel_path, safe="/._-")
    return f"![{match.group('alt') or ''}]({image_url})"


def update_md(md_path):
    with open(md_path, "r", encoding="utf-8") as f:
        text = f.read()

    md_dir = md_path.parent
    new_text = MARKDOWN_IMAGE_REGEX.sub(
        lambda match: converted_markdown_image(match, md_dir), text
    )
    new_text = WIKILINK_IMAGE_REGEX.sub(
        lambda match: converted_wikilink_image(match, md_dir), new_text
    )

    if new_text != text:
        print(f"Updating: {md_path}")
        with open(md_path, "w", encoding="utf-8") as f:
            f.write(new_text)

def process_content():
    for root, dirs, files in os.walk(CONTENT_BASE):
        for file in files:
            if file.lower().endswith(".md"):
                update_md(Path(root) / file)

if __name__ == "__main__":
    ensure_dir(STATIC_BASE)
    process_content()
    print("Done! Images moved & Markdown updated.")
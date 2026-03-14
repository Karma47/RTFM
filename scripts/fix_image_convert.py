import os
import re
import shutil

CONTENT_BASE = "content/docs"
STATIC_BASE = "static/docs"

# Match markdown images but capture the path
IMAGE_REGEX = re.compile(r'!\[(.*?)\]\((?P<path>[^)]+assets/[^)]+)\)')


def ensure_dir(path):
    if not os.path.exists(path):
        os.makedirs(path)


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


def get_docs_rel_dir(md_dir: str) -> str:
    """Return the docs-relative directory for a markdown file.

    For example:
      content/docs/01_methodology/Threat Hunting -> 01_methodology/threat-hunting
    """
    rel = os.path.relpath(md_dir, CONTENT_BASE)
    parts = [sanitize_dir_segment(p) for p in rel.split(os.sep)]
    return "/".join(parts).strip("./")


def move_image(content_folder, rel_path):
    # Normalize the relative path (handle ./ and url-encoded spaces)
    rel_path = rel_path.lstrip("./")
    rel_path = rel_path.replace("%20", " ")

    src = os.path.normpath(os.path.join(content_folder, rel_path))

    # Sanitize file name and directory segments for static output
    parts = rel_path.split("/")
    if len(parts) > 1:
        dirs, filename = parts[:-1], parts[-1]
        dirs = [sanitize_dir_segment(p) for p in dirs]
        filename = sanitize_file_segment(filename)
        clean_rel = os.path.join(*(dirs + [filename]))
    else:
        clean_rel = sanitize_file_segment(parts[0])

    dest = os.path.normpath(os.path.join(STATIC_BASE, clean_rel))

    ensure_dir(os.path.dirname(dest))

    if os.path.exists(src) and not os.path.exists(dest):
        print(f"Moving: {src} → {dest}")
        shutil.move(src, dest)

    return clean_rel


def replace_image(match, md_dir):
    alt = match.group(1)
    path = match.group("path")

    # Skip already converted links
    if path.startswith("/docs/"):
        return match.group(0)

    docs_rel_dir = get_docs_rel_dir(md_dir)
    clean_rel_path = move_image(md_dir, path)

    # Keep path stable and safe for deployment
    return f"![{alt}](/docs/{docs_rel_dir}/{clean_rel_path})"


def update_md(md_path):
    with open(md_path, "r", encoding="utf-8") as f:
        text = f.read()

    md_dir = os.path.dirname(md_path)

    new_text = IMAGE_REGEX.sub(lambda m: replace_image(m, md_dir), text)

    if new_text != text:
        print(f"Updating: {md_path}")
        with open(md_path, "w", encoding="utf-8") as f:
            f.write(new_text)

def process_content():
    for root, dirs, files in os.walk(CONTENT_BASE):
        for file in files:
            if file.lower().endswith(".md"):
                update_md(os.path.join(root, file))

if __name__ == "__main__":
    ensure_dir(STATIC_BASE)
    process_content()
    print("Done! Images moved & Markdown updated.")
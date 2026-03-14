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

def move_image(content_folder, rel_path):
    src = os.path.normpath(os.path.join(content_folder, rel_path))
    dest = os.path.normpath(os.path.join(STATIC_BASE, rel_path))

    ensure_dir(os.path.dirname(dest))

    if os.path.exists(src) and not os.path.exists(dest):
        print(f"Moving: {src} → {dest}")
        shutil.move(src, dest)

    return dest

def replace_image(match, md_dir):
    alt = match.group(1)
    path = match.group("path")

    # Skip already converted links
    if path.startswith("/docs/"):
        return match.group(0)

    # Move the image
    move_image(md_dir, path)

    # Keep path EXACTLY as written
    return f"![{alt}](/docs/{path})"

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
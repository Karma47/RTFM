import os
import re
import shutil

# Source and destination base folders
CONTENT_BASE = "content/docs"
STATIC_BASE = "static/docs"

# Regex to match Markdown image links
IMAGE_REGEX = re.compile(r'!\[(.*?)\]\((?P<path>[\w\-/\. %]+assets/[\w\-. %]+)\)')

def ensure_dir(path):
    """Ensure directory exists."""
    if not os.path.exists(path):
        os.makedirs(path)

def move_image(content_folder, rel_path):
    """
    Move image from content to static preserving structure.
    e.g. content/docs/02_platforms/wifi/assets/foo.png
    goes to static/docs/02_platforms/wifi/assets/foo.png
    """
    # Compute source and destination
    src = os.path.join(content_folder, rel_path)
    dest = os.path.join(STATIC_BASE, rel_path)

    # Make sure destination directory exists
    ensure_dir(os.path.dirname(dest))

    # Move the file if it exists and not already moved
    if os.path.exists(src) and not os.path.exists(dest):
        print(f"Moving: {src} → {dest}")
        shutil.move(src, dest)

    return dest

def update_md(md_path):
    """
    Update a single Markdown file so that image links point to static
    """
    with open(md_path, "r", encoding="utf-8") as f:
        text = f.read()

    new_text = text
    for m in IMAGE_REGEX.finditer(text):
        orig = m.group(0)
        path = m.group("path")

        # Move the file if necessary
        move_image(os.path.dirname(md_path), path)

        # Update the Markdown to Hugo static path
        new_link = f"![](/docs/{path})"
        new_text = new_text.replace(orig, new_link)

    if new_text != text:
        print(f"Updating: {md_path}")
        with open(md_path, "w", encoding="utf-8") as f:
            f.write(new_text)

def process_content():
    """Walk content/docs and update md files"""
    for root, dirs, files in os.walk(CONTENT_BASE):
        for file in files:
            if file.lower().endswith(".md"):
                md_file = os.path.join(root, file)
                update_md(md_file)

if __name__ == "__main__":
    ensure_dir(STATIC_BASE)
    process_content()
    print("Done! Images moved & Markdown updated.")
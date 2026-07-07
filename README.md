# 📚 RTFM — Markdown Knowledge Base → Hugo Static Site

A streamlined pipeline to convert personal Markdown notes into a fully deployed static website using **Obsidian**, **Python automation**, **Hugo**, and **GitHub Actions**.

---

## 🚀 What This Project Does

RTFM is a **personal knowledge publishing system** that:

* Uses **Markdown (.md)** as the single source of truth
* Enables editing via **Obsidian**
* Processes images automatically with Python
* Converts notes into a **Hugo-compatible structure**
* Builds and deploys a **static website via GitHub Actions**

---

## 🧠 Core Workflow

```text
Obsidian (Editor)
    ↓
Markdown Notes (.md)
    ↓
Python Script (Image Processing)
    ↓
Hugo (Static Site Generator)
    ↓
Git Push
    ↓
GitHub Actions (CI/CD)
    ↓
Live Website
```

---

## 🏗️ Architecture Overview

* **Content Layer**

  * Markdown files (`.md`)
  * Obsidian vault structure

* **Processing Layer**

  * Python scripts:

    * Detect embedded images
    * Convert paths to Hugo format
    * Normalize content structure

* **Build Layer**

  * Hugo static site generator
  * Theme-based rendering

* **Deployment Layer**

  * GitHub repository
  * GitHub Actions pipeline
  * Static hosting (e.g. GitHub Pages)

---

## 📂 Project Structure

```bash
.
├── content/                # Markdown content (Hugo)
├── static/                 # Images & assets (processed)
├── scripts/                # Python automation
├── themes/                 # Hugo themes
├── config.toml             # Hugo configuration
├── .github/workflows/      # CI/CD pipelines
└── README.md
```

---

## ⚙️ How It Works

### 1. Write Notes

* Create and edit notes in **Obsidian**
* Store everything in `.md` format

### 2. Sync Repository

* Pull latest changes from Git
* Keep notes version-controlled

### 3. Process Images

Run the Python script:

```bash
python scripts/process_images.py
```

This will:

* Detect image references in Markdown
* Move/normalize images into `/static/`
* Rewrite paths for Hugo compatibility

---

### 4. Build Site

```bash
hugo server -D
```

* Converts Markdown → HTML
* Serves locally for preview

---

### 5. Deploy

```bash
git add .
git commit -m "update notes"
git push
```

* Triggers **GitHub Actions**
* Automatically builds and deploys the site

---

## 🔄 CI/CD Pipeline

Triggered on every push:

* Install Hugo
* Build static site
* Deploy to hosting

---

## 📌 Requirements

* **Hugo (Extended version recommended)**
* **Python 3.x**
* **Git**
* **Obsidian (optional but recommended)**

---

## 💡 Key Design Principles

* 🧾 Markdown-first workflow
* 🔄 Fully automated pipeline
* 🧩 Decoupled processing (Python layer)
* ⚡ Fast static site generation
* 🚀 Zero-touch deployment

---

## 🔮 Future Enhancements

* Image compression & optimization
* Search integration
* Tagging and taxonomy improvements
* Multi-environment deployments (dev/staging/prod)
* Content linting / validation

---

## 📄 License

MIT License

# hansencv

Bilingual (Traditional Chinese / English) resume website for GitHub Pages.

## Structure

- `index.html`: site layout and section anchors
- `styles.css`: responsive, professional visual design
- `script.js`: rendering, language toggle, smooth navigation behavior
- `data.js`: maintainable content source (104-first policy)
- `assets/`: images (replace `profile-placeholder.svg` with real profile photo)
- Evidence section includes:
  - auto-generated missing-content checklist (TODO/empty field detection)
  - downloadable `evidence-template.json`

## Update workflow

1. Edit `data.js` only for new experience, awards, and evidence/news.
2. For evidence/news, add entries in `evidence[]` and set `visible: true`.
3. Commit and deploy to GitHub Pages (branch root).

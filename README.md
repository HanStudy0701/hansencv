# hansencv

Bilingual (Traditional Chinese / English) resume website for GitHub Pages.

## Structure

- `index.html`: site layout and section anchors
- `styles.css`: responsive, professional visual design
- `script.js`: rendering, language toggle, smooth navigation behavior
- `data.js`: maintainable content source
- `assets/`: images (replace `profile-photo.svg` with real profile photo)
- `assets/favicon.svg`: fallback favicon using initials

## Update workflow

1. Edit `data.js` only for new experience, awards, projects, skills, and evidence/news.
2. For project external buttons, add `externalLink` only when a real URL exists.
3. To enable PDF button, set `resumePdfPath` to a valid file path (for example `assets/resume.pdf`).
4. Update `siteMeta.ogUrl` and `siteMeta.ogImage` before production deploy.
5. Commit and deploy to GitHub Pages (branch root).

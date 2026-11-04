# Emerald Packaging — GitHub Pages website

A complete 5-page static website for Emerald Packaging, using the selected green loop-and-leaf logo.

## Included
- `index.html` — Home
- `about.html` — Our Story
- `solutions.html` — Packaging Solutions
- `sustainability.html` — Sustainability
- `contact.html` — Contact & project inquiry form
- `styles.css` — responsive styles
- `site.js` — mobile navigation, packaging selector, and inquiry email draft
- `emerald-logo.png` — approved horizontal logo with transparent background
- `emerald-mark.png` — approved icon only with transparent background
- `favicon.png` — browser tab icon
- `.nojekyll` — GitHub Pages compatibility

## Business contact details
Phone: **747-316-8240** (`tel:+17473168240`)
Email: **info@emeraldpckg.com**

## How to update an existing GitHub Pages repository
1. Extract this ZIP on your computer.
2. Open your GitHub `Emerald` repository in the Code tab.
3. Choose **Add file → Upload files** and drag the extracted files (not the ZIP). Keep all files in the main repository folder; do not make an `assets/` directory.
4. Commit to `main`. Check **Settings → Pages** is using `main` and `/(root)`.
5. Visit your GitHub Pages site after its next publish and hard-refresh if a cached version appears.

The new design references `emerald-logo.png`, `favicon.png`, `site.js`, and `styles.css` directly from the root. You can delete the old unused `.svg` branding files from GitHub later if desired.

## Contact form
The inquiry form is **email-draft based**, not a server-hosted submit form. It prepares an email to **info@emeraldpckg.com** inside the visitor's mail application; the visitor must press Send. The form does not automatically deliver inquiries, and users without a configured mail application may need to copy the inquiry and email it manually.

## Photos
The existing design loads external real Unsplash photos. For attribution and license review see `PHOTO_CREDITS.md`. Hosting the photos locally is a separate optional improvement.

## Domain
No CNAME or DNS settings are included. The site works under the repository's standard GitHub Pages URL, and you can configure your domain later.

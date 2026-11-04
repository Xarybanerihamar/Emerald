# Emerald Packaging — GitHub Pages (flat folder fix)

All required website files are in **one folder**. There are **no assets/, css/, or js/ directories** and no custom domain setup. This is meant for GitHub's web **Add file → Upload files** interface.

## Fix your existing `Emerald` repository

1. Extract `emerald-github-fixed.zip` on your computer.
2. Open your GitHub repository `Emerald` (the main **Code** tab).
3. Click **Add file → Upload files**.
4. Drag in all the extracted files (not the ZIP itself). Use the individual files, such as `index.html`, `styles.css`, `site.js`, and `emerald-logo.svg`.
5. Click **Commit changes** to update/replace files of the same names.
6. Open `https://xarybanerihamar.github.io/Emerald/` and hard refresh with Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac) once GitHub Pages has republished.

If GitHub's upload form refuses overwriting, edit/commit each HTML page's paths in place, or delete the previous page file before uploading its replacement.

**No custom domain, DNS settings, or phone number have been configured.**

The GitHub Pages branch should be `main` with source `/(root)` (Settings → Pages). `index.html` must be at the root. The extra `download` file shown in your previous screenshot is not part of this package and is not needed for this site.

## What's changed

All five HTML pages now point directly to `styles.css`, `site.js`, `emerald-logo.svg`, and `favicon.svg` in the same directory. Relative links work for the project URL `/Emerald/` and for any other GitHub Pages repo name. Nothing requires an `assets` folder.

## Notes

- The form opens the visitor's email app; it is not a server-side form. The recipient is currently `info@empack.com`.
- The images are linked directly from Unsplash and will require an internet connection. See `PHOTO_CREDITS.md`.
- The site has 5 pages, a mobile menu, and an interactive packaging selector.

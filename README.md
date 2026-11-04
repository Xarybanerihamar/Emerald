# Emerald Packaging — GitHub Pages Website

Five-page static website. Ready to publish on **GitHub Pages**, with **no custom domain configuration** included.

## Upload to GitHub

1. Create a new repository on GitHub (for example, `emerald-website`).
2. Upload **the contents of this folder** to the top level of that repository. `index.html` must be at the repository root alongside `about.html`, `assets/`, `css/`, and `js/`. **Do not upload the ZIP as one file, or put everything in an extra folder.**
3. In your repository, select **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose your main branch and `/(root)`, then **Save**.
6. GitHub will display the website URL in the Pages settings after publishing. It may be a `username.github.io/repository-name/` address. All site navigation and asset links are relative so this project URL is supported.

No Node.js, frameworks, or build command are necessary. The empty `.nojekyll` file tells GitHub Pages to serve the static files directly.

## Pages and files

- `index.html` — home
- `about.html` — company story
- `solutions.html` — products, capabilities, and interactive packaging selector
- `sustainability.html` — materials and sustainability information
- `contact.html` — locations and email-draft inquiry form
- `css/styles.css` — styling and responsive layout
- `js/site.js` — mobile menu, selector, and form behavior
- `assets/` — logo and favicon

## Before going live

- No phone number has been included.
- The contact form **does not send directly**: it opens the visitor's email app with a prefilled message to `info@empack.com`. Change that email in `js/site.js` and the `.html` pages when your new address is ready.
- Photos are **real, non-AI stock photography** currently loaded from Unsplash URLs. They are not included as image files. See `PHOTO_CREDITS.md` for sources and review rights for your use.
- Any photos of equipment or facilities are illustrative, not proof they depict Emerald's actual operations.
- Review company facts, copy, and sustainability claims, and approve the new logo before public launch.
- The design uses Google Fonts, so a network connection is needed to load the custom fonts.

This package intentionally contains **no `CNAME`, DNS instructions, custom-domain setup, `robots.txt`, or domain-specific sitemap**. You can configure your domain separately whenever you want.

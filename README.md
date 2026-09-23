# Frenzy Client — GitHub Pages Website

This is a static website for GitHub Pages. No VPS is required.

## Publish
1. Create a GitHub repository named `frenzy-client-site`.
2. Upload `index.html`, `style.css`, and `script.js`.
3. GitHub → Settings → Pages → Deploy from branch → `main` → `/root`.
4. Your free website will be:
   `https://YOUR-GITHUB-USERNAME.github.io/frenzy-client-site/`

## Add the EXE later
Do **not** put a large EXE directly in this website repository.

Recommended:
1. Create a GitHub Release, e.g. `v9.0.0`.
2. Upload your final `FrenzyClient.exe` as a Release asset.
3. Copy the asset's download URL.
4. Open `script.js`.
5. Replace `REPLACE_WITH_GITHUB_RELEASE_EXE_URL` with that URL.
6. Commit the change.

## Customize support
Edit the Discord URL and support email in `index.html`.

The site contains no VPS requirement and no database requirement.

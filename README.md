# Aquib Hossain — Portfolio

Personal portfolio for Aquib Hossain, rebuilt with React and Vite. Dark is the default theme. A light theme is available from the header.

The live site is [aquibhossain.github.io/aquib-portfolio](https://aquibhossain.github.io/aquib-portfolio/). GitHub Pages publishes the **root of `main`**, so `npm run build` writes the production files there (`index.html`, `assets/`, `favicon.svg`). Edit `web/src`, then build again and commit the updated root files.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Contact form

The original site had no email address. Open `web/src/data/content.js` and set one of:

- `contactEmail` — the form opens the visitor’s email app (no backend).
- `formEndpoint` — the form POSTs JSON `{ name, email, message }` to a free form service such as [Formspree](https://formspree.io).

Leave both empty and the form copies the message instead. LinkedIn and GitHub stay available either way.

## Content

Biography, skills, projects, and experience are in `web/src/data/content.js`. Anything the original page did not include is marked **Placeholder** on the site. Photos in `showOff/` were not on the original page and are left unused.

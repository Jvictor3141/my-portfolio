# React Portfolio

A modern, responsive portfolio built with React + Vite and Tailwind CSS v4. Features animated sections, smooth scrolling navigation, a projects showcase, certificates, and a contact form with client-side validation.

## Tech Stack
- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- ESLint 9

## Getting Started

### Prerequisites
- Node.js 18+ recommended

### Install & Run
```powershell
npm install
npm run dev
```
Dev server runs with HMR. Open the URL printed in your terminal.

### Build
```powershell
npm run build
npm run preview
```

## Project Structure
```
eslint.config.js
index.html
package.json
vite.config.js
public/
src/
	App.jsx
	index.css
	main.jsx
	assets/
	components/
		Apresentation.jsx
		About.jsx
		Resume.jsx
		Certificates.jsx
		Projects.jsx
		Contact.jsx
		NavBar.jsx
	hooks/
		useScrollAnimations.js
```

## Styling & Tailwind v4
- Tailwind is imported via `@import "tailwindcss";` in `src/index.css`.
- Tailwind v4 uses the Vite plugin; no `content` key in `tailwind.config.js`.
- Custom theme tokens include colors like `dark-bg`, `dark-secondary`, `cyan-custom`, and animations such as `animate-slide-up`, `animate-fade-in`.
- Gradient utilities use v4 syntax, e.g. `bg-linear-to-r from-cyan-custom to-blue-custom`.

## Animations
- Elements with `animate-*` classes are animated on viewport entry using `useScrollAnimations`.
- Optional stagger with `data-delay` (milliseconds): `<div className="animate-slide-up" data-delay="150" />`.
- Respects `prefers-reduced-motion` and re-triggers when re-entering viewport.

## Navigation
- `NavBar.jsx` provides smooth scrolling to sections and a mobile menu with backdrop.
- Clicking backdrop or a menu item closes the mobile menu.

## Contact Form
- Controlled inputs with validation for name, email, subject, and message.
- Simulated submit; replace with your endpoint in `Contact.jsx` (`onSubmit`).

## Customization Tips
- Update colors/animations in `tailwind.config.js` under `theme.extend`.
- Add images and assets under `public/` or `src/assets/`.
- Adjust sections in `App.jsx` to reorder or toggle content.

## Deployment
- Any static host works (Netlify, Vercel, GitHub Pages).
- Build output in `dist/`.

## License
This project is private to the author. Do not redistribute without permission.

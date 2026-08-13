# AI VISTAAR

A learner-first React single-page site that showcases beginner-friendly AI content, community information and featured blog posts.

## Overview
AI VISTAAR is a client-side web application built to present an approachable learning hub for students and beginners interested in Artificial Intelligence. It provides simple, clear content sections, a community CTA, and a small blog-style listing powered by in-repo data. The site is intended for learners, mentors, and anyone exploring introductory AI concepts.

Who this project is for:
- Students and beginners learning AI concepts
- Developers building front-end portfolios
- Anyone who wants a simple example of a modern React + Vite site with Tailwind CSS and animations

## Key Features
- Multi-page client-side SPA (Home, About, Team, Events, Contact, FAQ, Privacy, Terms)
- Responsive layout with mobile-friendly navigation
- Animated UI transitions and interactions using Framer Motion
- Reusable component architecture (Layout, Navbar, Footer, Cards, Buttons)
- Local mock blog data (src/data/blogs.js) for featured posts
- Theme context/provider for global UI state
- Deployed to Vercel (deployment config included)

## Tech Stack
- Frontend: React (v19), React Router (client-side routing)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Build / Dev: Vite
- Tooling / Plugins: @vitejs/plugin-react, @tailwindcss/vite
- Deployment: Vercel (vercel.json present)

Only client-side code — there is no backend or database in this repository.

## How it works
- The app is a Vite-powered React SPA. Routing is handled by React Router.
- Pages and UI are organized as React components in src/. The Layout component wraps pages and renders a Navbar and Footer.
- Content for the simple blog listing is read from in-repo data files (src/data/blogs.js) and rendered by the Home page.
- The ThemeProvider available at the top-level manages theme-related UI state across the site.
- Vite serves the app during development and builds a static bundle for production; the repository includes a Vercel configuration for deployment.

## Architecture
- Single repository containing only the frontend.
- src/
  - components/ (reusable UI components and layout)
  - pages/ (page-level components for each route)
  - data/ (local JSON-like modules for blog posts and static content)
  - context/ (ThemeContext used by the app)
  - assets/ (static media referenced by components)
- No server-side API, no database. All content presented is client-side and either static or local data.

## Project structure (most important files)
- package.json — project metadata, scripts and dependencies
- vite.config.js — Vite configuration
- vercel.json — deployment configuration for Vercel
- src/
  - main.jsx — application entry; mounts ThemeProvider and Router
  - App.jsx — route definitions
  - pages/ — Home.jsx, About.jsx, Team.jsx, Events.jsx, Contact.jsx, FAQ.jsx, Privacy.jsx, Terms.jsx, NotFound.jsx
  - components/ — layout and UI components (Navbar, Footer, Card, Button, etc.)
  - data/blogs.js — local blog posts used on Home
  - context/ThemeContext.jsx — theme provider

## Installation

1. Clone the repository

```bash
git clone https://github.com/vinay5ain/Ai-vista.git
cd Ai-vista
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```
Open the URL printed by Vite (usually http://localhost:5173).

4. Build for production

```bash
npm run build
```

5. Preview a production build locally

```bash
npm run preview
```

## Environment variables
- This project does not require any environment variables for local development (no .env keys required).
- If you add external APIs or a CMS in the future, list only the variable NAMES here (do not store secrets in the repo).

## API Documentation
- No backend API is included. All content is client-side and driven by local data modules (e.g., src/data/blogs.js).

## Screenshots / Demo
- Live demo: https://ai-vista-self.vercel.app (deployed; Vercel configuration included)
- There are no repository-hosted screenshots in the repo. The app references assets in src/assets/ (for example, the hero GIF used on the Home page).

## Challenges & Learning
From the repository structure and code, the project likely involved:
- Building a composable, reusable component system (cards, buttons, section components).
- Managing client-side routing and route-based layout composition.
- Integrating Tailwind CSS with Vite and configuring the build pipeline.
- Adding smooth animations and transitions using Framer Motion while keeping performance acceptable.
- Modeling simple content as local data modules for quick iteration without a backend.

These are useful learning areas for front-end engineering and for preparing interview/project discussions.

## Future Improvements (realistic, incremental)
- Add a lightweight CMS or headless backend to manage blog content (e.g., Sanity, Contentful, or a small Node/Express API).
- Convert to TypeScript to demonstrate stronger typing and maintainability.
- Add unit and integration tests (Jest, React Testing Library).
- Add CI/CD checks (linting, tests) and a pull request workflow.
- Improve accessibility (aria attributes, focus management) and run an accessibility audit.
- Add structured metadata and better SEO for static pages.
- Add analytics (privacy-aware) and performance monitoring.

## What this project demonstrates
- Frontend development with React, Vite and Tailwind CSS
- SPA routing and component-driven UI design
- Use of animation libraries (Framer Motion) to enhance UX
- Local data modeling for small blogs / content previews
- Deployment pipeline basics (Vercel config present)

This repository is a strong example of front-end skills you can discuss in interviews: UI component design, SPA architecture, modern build tooling, and deployment.

## Author
- Repository: https://github.com/vinay5ain/Ai-vista
- Live site: https://ai-vista-self.vercel.app

---

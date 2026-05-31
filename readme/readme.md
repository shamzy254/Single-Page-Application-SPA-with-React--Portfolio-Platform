# Portfolio Platform

A modern creative agency portfolio built with **Next.js** and **TypeScript**.

## What’s included

- **Home page** with hero, studio intro, featured work, and contact call to action.
- **Project grid** with category filtering and featured project highlights.
- **Dynamic project detail pages** using the Next.js App Router.
- **Static project data** in `data/projects.json` for easy editing.

## Project structure

```
app/
  layout.tsx
  globals.css
  page.tsx
  projects/
    [slug]/
      page.tsx
components/
  Navbar.tsx
  ProjectCard.tsx
  ProjectInteractiveElements.tsx
  PortfolioGrid.tsx
data/
  projects.json
package.json
tsconfig.json
next-env.d.ts
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open the app at:

```bash
http://localhost:3000
```

## Customize projects

Edit `data/projects.json` to add or update portfolio entries. Each project supports:

- `title`
- `slug`
- `category`
- `tags`
- `year`
- `client`
- `description`
- `longDescription`
- `coverImage`
- `featured`

## Notes

- Tailwind directives were removed from `app/globals.css` because this project currently uses custom global CSS.
- The project detail route has been corrected to `app/projects/[slug]/page.tsx`.

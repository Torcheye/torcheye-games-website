# Repository Guidelines

## Project Structure & Module Organization
- `src/components/` – Reusable Astro UI blocks (PascalCase, e.g., `Header.astro`).
- `src/layouts/` – Page layouts shared across routes.
- `src/pages/` – File‑based routes (kebab‑case filenames map to paths).
- `src/content/` – Astro Content Collections; blog posts in `src/content/blog/`.
- `src/styles/global.css` – Design tokens (CSS variables) and global styles.
- `src/lib/` – Utilities and helpers (TypeScript).
- `public/` – Static assets served at root, e.g., `/images/...`.

## Build, Test, and Development Commands
- `npm install` – Install dependencies.
- `npm run dev` – Start local dev server.
- `npm run build` – Type/content check (`astro check`) then production build.
- `npm run preview` – Serve the built `dist/` locally.
- `npm run astro` – Access Astro subcommands if needed.

## Coding Style & Naming Conventions
- Language: TypeScript + Astro; 2‑space indentation.
- Components: PascalCase (`FeatureShowcase.astro`). Pages: kebab‑case (`studio.astro`).
- Content: Markdown/MDX in `src/content/blog/` (kebab‑case filenames) with frontmatter.
- Styling: Prefer CSS variables in `src/styles/global.css`. Avoid new CSS frameworks.
- Formatting: Prettier with `prettier-plugin-astro` and Tailwind plugin. Example: `npx prettier --write .`.

## Testing Guidelines
- No formal test suite. Use:
  - `npm run build` to catch type/content issues via `astro check`.
  - `npm run preview` and verify pages load, console is clean, images resolve.
- When adding logic, include lightweight validation (runtime guards, narrow types) and keep PRs small.

## Commit & Pull Request Guidelines
- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`, `content:`.
  - Examples: `feat(blog): integrate giscus`, `fix(blog): lightbox init on nav`.
- PRs: clear description, linked issue, before/after screenshots for visual changes, and confirm `npm run build`.

## Agent-Specific Instructions
- Keep assets optimized (WebP images, small GIFs, small MP4s); use absolute paths under `/images/...`.

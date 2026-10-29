# Angel Vasquez Portfolio

A responsive, single-page portfolio for Angel Vasquez at [angelito.dev](https://angelito.dev). Built with Astro and TypeScript, with optimized project imagery and minimal client-side JavaScript.

## Requirements

- Node.js 22 or newer
- pnpm

## Get started

```bash
pnpm install
pnpm dev
```

Astro serves the site at `http://localhost:4321` by default.

## Google Analytics

Set `PUBLIC_GA_MEASUREMENT_ID` to your GA4 Measurement ID (for example, `G-XXXXXXXXXX`) in the build environment. The Google tag is included in the generated site when this value is set. For local development, put the value in a `.env` file at the project root.

## Commands

| Command             | Purpose                            |
| ------------------- | ---------------------------------- |
| `pnpm dev`          | Start the local development server |
| `pnpm build`        | Build the static site into `dist/` |
| `pnpm preview`      | Preview the production build       |
| `pnpm check`        | Check Astro and TypeScript files   |
| `pnpm format:check` | Check formatting with Prettier     |
| `pnpm format`       | Format files with Prettier         |

## Project structure

- `src/pages/index.astro` — portfolio content and sections
- `src/layouts/Layout.astro` — document layout and metadata
- `src/styles/global.css` — design system and responsive styles
- `src/assets/taskify-home.png` — source image optimized by Astro during the build
- `public/favicon.svg` — site icon

Use `@/` for imports from `src`, such as `@/layouts/Layout.astro`. The alias is configured in both `astro.config.mjs` and `tsconfig.json`; it is also a project rule in `AGENTS.md`.

Portfolio content is based on `requirements.md`. Update the page content there and in `src/pages/index.astro` when Angel's experience changes.

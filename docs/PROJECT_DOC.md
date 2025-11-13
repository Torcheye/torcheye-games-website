# Torcheye Games Website - Project Documentation

**Last Updated:** 2025-11-13
**Current Phase:** Phase 6.3 - Giscus Comment System Added
**Latest Changes:** Implemented Giscus comment system for blog posts (requires GitHub Discussions setup)

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Design System](#design-system)
5. [Content Management](#content-management)
6. [Future Enhancements](#future-enhancements)
7. [Troubleshooting](#troubleshooting)

---

## Project Overview

### Goals
- Create immersive landing page for Chiaroscuro with trailer, media, and CTAs
- Build studio page featuring team (you + Timmie the cat)
- Showcase games with full portfolio capability
- Implement markdown-based dev blog with tagging (1-2 posts/month)
- Prepare for future: multi-language support (EN/CN) and interactive light elements

### Current Status (Phase 6.3 - Giscus Comment System Added)
- ✅ Single-page Chiaroscuro landing with enhanced features
- ✅ Dark brutalist theme (Noire Truth palette)
- ✅ Global navigation and footer
- ✅ Blog infrastructure with Content Collections
- ✅ **Giscus comment system for blog posts** (GitHub Discussions-based)
- ✅ Media gallery with lightbox
- ✅ Feature showcase with hover animations and MP4 videos
- ✅ Responsive design (mobile/tablet/desktop)
- ✅ SEO optimization ready
- ✅ **Performance fully optimized (96% reduction in page weight)**
  - Screenshots: WebP format, 55-283KB each (~3MB total)
  - Feature videos: MP4 format, 374-506KB each (~1.4MB total)
  - Total page weight: ~3MB (down from ~70MB)
  - Proper font loading with preconnect optimization

### Site Structure
- **Home** (`/`) - Chiaroscuro game landing page
- **Studio** (`/studio`) - About page with team info
- **Blog** (`/blog`) - Dev blog with tagging system
- ~~**Works** (`/works`) - Game portfolio~~ (temporarily disabled)

---

## Technology Stack

### Core
- **Framework**: Astro 5.8.0 (Static Site Generation)
- **Language**: TypeScript
- **Styling**: Custom CSS with CSS Variables (no frameworks)
- **Content**: Astro Content Collections + Markdown
- **Integrations**: @astrojs/sitemap

### Design System
- **Theme**: Dark Brutalist (Noire Truth palette)
- **Primary Colors**:
  - Background: `#1e1c32`
  - Text: `#c6baac`
- **Typography**: IM Fell English (headings) + System fonts (body)
- **Principles**: High contrast, thick borders, no rounded corners

### Deployment
- **Auto-deployed** to Cloudflare Pages on git push
- **Build command**: `npm run build`
- **Output**: `dist/`

---

## Project Structure

```
src/
├── components/        # Reusable UI components
├── layouts/           # Page layouts
├── pages/             # Routes (file-based routing)
│   ├── index.astro    # Home
│   ├── studio.astro   # About page
│   ├── blog/          # Blog index and posts
│   └── works/         # Portfolio (hidden)
├── content/blog/      # Markdown blog posts
└── styles/global.css  # Design system

public/images/
├── screenshots/       # Game screenshots (WebP)
├── features/          # Feature videos (MP4)
├── team/              # Team photos
└── blog/              # Blog cover images
```

---

## Design System

All design tokens are defined in `src/styles/global.css` using CSS variables.

### Colors
- **Background**: `#1e1c32` (primary), `#2a2740` (secondary)
- **Text**: `#c6baac` (primary), `#b4a99a` (secondary)
- **Border**: `#3d3a52`

### Typography
- **Headings**: IM Fell English font
- **Body**: System fonts
- **Scale**: `--text-xs` through `--text-6xl` (responsive with clamp)

### Spacing & Layout
- **Scale**: `--space-1` (4px) through `--space-24` (96px)
- **Borders**: 2-4px (brutalist style)
- **Max container**: 1200px
- **Breakpoints**: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)

### Design Principles
- High contrast dark theme
- Thick borders, no rounded corners
- Bold typography
- Minimal decorative elements
- Functional over decorative

---

## Content Management

### Adding Blog Posts

Create a new markdown file in `src/content/blog/`:

```markdown
---
title: "My Post Title"
date: 2025-11-01
tags: ["Game Design", "Programming"]
excerpt: "Brief summary"
coverImage: "/images/blog/cover.jpg"
author: "King Zhou"
---

Your content here...
```

Place cover images in `public/images/blog/`. Run `npm run dev` to preview.

### Adding Screenshots

1. **Optimize first**: WebP format, 200-500KB per image
2. Add to `public/images/screenshots/`
3. Update the image array in `src/pages/index.astro`

### Updating Team Info

Edit `src/pages/studio.astro` and add photos to `public/images/team/`

### Updating Social Links

Edit the `socialLinks` array in `src/components/Footer.astro`

### Configuring Giscus Comments

The blog uses Giscus for comments, powered by GitHub Discussions. To complete the setup:

1. **Enable GitHub Discussions** on your repository:
   - Go to repository Settings → Features
   - Check "Discussions"

2. **Get your configuration values**:
   - Visit https://giscus.app
   - Enter your repository: `Torcheye/torcheye-games-website`
   - Select a category (e.g., "General" or "Announcements")
   - Copy the generated `data-repo-id` and `data-category-id`

3. **Update the component**:
   - Edit `src/components/Giscus.astro`
   - Replace `YOUR_REPO_ID` with your actual repo ID
   - Replace `YOUR_CATEGORY_ID` with your actual category ID

4. **Theme customization** (optional):
   - Current theme: `dark` (matches site design)
   - Other options: `light`, `dark_dimmed`, `transparent_dark`, `preferred_color_scheme`

---

## Future Enhancements

### Phase 7: Internationalization (EN/CN)

**What to add:**
- Language switcher in Header (currently placeholder)
- Use Astro's native i18n routing
- Create `src/i18n/` with EN and CN translation files
- Reorganize pages: `src/pages/zh/` for Chinese content
- Add locale field to blog post schema

**Key files to update:**
- `astro.config.mjs` - Add i18n config
- `src/components/Header.astro` - Enable language switcher
- `src/content/config.ts` - Add locale to schema

---

### Phase 8: Interactive Light/Shadow Elements

**Planned features:**
- Mouse-following light effect on hero title
- Shadow mask reveals on feature showcase
- Canvas-based interactive background
- Dark/light mode toggle

**Implementation options:**
- CSS: `radial-gradient`, `clip-path`, `mask-image`
- Canvas API for dynamic light effects
- Three.js for advanced 3D lighting (optional)

**Target components:**
- `HeroSection.astro` - Cursor light effect
- `FeatureShowcase.astro` - Shadow reveals
- New: `InteractiveBackground.astro` - Full-page canvas

---

### Phase 9: Additional Features

- Search functionality for blog
- Newsletter subscription
- Analytics (Plausible/Fathom)
- Press kit page
- Expanded game portfolio

---

## Troubleshooting

### Common Issues

**Build errors**
- Check `src/content/blog/` exists
- Clear cache: `rm -rf node_modules .astro/ dist/` then `npm install`

**Images not loading**
- Ensure images are in `/public/` folder
- Use absolute paths: `/images/...` not `../images/...`

**Performance** ✅ OPTIMIZED
- All images optimized to WebP format (55-283KB per screenshot)
- All feature demonstrations converted to MP4 videos (374-506KB per video)
- Total page weight reduced from ~70MB to ~3MB (96% reduction)
- See [PERFORMANCE_COMPLETED.md](./PERFORMANCE_COMPLETED.md) for full optimization report

**Common commands**
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## Resources

- [Astro Documentation](https://docs.astro.build)
- [PERFORMANCE_COMPLETED.md](./PERFORMANCE_COMPLETED.md) - Performance optimization completion report
- [ACCESSIBILITY_AUDIT.md](./ACCESSIBILITY_AUDIT.md)

---

**Last Update:** 2025-10-31 | **Next Phase:** Internationalization (i18n)

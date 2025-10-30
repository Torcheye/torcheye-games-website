# Torcheye Games Website

Official website for Torcheye Games, featuring the dark-themed brutalist landing page for **Chiaroscuro** - A Game of Light and Shadow.

Built with [Astro](https://astro.build) for optimal performance and SEO.

---

## 🎮 About

This website showcases Torcheye Games' portfolio, with a primary focus on the puzzle-adventure game **Chiaroscuro**, where light and shadow shape reality itself.

### Current Status
- ✅ **Phase 1**: Foundation & Architecture (Complete)
- ✅ **Phase 2**: Landing Page Enhancement (Complete)
- 🔄 **Phase 3**: Studio Page (Upcoming)

---

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Server runs at http://localhost:4321/

# Build for production
npm run build

# Preview production build
npm run preview
```

### Adding Content
See [docs/CONTENT_GUIDE.md](./docs/CONTENT_GUIDE.md) for detailed instructions on replacing placeholder content with your game assets.

---

## 📁 Project Structure

```
Torcheye Games Website/
├── docs/                    # 📘 Documentation & guides
│   ├── EXPANSION_PLAN.md   # Full development roadmap
│   ├── CONTENT_GUIDE.md    # Asset import instructions
│   └── PHASE_1_COMPLETE.md # Phase 1 summary
├── public/                  # Static assets
│   ├── images/             # Game screenshots, features
│   ├── cover-image.png     # Main cover image
│   └── favicon.png
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── HeroSection.astro      # Video hero with interactive title
│   │   ├── FeatureShowcase.astro  # Cinematic feature display
│   │   ├── MediaGallery.astro     # Auto-play screenshot gallery
│   │   ├── Header.astro           # Global navigation
│   │   └── Footer.astro           # Social links
│   ├── layouts/
│   │   ├── Layout.astro           # Base layout
│   │   └── BlogPost.astro         # Blog post layout
│   ├── pages/
│   │   ├── index.astro            # Chiaroscuro landing page
│   │   ├── studio.astro           # About studio (Phase 3)
│   │   ├── works/                 # Portfolio (Phase 4)
│   │   └── blog/                  # Dev blog (Phase 5)
│   └── content/
│       ├── blog/                  # Markdown blog posts
│       └── config.ts              # Content collections
└── README.md                # You are here
```

---

## 🎨 Design System

### Color Palette
- **Background**: `#1e1c32` (Deep purple-gray)
- **Text Primary**: `#c6baac` (Warm beige)
- **Text Secondary**: `#b4b4b4` (Light gray)
- **Text Tertiary**: `#8a7f70` (Muted brown)

### Typography
- **Headings**: 'IM Fell English' (serif)
- **Body**: System fonts
- **Code**: 'SF Mono', Monaco

### Design Principles
- Minimalistic brutalism
- Dark theme throughout
- Thick borders (2-4px)
- No rounded corners
- High contrast
- Interactive light/shadow effects

---

## 📚 Documentation

All project documentation is located in the [`/docs`](./docs) folder:

- **[EXPANSION_PLAN.md](./docs/EXPANSION_PLAN.md)** - Complete 6-phase development roadmap
- **[CONTENT_GUIDE.md](./docs/CONTENT_GUIDE.md)** - Step-by-step guide for adding your content
- **[PHASE_1_COMPLETE.md](./docs/PHASE_1_COMPLETE.md)** - Phase 1 completion summary

---

## 🔧 Tech Stack

- **Framework**: [Astro 5.8.0](https://astro.build)
- **Language**: TypeScript
- **Styling**: Custom CSS with CSS Variables
- **Content**: Astro Content Collections + Markdown
- **Deployment**: Static site (Vercel/Netlify/Cloudflare Pages)

---

## 🎯 Features

### Chiaroscuro Landing Page
- ✅ Interactive hero with mouse-tracking light effect
- ✅ YouTube trailer embed
- ✅ Cinematic feature showcase (hover-to-expand with GIF transitions)
- ✅ Auto-playing screenshot gallery with lightbox
- ✅ Steam wishlist CTAs
- ✅ Fully responsive design

### Global Components
- ✅ Navigation header with site links
- ✅ Footer with social media links
- ✅ Dark brutalist theme throughout

---

## 🚧 Roadmap

See [docs/EXPANSION_PLAN.md](./docs/EXPANSION_PLAN.md) for the complete development plan.

### Upcoming Phases
- **Phase 3**: Studio Page (team profiles, about us)
- **Phase 4**: Works/Portfolio (game showcase with itch.io integration)
- **Phase 5**: Dev Blog System (markdown-based with tags)
- **Phase 6**: Polish & Optimization (SEO, performance, accessibility)

---

## 📝 Commands Reference

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start dev server at `localhost:4321`             |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview production build locally                 |
| `npm run astro ...`       | Run Astro CLI commands                           |
| `npm run astro -- --help` | Get help with Astro CLI                          |

---

## 🤝 Contributing

This is a personal project for Torcheye Games. For questions or feedback, reach out at:
- **Email**: hello@torcheyegames.com
- **Twitter**: [@torcheyegames](https://twitter.com/torcheyegames)
- **Discord**: [Join our server](https://discord.gg/RHggGYAQjp)

---

## 📄 License

© 2025 Torcheye Games. All rights reserved.

---

**Last Updated**: 2025-10-30
**Astro Version**: 5.8.0
**Project Status**: Phase 2 Complete

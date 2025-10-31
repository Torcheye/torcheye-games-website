# Torcheye Games Website Expansion Plan

**Project:** Transform single-page Chiaroscuro landing into full studio website
**Style:** Minimalistic Brutalism Dark Theme
**Timeline:** Phased approach (6 phases)
**Status:** Phase 1 - Foundation (In Progress)

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Phase Breakdown](#phase-breakdown)
3. [Claude Code Agent Workflow](#claude-code-agent-workflow)
4. [Technology Stack](#technology-stack)
5. [File Structure](#file-structure)
6. [Design Guidelines](#design-guidelines)
7. [Content Requirements](#content-requirements)
8. [Progress Tracking](#progress-tracking)

---

## Project Overview

### Goals
- Create immersive landing page for Chiaroscuro with trailer, media, and CTAs
- Build studio page featuring team (you + Timmie the cat)
- Showcase 5-6 games with full archive capability
- Implement markdown-based dev blog with tagging (1-2 posts/month)
- Prepare for future: multi-language support (EN/CN) and interactive light elements

### Current State
- ✅ Single landing page with Chiaroscuro game
- ✅ Dark theme established (#0a0a0a background, IM Fell English font)
- ✅ YouTube embed component
- ✅ Responsive design foundation
- ✅ Social media links (Twitter, Discord, Email)

### Target Features
- Global navigation header
- 4 main pages: Home (Chiaroscuro), Studio, Works, Blog
- Content management for blog posts
- Customizable color palette system
- SEO optimization
- Mobile responsive
- Future-ready for i18n and interactive elements

---

## Phase Breakdown

### ✅ Phase 0: Planning (COMPLETED)
- [x] Gather requirements
- [x] Define project scope
- [x] Create expansion plan document

---

### 🔄 Phase 1: Foundation & Architecture (IN PROGRESS)

**Goal:** Set up project structure, design system, and global navigation

#### Tasks:
- [ ] **1.1 Design System Setup**
  - [ ] Create `src/styles/global.css` with CSS custom properties
  - [ ] Define color palette (customizable via CSS variables)
  - [ ] Set up typography scale (--text-xs through --text-7xl)
  - [ ] Define spacing tokens (--space-1 through --space-24)
  - [ ] Create utility classes

- [ ] **1.2 Navigation Components**
  - [ ] Create `src/components/Header.astro`
    - Navigation links: Home, Studio, Works, Blog
    - Language switcher UI (placeholder)
    - Mobile hamburger menu
  - [ ] Create `src/components/Footer.astro`
    - Social media links
    - Copyright notice
    - Quick links

- [ ] **1.3 Content Collections Setup**
  - [ ] Create `src/content/config.ts`
  - [ ] Define blog post schema (title, date, tags, excerpt, coverImage)
  - [ ] Configure markdown processing
  - [ ] Test with sample blog post

- [ ] **1.4 Layout Updates**
  - [ ] Update `src/layouts/Layout.astro` to import global styles
  - [ ] Integrate Header and Footer
  - [ ] Create `src/layouts/BlogPost.astro` for blog posts

- [ ] **1.5 Placeholder Pages**
  - [ ] Create `src/pages/studio.astro`
  - [ ] Create `src/pages/works/index.astro`
  - [ ] Create `src/pages/works/archive.astro`
  - [ ] Create `src/pages/blog/index.astro`
  - [ ] Create `src/pages/blog/[slug].astro`
  - [ ] Create `src/pages/blog/tags/[tag].astro`

**Deliverables:**
- Functional navigation across all pages
- Consistent dark theme across site
- Blog infrastructure ready for content

---

### ✅ Phase 2: Landing Page Enhancement (COMPLETED)

**Goal:** Polish Chiaroscuro page with better structure and engaging content

#### Tasks:
- [x] **2.1 Hero Section Refinement**
  - [x] Integrate trailer video (primary)
  - [x] Interactive light/shadow effect on title (mouse-based)
  - [x] Refine tagline and hook text
  - [x] Style primary CTAs (Steam wishlist button)

- [x] **2.2 Awards & Recognition Section**
  - [x] Skipped (not needed for initial launch)

- [x] **2.3 Gameplay Features Section**
  - [x] Create cinematic feature showcase component
  - [x] Hover-to-expand animation with GIF transitions
  - [x] Alternating left/right layout for visual interest

- [x] **2.4 Media Gallery**
  - [x] Create responsive lightbox gallery
  - [x] Auto-play slideshow with navigation
  - [x] Thumbnail strip with scroll controls
  - [x] Keyboard navigation support

- [x] **2.5 Additional CTAs**
  - [x] Final CTA section with description
  - [x] Social media in Footer (from Phase 1)

**Content Needed:**
- Trailer video URL
- 3-5 GIFs with captions
- Award/recognition list
- 4-6 key features with descriptions
- 6-10 screenshots

---

### 📋 Phase 3: Studio Page

**Goal:** Create engaging About page featuring team and studio info

#### Tasks:
- [ ] **3.1 Studio Hero**
  - [ ] Studio name and tagline
  - [ ] Mission/vision statement
  - [ ] Background image or pattern

- [ ] **3.2 Team Section**
  - [ ] Create team member card component
  - [ ] Add your profile (name, role, bio, photo)
  - [ ] Add Timmie's profile (photo, fun description)

- [ ] **3.3 Contact Information**
  - [ ] Display email, Twitter, Discord
  - [ ] Style contact links
  - [ ] Add location (if desired)

- [ ] **3.4 Studio History (Optional)**
  - [ ] Timeline of key milestones
  - [ ] Current projects overview

**Content Needed:**
- Your bio and role
- Professional photo
- Timmie's photo and description
- Studio mission statement
- Contact information

---

### 📋 Phase 4: Works/Portfolio Page

**Goal:** Showcase game portfolio with itch.io integration

#### Tasks:
- [ ] **4.1 Featured Games Section**
  - [ ] Create game card component
  - [ ] Display 5-6 featured games
  - [ ] Link to itch.io pages

- [ ] **4.2 Game Archive Page**
  - [ ] Create archive layout
  - [ ] Display all games in grid
  - [ ] Add filtering by tag/genre (optional)

- [ ] **4.3 Game Card Design**
  - [ ] Thumbnail image
  - [ ] Game title
  - [ ] One-line description
  - [ ] Tags/genre labels
  - [ ] Hover effects

**Content Needed:**
- 5-6 game titles
- Thumbnail images for each
- Short descriptions
- itch.io URLs
- Tags/genres

---

### 📋 Phase 5: Dev Blog System

**Goal:** Create markdown-based blog with navigation and tagging

#### Tasks:
- [ ] **5.1 Blog Index Page**
  - [ ] List all blog posts (newest first)
  - [ ] Show post previews (title, date, excerpt, cover image)
  - [ ] Pagination (if > 10 posts)

- [ ] **5.2 Blog Post Template**
  - [ ] Render markdown content
  - [ ] Display metadata (date, tags, author)
  - [ ] Add social sharing links
  - [ ] Link to cross-posted platforms

- [ ] **5.3 Tag System**
  - [ ] Display tags on posts
  - [ ] Create tag filter page
  - [ ] Tag cloud or list navigation

- [ ] **5.4 Sample Blog Posts**
  - [ ] Create 2-3 sample posts
  - [ ] Test image/GIF embedding
  - [ ] Test code syntax highlighting

**Content Needed:**
- 2-3 initial blog posts (markdown)
- Cover images for posts
- Define tag categories (Game Design, Art, Programming, Tech Art, etc.)

**Planned Tags:**
- Game Design
- Art
- Programming
- Tech Art
- Devlog
- Announcement

---

### 📋 Phase 6: Polish & Optimization

**Goal:** Final touches, performance, and preparation for future features

#### Tasks:
- [ ] **6.1 SEO & Meta Tags**
  - [ ] Add Open Graph tags to all pages
  - [ ] Create og:image for each page
  - [ ] Add Twitter Card meta tags
  - [ ] Create sitemap.xml

- [ ] **6.2 Performance**
  - [ ] Optimize images (use Astro Image)
  - [ ] Lazy load images
  - [ ] Minify CSS/JS
  - [ ] Test load times

- [ ] **6.3 Responsive Check**
  - [ ] Test on mobile (< 768px)
  - [ ] Test on tablet (768-1024px)
  - [ ] Test on desktop (> 1024px)
  - [ ] Fix any layout issues

- [ ] **6.4 Accessibility**
  - [ ] Add alt text to all images
  - [ ] Check keyboard navigation
  - [ ] Test with screen reader
  - [ ] Ensure sufficient color contrast

- [ ] **6.5 Future-Ready Documentation**
  - [ ] Document where to add i18n
  - [ ] Note locations for interactive elements
  - [ ] Create content update guide

---

## Claude Code Agent Workflow

### Overview
All component development and website modifications will be handled directly in Claude Code using specialized agents. The `astro-frontend-dev` agent is specifically designed for Astro-based game studio websites and will handle all UI/UX implementation.

### Workflow Steps

#### Step 1: Define Component Requirements
Clearly describe what you need:
- Component purpose and functionality
- Visual style (brutalist, minimalist, dark theme)
- Specific colors and typography
- Hover effects and interactions
- Responsive behavior
- Content structure

**Example Request:**
```
Create a dark-themed brutalist game card component with:
- Square thumbnail image (300x300)
- Game title in IM Fell English font
- One-line description
- "View on itch.io" button
- Hover effect that shifts the card slightly
- Background: #141414
- Text: #e4e4e4
- Thick 2px border
- No rounded corners
```

#### Step 2: Agent Handles Implementation
The astro-frontend-dev agent will:
- Analyze the current project structure using astro-mcp
- Create components in proper Astro syntax
- Apply your design system and CSS variables
- Ensure responsive design across breakpoints
- Follow accessibility best practices
- Optimize for performance

#### Step 3: Review & Iterate
1. The agent creates the component and integrates it
2. Run `npm run dev` to see the result
3. Test on different screen sizes
4. Request adjustments if needed
5. Agent makes refinements

### Component Development Order

Components will be developed phase by phase:

1. **Phase 1: Foundation**
   - Header navigation with mobile menu
   - Footer with social links
   - Base layout components

2. **Phase 2: Landing Page**
   - Hero section with video
   - Feature showcase cards
   - Media gallery
   - CTA sections

3. **Phase 3: Studio Page**
   - Team member cards
   - Contact info section
   - Studio hero section

4. **Phase 4: Portfolio**
   - Game card component
   - Grid layouts
   - Archive page structure

5. **Phase 5: Blog**
   - Blog post cards
   - Tag badge components
   - Post layout templates

### Best Practices for Component Requests

✅ **Do:**
- Specify exact colors from the design system
- Mention "brutalist" or "minimalist" style
- Describe hover effects and animations
- Specify font styles (IM Fell English for headings)
- Request dark theme explicitly
- Include responsive behavior requirements

✅ **Also Good:**
- Provide reference images or screenshots
- Mention specific spacing/sizing needs
- Describe user interactions
- Note accessibility requirements

❌ **Avoid:**
- Vague descriptions ("make it look cool")
- Forgetting responsive behavior
- Skipping interaction details
- Requesting features that require SSR

---

## Technology Stack

### Core
- **Framework:** Astro 5.8.0 (Static Site Generation)
- **Language:** TypeScript
- **Styling:** Custom CSS with CSS Variables (no framework)
- **Content:** Astro Content Collections + Markdown

### Future Additions (Phase 7+)
- **i18n:** astro-i18next or Astro's experimental i18n feature
- **Interactive Elements:** Three.js or Canvas API for light/shadow effects
- **Image Optimization:** @astrojs/image
- **Analytics:** Plausible or Fathom (privacy-friendly)

### Development Tools
- **Package Manager:** npm
- **Version Control:** Git
- **Deployment:** Vercel / Netlify / Cloudflare Pages (static hosting)

---

## File Structure

### Current Structure (Phase 0)
```
d:\TORCHEYE GAMES\Torcheye Games Website/
├── public/
│   ├── cover-image.png
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── Welcome.astro (unused)
│   │   └── YouTubeEmbed.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

### Target Structure (After Phase 6)
```
d:\TORCHEYE GAMES\Torcheye Games Website/
├── public/
│   ├── images/
│   │   ├── games/           # Game thumbnails
│   │   ├── team/            # Team photos
│   │   ├── awards/          # Award badges
│   │   └── blog/            # Blog cover images
│   ├── videos/              # Trailer and gameplay videos
│   ├── cover-image.png
│   ├── favicon.png
│   └── og-image.png         # Social sharing image
├── src/
│   ├── components/
│   │   ├── Header.astro            # Global navigation
│   │   ├── Footer.astro            # Global footer
│   │   ├── GameCard.astro          # Portfolio game card
│   │   ├── BlogCard.astro          # Blog post preview
│   │   ├── FeatureCard.astro       # Game feature showcase
│   │   ├── TeamMember.astro        # Studio team member
│   │   ├── AwardBadge.astro        # Award/recognition
│   │   ├── MediaGallery.astro      # Screenshot gallery
│   │   └── YouTubeEmbed.astro      # (existing)
│   ├── layouts/
│   │   ├── Layout.astro            # Base layout
│   │   ├── BlogPost.astro          # Blog post layout
│   │   └── Page.astro              # Generic page layout
│   ├── pages/
│   │   ├── index.astro             # Chiaroscuro landing
│   │   ├── studio.astro            # About studio
│   │   ├── works/
│   │   │   ├── index.astro         # Featured games
│   │   │   └── archive.astro       # All games archive
│   │   └── blog/
│   │       ├── index.astro         # Blog home
│   │       ├── [slug].astro        # Individual posts
│   │       └── tags/
│   │           └── [tag].astro     # Tag filter pages
│   ├── content/
│   │   ├── blog/                   # Markdown blog posts
│   │   │   ├── sample-post-1.md
│   │   │   ├── sample-post-2.md
│   │   │   └── ...
│   │   └── config.ts               # Content collections config
│   ├── styles/
│   │   ├── global.css              # Design system & tokens
│   │   └── markdown.css            # Blog post styling
│   └── utils/
│       └── helpers.ts              # Utility functions
├── EXPANSION_PLAN.md               # This document
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

---

## Design Guidelines

### Color Palette
```css
/* Primary Colors */
--color-bg-primary: #0a0a0a      /* Main background */
--color-bg-secondary: #141414    /* Cards, sections */
--color-bg-tertiary: #1a1a1a     /* Hover states */

/* Text Colors */
--color-text-primary: #e4e4e4    /* Headings, primary text */
--color-text-secondary: #b4b4b4  /* Body text */
--color-text-tertiary: #999999   /* Muted text */

/* Accent Colors */
--color-accent-primary: #ffffff  /* Hover, focus */
--color-accent-secondary: #cccccc

/* Borders */
--color-border: #333333
--color-border-light: #4a4a4a
```

### Typography
- **Primary Font:** 'IM Fell English' (serif) - for headings and game titles
- **Secondary Font:** System fonts - for body text and UI
- **Mono Font:** 'SF Mono', Monaco, etc. - for code blocks

### Spacing Scale
- Use CSS custom properties: `var(--space-4)` instead of hardcoded values
- Maintain consistent spacing throughout the site

### Brutalism Principles
- **Thick borders** (2-4px)
- **No rounded corners** (or minimal: 2-4px max)
- **High contrast**
- **Bold typography**
- **Minimal decorative elements**
- **Grid-based layouts**
- **Functional over decorative**

### Responsive Design
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px
- **Max width:** 1200px container

---

## Content Requirements

### Landing Page (Chiaroscuro)
- [x] Game title and tagline
- [x] Cover image
- [x] YouTube gameplay video
- [ ] Main trailer video URL
- [ ] 3-5 animated GIFs with captions
- [ ] List of awards/recognition
- [ ] 4-6 key gameplay features
- [ ] 6-10 screenshots for gallery
- [ ] Press kit link (optional)

### Studio Page
- [ ] Studio mission statement
- [ ] Your name, role, bio, photo
- [ ] Timmie's photo and description
- [ ] Contact email, Twitter, Discord
- [ ] Location (optional)
- [ ] Studio history/milestones (optional)

### Works/Portfolio
- [ ] 5-6 featured games:
  - Game title
  - Thumbnail image (300x300 recommended)
  - One-line description
  - itch.io URL
  - Tags/genres

### Dev Blog
- [ ] 2-3 initial blog posts (markdown format)
- [ ] Cover images for posts
- [ ] Author info
- [ ] Cross-post links (if applicable)

**Blog Post Template:**
```markdown
---
title: "Post Title"
date: 2025-01-15
tags: ["Game Design", "Art"]
excerpt: "Short summary of the post"
coverImage: "/images/blog/post-cover.jpg"
crosspost:
  - platform: "Twitter"
    url: "https://twitter.com/..."
  - platform: "Medium"
    url: "https://medium.com/..."
---

Your markdown content here...
```

---

## Progress Tracking

### Phase Status Legend
- ✅ Completed
- 🔄 In Progress
- 📋 Planned
- ⏸️ Paused
- ❌ Blocked

### Current Status: Phase 3 - Studio Page
**Phase 1 Completed:** 2025-10-29
**Phase 2 Completed:** 2025-10-30
**Target Completion:** TBD
**Progress:** Phase 2 complete, Phase 3 ready to start

### Phase Checklist

#### Phase 1: Foundation & Architecture
- [ ] 1.1 Design System Setup
- [ ] 1.2 Navigation Components
- [ ] 1.3 Content Collections Setup
- [ ] 1.4 Layout Updates
- [ ] 1.5 Placeholder Pages

#### Phase 2: Landing Page Enhancement
- [x] 2.1 Hero Section Refinement
- [x] 2.2 Awards & Recognition Section (Skipped)
- [x] 2.3 Gameplay Features Section
- [x] 2.4 Media Gallery
- [x] 2.5 Additional CTAs

#### Phase 3: Studio Page
- [ ] 3.1 Studio Hero
- [ ] 3.2 Team Section
- [ ] 3.3 Contact Information
- [ ] 3.4 Studio History (Optional)

#### Phase 4: Works/Portfolio Page
- [ ] 4.1 Featured Games Section
- [ ] 4.2 Game Archive Page
- [ ] 4.3 Game Card Design

#### Phase 5: Dev Blog System
- [ ] 5.1 Blog Index Page
- [ ] 5.2 Blog Post Template
- [ ] 5.3 Tag System
- [ ] 5.4 Sample Blog Posts

#### Phase 6: Polish & Optimization
- [ ] 6.1 SEO & Meta Tags
- [ ] 6.2 Performance
- [ ] 6.3 Responsive Check
- [ ] 6.4 Accessibility
- [ ] 6.5 Future-Ready Documentation

---

## Notes & Decisions

### Design Decisions
- Using CSS custom properties instead of Tailwind for true minimalism
- Maintaining dark theme (#0a0a0a) across all pages
- IM Fell English font for headings to reinforce game aesthetic
- Static site generation (no SSR needed)

### Future Enhancements (Phase 7+)
- **Interactive Light Elements:**
  - Spotlight effect following cursor
  - Draggable shadow objects
  - Light/dark mode toggle with animation
  - Canvas or Three.js integration

- **Multi-language Support:**
  - English (primary)
  - Chinese (simplified/traditional)
  - astro-i18next integration
  - Language switcher in header
  - Translated content collections

### Questions & Clarifications
- (Add any questions or decisions that need clarification)

---

## Resources

### Documentation
- [Astro Docs](https://docs.astro.build/)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [v0.dev](https://v0.dev)
- [Astro MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/astro)

### Inspiration
- (Add links to game studio websites or designs you like)

---

**Last Updated:** 2025-10-31
**Version:** 1.0
**Document Owner:** Torcheye Games Team

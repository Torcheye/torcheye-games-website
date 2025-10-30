# Content Import Guide
**Torcheye Games Website - Chiaroscuro Landing Page**

This guide will help you replace placeholder content with your real game assets.

---

## 📁 File Organization

First, organize your media files in the `/public` directory:

```
public/
├── images/
│   ├── features/
│   │   ├── shadows-cover.png       # Static feature image
│   │   ├── shadows-animated.gif    # Animated feature GIF
│   │   ├── light-cover.png
│   │   ├── light-animated.gif
│   │   ├── contrasts-cover.png
│   │   └── contrasts-animated.gif
│   └── screenshots/
│       ├── screenshot-1.png
│       ├── screenshot-2.png
│       ├── screenshot-3.png
│       ├── screenshot-4.png
│       ├── screenshot-5.png
│       └── screenshot-6.png        # Add as many as needed
├── videos/                          # Optional: for local videos
├── cover-image.png                  # Your existing cover
└── favicon.png
```

### Recommended Image Sizes

- **Feature covers**: 1920x1080px (16:9 ratio)
- **Feature GIFs**: 1920x1080px, optimized for web (<5MB recommended)
- **Screenshots**: 1920x1080px or higher (16:9 ratio preferred)
- **Favicon**: 512x512px

---

## 🎬 1. Hero Section

**File**: `src/pages/index.astro` (lines 14-22)

### Update Video
Replace `YOUR_YOUTUBE_VIDEO_ID` with your actual YouTube video ID:
```astro
<HeroSection
    videoId="YOUR_YOUTUBE_VIDEO_ID"  // e.g., "dQw4w9WgXcQ"
    title="Chiaroscuro"
    tagline="A Game of Light and Shadow"
    releaseYear="2026"
    steamUrl="https://store.steampowered.com/app/2831270"
/>
```

**How to get YouTube Video ID:**
- From URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID is everything after `v=`: `dQw4w9WgXcQ`

### Customization Options
- `title`: Game name
- `tagline`: Subtitle/description
- `releaseYear`: Release year or "TBA"
- `steamUrl`: Your Steam page URL

---

## 🎮 2. Feature Showcase

**File**: `src/pages/index.astro` (lines 24-49)

Replace the `features` array with your actual content:

```astro
<FeatureShowcase
    features={[
        {
            title: "Embrace Shadows",
            description: "Navigate through darkness and discover hidden paths where light cannot reach.",
            coverImage: "/images/features/shadows-cover.png",
            gifUrl: "/images/features/shadows-animated.gif",
            align: "left"
        },
        {
            title: "Manipulate Light",
            description: "Control light sources to solve intricate puzzles and reveal the truth.",
            coverImage: "/images/features/light-cover.png",
            gifUrl: "/images/features/light-animated.gif",
            align: "right"
        },
        {
            title: "Explore Contrasts",
            description: "Experience a world where the boundary between light and shadow shapes reality itself.",
            coverImage: "/images/features/contrasts-cover.png",
            gifUrl: "/images/features/contrasts-animated.gif",
            align: "left"
        }
    ]}
/>
```

### Feature Properties
- `title`: Feature name (2-4 words work best)
- `description`: Short description (1-2 sentences, ~100 characters)
- `coverImage`: Path to static image (shown by default)
- `gifUrl`: Path to animated GIF (shown on hover)
- `align`: `"left"` or `"right"` (alternating creates visual interest)

### Tips
- Keep descriptions concise and punchy
- Alternate `align` values for better layout
- GIFs should loop seamlessly
- Use 3-5 features for best results

---

## 📸 3. Media Gallery

**File**: `src/pages/index.astro` (lines 51-63)

Replace the `images` array with your screenshots:

```astro
<MediaGallery
    showHeading={false}
    autoPlayInterval={3000}
    images={[
        { id: 1, url: "/images/screenshots/screenshot-1.png", alt: "Puzzle mechanics in shadow realm" },
        { id: 2, url: "/images/screenshots/screenshot-2.png", alt: "Light manipulation puzzle" },
        { id: 3, url: "/images/screenshots/screenshot-3.png", alt: "Atmospheric environment" },
        { id: 4, url: "/images/screenshots/screenshot-4.png", alt: "Character navigation" },
        { id: 5, url: "/images/screenshots/screenshot-5.png", alt: "Boss encounter" },
        { id: 6, url: "/images/screenshots/screenshot-6.png", alt: "Scenic vista" },
        { id: 7, url: "/images/screenshots/screenshot-7.png", alt: "Additional screenshot" },
        { id: 8, url: "/images/screenshots/screenshot-8.png", alt: "Additional screenshot" }
    ]}
/>
```

### Gallery Properties
- `id`: Unique number for each image
- `url`: Path to screenshot file
- `alt`: Screen reader description (important for accessibility!)
- `autoPlayInterval`: Time in milliseconds (3000 = 3 seconds)
- `showHeading`: `false` for minimal design (current), `true` to show "Screenshots" title

### Tips
- Use 6-10 screenshots for best experience
- Write descriptive `alt` text for accessibility
- Order images from most impressive to least
- All images auto-cycle through the gallery

---

## 🎯 4. Final CTA Section

**File**: `src/pages/index.astro` (lines 65-81)

Update the description and call-to-action:

```astro
<section class="final-cta">
    <div class="cta-content">
        <h2 class="cta-heading">Join the Journey</h2>
        <p class="cta-description">
            Your compelling game description here. This is where you hook
            players and convince them to wishlist your game.
        </p>
        <a href="YOUR_STEAM_URL" class="cta-button" target="_blank" rel="noopener">
            <svg class="cta-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
            </svg>
            Wishlist on Steam
        </a>
    </div>
</section>
```

### CTA Properties
- `cta-heading`: Final heading (keep it short and impactful)
- `cta-description`: 2-3 sentences about your game
- Button `href`: Your Steam page or other store link
- Button text: "Wishlist on Steam", "Get the Game", etc.

---

## 🎨 Global Color Palette

All components now use CSS custom properties. To change colors site-wide, create a `src/styles/global.css` file:

```css
:root {
    /* Background Colors */
    --color-bg-primary: #1e1c32;      /* Main background */
    --color-bg-secondary: #141414;    /* Cards/sections */
    --color-bg-tertiary: #1a1a1a;     /* Hover states */

    /* Text Colors */
    --color-text-primary: #c6baac;    /* Headings, primary text */
    --color-text-secondary: #b4b4b4;  /* Body text */
    --color-text-tertiary: #8a7f70;   /* Muted text */

    /* Borders */
    --color-border: #333333;
    --color-border-light: #c6baac;

    /* Accent Colors */
    --color-accent: #ffffff;
}
```

Then import it in your `src/layouts/Layout.astro`:
```astro
---
import '../styles/global.css';
---
```

---

## ⚡ Quick Start Checklist

- [ ] Add your YouTube trailer video ID
- [ ] Upload 3-6 feature images + GIFs to `/public/images/features/`
- [ ] Upload 6-10 screenshots to `/public/images/screenshots/`
- [ ] Update feature titles and descriptions
- [ ] Update screenshot paths in `index.astro`
- [ ] Update final CTA description
- [ ] Test all images load correctly
- [ ] Verify Steam link works

---

## 🐛 Troubleshooting

### Images Not Loading
- ✅ Check file paths start with `/` (e.g., `/images/screenshot.png`)
- ✅ File names are case-sensitive (screenshot.png ≠ Screenshot.png)
- ✅ Files are in `/public` directory (not `/src`)

### GIFs Too Large / Slow
- ✅ Optimize GIFs using [ezgif.com](https://ezgif.com/optimize)
- ✅ Keep file size under 5MB
- ✅ Reduce frame rate if needed (15-20 FPS is usually enough)

### Video Not Embedding
- ✅ Check YouTube URL is correct
- ✅ Video is set to "Public" or "Unlisted" (not "Private")
- ✅ Using video ID, not full URL

---

## 📝 Notes

- All file paths in code are **relative to the `/public` directory**
- Example: File at `/public/images/test.png` → use `/images/test.png` in code
- Always test locally with `npm run dev` before deploying
- Keep image file sizes reasonable for faster load times

---

**Need help?** Check the main `EXPANSION_PLAN.md` or component files for more details.

**Last Updated**: 2025-10-30

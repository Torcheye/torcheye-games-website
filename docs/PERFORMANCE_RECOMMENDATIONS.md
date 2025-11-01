# Performance Optimization Recommendations

**Generated:** 2025-10-31
**Phase:** 6.2 - Performance Optimization

---

## Current Status

### ✅ Already Optimized
- **Lazy Loading**: Implemented on below-the-fold images (FeatureShowcase, MediaGallery thumbnails)
- **Eager Loading**: Correctly used on above-the-fold images (hero video, main gallery image)
- **CSS/JS Minification**: Astro build process automatically minifies assets
- **Build Output**: CSS files are hashed and optimized (~5-16KB each)

---

## 🚨 Critical Issues Found

### 1. Oversized Images

**Impact:** High - Significantly affects page load time

#### Screenshots (53MB total)
Located in `public/images/screenshots/`:
- `screenshot_1.png` - **5.5MB**
- `screenshot_4.png` - **4.1MB**
- `screenshot_5.png` - **5.6MB**
- `screenshot_6.png` - **5.9MB**
- `screenshot_7.png` - **4.3MB**
- `screenshot_8.png` - **6.2MB**
- `screenshot_10.png` - **5.6MB**
- `screenshot_11.png` - **5.9MB**
- `screenshot_12.png` - **4.2MB**
- `screenshot_13.png` - **4.3MB**

**Recommendation:**
- Compress PNG files using tools like TinyPNG, Squoosh, or ImageOptim
- Target size: 200-500KB per screenshot (90%+ size reduction)
- Consider converting to WebP format for better compression

#### Feature GIFs (16MB total)
Located in `public/images/features/`:
- `Light Object Demo.gif` - **5.1MB**
- `Player Shadow Dimension.gif` - **6.0MB**
- `Vine Demo.gif` - **4.7MB**

**Recommendation:**
- Optimize GIFs using tools like Ezgif or gifski
- Consider converting to video format (MP4/WebM) for much better compression
- Target size: 500KB-1MB per GIF (80%+ size reduction)
- Alternative: Use video with autoplay instead of GIFs

#### Cover Image
- `cover-image.png` - **252KB** (acceptable, but could be optimized to ~100KB)

---

## 📊 Recommended Actions

### Priority 1: Image Optimization (Immediate)

1. **Compress all PNG screenshots**
   ```bash
   # Using ImageMagick example:
   for img in public/images/screenshots/*.png; do
     magick "$img" -quality 85 -strip "${img%.png}_optimized.png"
   done
   ```

2. **Optimize GIFs or convert to video**
   - For GIFs: Use Ezgif.com or gifski
   - For videos: Convert to MP4/WebM with autoplay
   ```html
   <video autoplay loop muted playsinline>
     <source src="/images/features/demo.mp4" type="video/mp4">
     <source src="/images/features/demo.webm" type="video/webm">
   </video>
   ```

3. **Implement Astro Image Component**
   - Install: `npm install @astrojs/image`
   - Add to `astro.config.mjs`
   - Use `<Image>` component for automatic optimization

### Priority 2: Implement Astro Image Integration

**Install:**
```bash
npm install @astrojs/image sharp
```

**Update `astro.config.mjs`:**
```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';

export default defineConfig({
  site: 'https://torcheyegames.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/works')
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ]
});
```

**Update components to use Image:**
```astro
---
import { Image } from '@astrojs/image/components';
---

<Image
  src="/images/screenshots/screenshot_1.png"
  alt="Gameplay screenshot"
  width={1920}
  height={1080}
  format="webp"
  quality={85}
  loading="lazy"
/>
```

### Priority 3: Additional Optimizations

1. **Add preload for critical assets**
   In `Layout.astro`:
   ```html
   <link rel="preload" as="image" href="/cover-image.png" />
   ```

2. **Enable browser caching**
   Add to hosting platform (Vercel/Netlify):
   ```
   Cache-Control: public, max-age=31536000, immutable
   ```

3. **Consider CDN**
   - Use Cloudflare Images or similar for automatic optimization
   - Or use hosting platform's built-in CDN (Vercel/Netlify)

---

## 📈 Expected Performance Improvements

### Before Optimization
- Total page weight: ~70MB (with all images)
- First Contentful Paint: ~3-5s (on 3G)
- Largest Contentful Paint: ~8-10s

### After Optimization
- Total page weight: ~5-8MB (90% reduction)
- First Contentful Paint: ~1-2s
- Largest Contentful Paint: ~3-4s
- Lighthouse Performance Score: 90+

---

## 🔧 Implementation Steps

1. **Backup original images** (already done - originals in public/)
2. **Compress images** using recommended tools
3. **Replace files** in public/images/
4. **Test locally** with `npm run build && npm run preview`
5. **Verify file sizes** are reduced
6. **Test on mobile** network (3G throttling in DevTools)
7. **Deploy** and monitor performance

---

## 📝 Tools & Resources

### Image Compression
- **TinyPNG**: https://tinypng.com (PNG/JPG)
- **Squoosh**: https://squoosh.app (All formats, by Google)
- **ImageOptim**: https://imageoptim.com (Mac app)
- **Sharp**: https://sharp.pixelplumbing.com (CLI tool)

### GIF Optimization
- **Ezgif**: https://ezgif.com/optimize
- **gifski**: https://gif.ski (CLI tool, best quality)
- **ffmpeg**: Convert GIF to video

### Video Conversion
```bash
# Convert GIF to MP4 (80-90% smaller)
ffmpeg -i input.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" output.mp4

# Convert GIF to WebM
ffmpeg -i input.gif -c vp9 -b:v 0 -crf 30 output.webm
```

### Performance Testing
- **Lighthouse**: Built into Chrome DevTools
- **WebPageTest**: https://webpagetest.org
- **PageSpeed Insights**: https://pagespeed.web.dev

---

## ✅ Checklist

- [ ] Compress all PNG screenshots (target: 200-500KB each)
- [ ] Optimize or convert GIFs (target: 500KB-1MB each)
- [ ] Install @astrojs/image integration
- [ ] Update components to use Image component
- [ ] Test build size and load times
- [ ] Run Lighthouse audit (target: 90+ score)
- [ ] Test on mobile devices
- [ ] Deploy optimized version
- [ ] Monitor real-world performance

---

## 🎯 Success Metrics

- [ ] Total page weight < 10MB
- [ ] Largest image < 1MB
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 4s
- [ ] Lighthouse Performance Score > 90
- [ ] Mobile load time < 5s (3G)

---

**Note:** Image optimization is a manual process that should be done before deployment. The original high-resolution images should be kept in a separate backup folder for future use.

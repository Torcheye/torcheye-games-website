import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://torcheyegames.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => {
        // Exclude the works pages from sitemap as they're currently hidden
        return !page.includes('/works');
      }
    })
  ]
});
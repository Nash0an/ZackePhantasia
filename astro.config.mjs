// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pruneUnusedImages from './integrations/prune-unused-images.mjs';

// SITE_URL und BASE_PATH setzt der GitHub-Actions-Workflow automatisch
// (Projektseite: https://USER.github.io/REPO/ → BASE_PATH=/REPO,
//  Benutzerseite oder eigene Domain: BASE_PATH leer lassen).
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

// DEMO_MODE=true zeigt auch nicht freigegebene Bilder sowie die Bildauswahl.
// Nur für die lokale Vorschau gedacht – niemals für das öffentliche Deployment.
const demoMode = process.env.DEMO_MODE === 'true';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap(), pruneUnusedImages()],
  vite: {
    define: {
      __DEMO_MODE__: JSON.stringify(demoMode),
    },
  },
});

import type { APIRoute } from 'astro';
import { site } from '../data/profile';

export const GET: APIRoute = ({ site: siteUrl }) => {
  const sitemap = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/sitemap-index.xml`, siteUrl);
  // Solange die Seite eine Demo ist, sollen Suchmaschinen sie nicht indexieren.
  const rules = site.isDemo ? 'User-agent: *\nDisallow: /\n' : 'User-agent: *\nAllow: /\n';
  return new Response(`${rules}\nSitemap: ${sitemap.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

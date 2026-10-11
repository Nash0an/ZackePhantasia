// Entfernt nach dem Build alle Bilddateien aus dist/, auf die keine Seite verweist.
// Damit landen nicht freigegebene Fotos (und ungenutzte Originale) nie im
// öffentlichen Deployment – auch nicht über eine direkte URL.
import { readdir, readFile, unlink } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const IMAGE_EXT = new Set(['.webp', '.avif', '.jpg', '.jpeg', '.png', '.heic']);
const TEXT_EXT = new Set(['.html', '.css', '.xml', '.txt', '.js', '.json', '.webmanifest']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)])),
  );
  return files.flat();
}

export default function pruneUnusedImages({ dir = '_astro' } = {}) {
  return {
    name: 'prune-unused-images',
    hooks: {
      'astro:build:done': async ({ dir: outUrl, logger }) => {
        const out = fileURLToPath(outUrl);
        const all = await walk(out);
        const texts = await Promise.all(
          all.filter((f) => TEXT_EXT.has(extname(f))).map((f) => readFile(f, 'utf8')),
        );
        const corpus = texts.join('\n');
        const candidates = all.filter(
          (f) => IMAGE_EXT.has(extname(f).toLowerCase()) && f.startsWith(join(out, dir)),
        );
        let removed = 0;
        for (const file of candidates) {
          if (!corpus.includes(basename(file))) {
            await unlink(file);
            removed++;
          }
        }
        logger.info(`${removed} nicht verwendete Bilddatei(en) entfernt, ${candidates.length - removed} behalten.`);
      },
    },
  };
}

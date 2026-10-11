import type { ImageMetadata } from 'astro';

/**
 * Zentrales Bildverzeichnis (zugleich Freigabeverzeichnis).
 *
 * - Bilddateien liegen in src/assets/images/ und werden beim Build optimiert
 *   (WebP/AVIF, mehrere Breiten, feste Maße).
 * - Im öffentlichen Build werden NUR Bilder mit approvedForPublication: true
 *   verwendet. Nicht freigegebene Bilder landen gar nicht erst in dist/.
 * - Im Demo-Modus (npm run dev) werden alle Bilder angezeigt.
 * - focus steuert den Bildausschnitt beim Zuschneiden (CSS object-position).
 */

export type ImageRole =
  | 'portrait' // Porträt der Person (Hero, Über mich)
  | 'landscape' // Landschaft / Stadt – Hintergründe, Bildstreifen, Galerie
  | 'detail' // Detail- und Stimmungsbilder
  | 'private'; // privat bzw. andere Personen erkennbar – nicht ohne ausdrückliche Freigabe

export interface ImageEntry {
  id: string;
  file: string;
  alt: string;
  role: ImageRole;
  /** CSS object-position, z. B. '50% 30%' */
  focus: string;
  approvedForPublication: boolean;
  /** Fotograf/in bzw. Rechteinhaber/in – vor Veröffentlichung eintragen */
  credit: string;
  /** Interne Notiz zur Freigabe (wird nicht angezeigt) */
  note?: string;
}

// Lazy: Es werden nur die Bilder importiert (und damit ausgeliefert), die tatsächlich verwendet werden.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/images/*.{webp,jpg,jpeg,png,avif}');

export const images: ImageEntry[] = [
  { id: 'foto_01', file: 'foto_01.webp', alt: 'Mann mit Sportsonnenbrille in einem Park, im Hintergrund Bäume und Wiese', role: 'portrait', focus: '30% 50%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_02', file: 'foto_02.webp', alt: 'Person sitzt auf einer Parkbank unter Bäumen', role: 'private', focus: '50% 40%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_03', file: 'foto_03.webp', alt: 'Selfie auf einer Holzterrasse, im Hintergrund eine weitere Person', role: 'private', focus: '70% 70%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)', note: 'Weitere Person erkennbar – Einwilligung nötig' },
  { id: 'foto_04', file: 'foto_04.webp', alt: 'Porträt eines Mannes mit Bart im Auto', role: 'private', focus: '50% 35%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_05', file: 'foto_05.webp', alt: 'Lächelnder Mann mit Sonnenbrille, Selfie im Freien', role: 'private', focus: '60% 40%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_06', file: 'foto_06.webp', alt: 'Stadtsilhouette mit Dom und Bogenbrücke am Fluss bei tiefstehender Sonne', role: 'landscape', focus: '50% 55%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_07', file: 'foto_07.webp', alt: 'Stahlbogenbrücke über einem Fluss im Gegenlicht unter bewölktem Himmel', role: 'landscape', focus: '50% 50%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_08', file: 'foto_08.webp', alt: 'Weite Wiese mit Bäumen bei Sonnenuntergang', role: 'landscape', focus: '50% 60%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_09', file: 'foto_09.webp', alt: 'Hand hält einen Pilz vor grünem Rasen', role: 'detail', focus: '50% 40%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_10', file: 'foto_10.webp', alt: 'Porträt eines Mannes mit Bart in weißer Berufskleidung in einem hellen Raum', role: 'portrait', focus: '50% 30%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)', note: 'Bevorzugtes Hero-Porträt' },
  { id: 'foto_11', file: 'foto_11.webp', alt: 'Person auf einer Bank mit Blick über eine sonnige Wiese', role: 'landscape', focus: '40% 60%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_12', file: 'foto_12.webp', alt: 'Person auf einer Bank im Gegenlicht vor einer weiten Wiese', role: 'landscape', focus: '40% 60%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_13', file: 'foto_13.webp', alt: 'Sonnenuntergang über einem Sandstrand', role: 'landscape', focus: '50% 45%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_14', file: 'foto_14.webp', alt: 'Mann mit Sportsonnenbrille unter Bäumen', role: 'private', focus: '50% 35%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_15', file: 'foto_15.webp', alt: 'Straßencafé in einer Altstadt mit Gästen', role: 'private', focus: '50% 50%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)', note: 'Andere Personen erkennbar – nicht veröffentlichen' },
  { id: 'foto_16', file: 'foto_16.webp', alt: 'Selfie eines Mannes unter Bäumen', role: 'private', focus: '50% 40%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_17', file: 'foto_17.webp', alt: 'Lächelnder Mann in Berufskleidung vor einem Fenster', role: 'portrait', focus: '30% 35%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_18', file: 'foto_18.webp', alt: 'Mann in Berufskleidung vor einem Fenster mit Blick ins Grüne', role: 'portrait', focus: '30% 35%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_19', file: 'foto_19.webp', alt: 'Mann mit Bart in weißer Berufskleidung im Freien', role: 'portrait', focus: '50% 40%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
  { id: 'foto_20', file: 'foto_20.webp', alt: 'Parklandschaft mit Bäumen im Gegenlicht der Sonne', role: 'landscape', focus: '50% 55%', approvedForPublication: true, credit: 'Bereitgestellt vom Kunden (Freigabe 11.10.2026)' },
];

/** Welche Bilder wo eingesetzt werden – hier austauschen. */
export const imageSlots = {
  heroPortrait: 'foto_10',
  heroPortraitAlternatives: ['foto_19', 'foto_17', 'foto_18', 'foto_01'],
  about: 'foto_12',
  contactBackground: 'foto_06',
  gallery: ['foto_07', 'foto_08', 'foto_13', 'foto_20', 'foto_11', 'foto_06'],
} as const;

export const demoMode = __DEMO_MODE__;

export interface ResolvedImage extends ImageEntry {
  src: ImageMetadata;
}

/** Liefert ein Bild nur, wenn es freigegeben ist (oder der Demo-Modus aktiv ist). */
export async function getImage(id: string | undefined): Promise<ResolvedImage | undefined> {
  if (!id) return undefined;
  const entry = images.find((img) => img.id === id);
  if (!entry) return undefined;
  if (!entry.approvedForPublication && !demoMode) return undefined;
  const load = files[`../assets/images/${entry.file}`];
  if (!load) {
    console.warn(`[images] Datei nicht gefunden: ${entry.file}`);
    return undefined;
  }
  return { ...entry, src: (await load()).default };
}

export async function getImages(ids: readonly string[]): Promise<ResolvedImage[]> {
  const resolved = await Promise.all(ids.map(getImage));
  return resolved.filter((img): img is ResolvedImage => Boolean(img));
}

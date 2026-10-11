# Inhalte pflegen

Fast alles wird in **zwei Dateien** geändert. Nach dem Speichern und `git push` aktualisiert sich die Seite
automatisch.

## Texte – `src/data/profile.ts`

| Was | Wo |
| --- | --- |
| Name, Berufsbezeichnung, Claim, Biografie, Ort | `person` |
| E-Mail, Telefon, weitere Kontaktwege | `person.contact` (erster Eintrag = großer Kontakt-Button) |
| LinkedIn, Instagram usw. | `person.social` – `{ label: 'LinkedIn', href: 'https://…' }` |
| Tätigkeitsbereiche (3–5) | `competencies` – Reihenfolge über `order`, Bild über `imageId` |
| Abschlüsse und Zertifikate | `qualifications` – `year` und `proofUrl` sind optional |
| Projekte und Referenzen | `projects` – `competencyIds` verknüpft mit den Bereichen |
| Kundenstimmen | `testimonials` – erscheinen nur mit `approved: true` (schriftliche Freigabe!) |
| Seitentitel, Beschreibung, Menü | `site` |
| Hell oder dunkel | `site.theme: 'hell' \| 'dunkel'` |
| Demo-Banner und `noindex` | `site.isDemo` |
| Impressumsangaben | `legal` |

Leere Listen werden ausgeblendet: Ohne Qualifikationen entfällt z. B. der ganze Abschnitt.

## Bilder – `src/data/images.ts`

1. Neue Bilder als WebP oder JPG in `src/assets/images/` ablegen, idealerweise ≥ 1500 px breit und ohne
   GPS-/EXIF-Daten (z. B. `exiftool -all= bild.jpg`).
2. Einen Eintrag in `images` ergänzen: `id`, `file`, `alt` (neutral beschreiben), `role`, `focus`.
3. In `imageSlots` festlegen, wo das Bild erscheint (Hero, Über mich, Kontakt-Hintergrund, Bildstreifen).
4. **Erst nach Freigabe** `approvedForPublication: true` setzen und `credit` eintragen.

`focus` bestimmt den Bildausschnitt beim Zuschneiden: `'50% 30%'` = horizontal mittig, eher oben (Gesichter).

Im Demo-Modus (`npm run dev`) kann das Hero-Porträt direkt auf der Seite durchprobiert werden. Die Wahl wird
anschließend in `imageSlots.heroPortrait` eingetragen.

## Farben und Schriften – `src/styles/global.css`

Die Farbpalette steht als Variablen oben in der Datei (`--accent`, `--warm`, `--bg` …), getrennt für die
Varianten hell und dunkel (Standard: dunkel). Akzentfarbe ist Orange `#ff5a1f`. Die Schriften (Inter für Fließtext, Oswald für Überschriften) werden in `src/layouts/BaseLayout.astro`
importiert und lassen sich über `--font-body` / `--font-display` tauschen.

## Neue Unterseite

Eine Datei `src/pages/name.astro` anlegen und `BaseLayout` verwenden (Vorlage: `impressum.astro`). Interne
Links immer mit `url('name/')` aus `src/lib/url.ts` bauen, damit sie auch unter einem Unterpfad funktionieren.

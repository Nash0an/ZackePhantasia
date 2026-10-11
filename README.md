# Portfolio-Website

One-Page-Portfolio auf Basis von [Astro](https://astro.build). Die Seite wird statisch gebaut und
über GitHub Actions auf GitHub Pages veröffentlicht.

> **Status: Demo.** Alle Inhalte mit `[PLATZHALTER]` sind Beispieltexte. Kein Foto ist bislang für
> die Veröffentlichung freigegeben (siehe [BILDFREIGABE.md](BILDFREIGABE.md)).

## Voraussetzungen

- Node.js 22.12 oder neuer (empfohlen: aktuelle LTS, siehe `.nvmrc`)
- npm
- Git

## Lokale Entwicklung

```bash
npm install
npm run dev          # Demo-Modus: zeigt ALLE Fotos + Porträt-Auswahl → http://localhost:4321
npm run dev:public   # so, wie die Seite öffentlich aussieht (nur freigegebene Fotos)
npm run build        # öffentlicher Build nach dist/
npm run build:demo   # Demo-Build (nur für lokale Prüfung, NICHT deployen)
npm run preview      # gebauten Stand ansehen
npm run check        # Typprüfung
```

## Projektstruktur

```text
.github/workflows/deploy.yml   Build & Deployment auf GitHub Pages
integrations/                  Build-Schritt: entfernt nicht verwendete Bilder aus dist/
public/                        Favicon, OG-Vorschaubild, .nojekyll
src/assets/images/             Fotos (WebP, ohne EXIF/GPS)
src/components/                Abschnitte der Seite (Hero, About, Competencies, …)
src/data/profile.ts            ALLE Texte: Person, Bereiche, Qualifikationen, Projekte, Rechtliches
src/data/images.ts             Bildverzeichnis inkl. Freigabestatus und Bildzuordnung
src/layouts/BaseLayout.astro   HTML-Grundgerüst, SEO- und Open-Graph-Metadaten
src/pages/                     Startseite, Impressum, Datenschutz, robots.txt
src/styles/global.css          Farben, Schriften, Abstände (Design-Tokens)
```

## Veröffentlichung auf GitHub Pages

1. Auf GitHub ein neues Repository anlegen (z. B. `portfolio-website`), **ohne** README/Lizenz.
2. Lokal verknüpfen und hochladen:
   ```bash
   git remote add origin https://github.com/USERNAME/portfolio-website.git
   git push -u origin main
   ```
3. Auf GitHub: **Settings → Pages → Build and deployment → Source: „GitHub Actions“**.
4. Der Workflow startet bei jedem Push auf `main` automatisch (oder manuell unter *Actions → Run workflow*).
5. Nach erfolgreichem Lauf ist die Seite unter `https://USERNAME.github.io/portfolio-website/` erreichbar.

Basis-URL und Unterpfad ermittelt der Workflow automatisch (`actions/configure-pages`). Es funktionieren
Projektseiten (`USERNAME.github.io/REPO/`), Benutzerseiten (`USERNAME.github.io`) und eigene Domains,
ohne dass Code angepasst werden muss.

**Fotos im Repository:** Die Fotos in `src/assets/images/` sind per `.gitignore` vom Repository
ausgeschlossen, weil das Repository öffentlich ist. Ein freigegebenes Foto wird so aufgenommen:

```bash
# 1. In src/data/images.ts approvedForPublication: true und credit setzen
# 2. Datei explizit hinzufügen:
git add -f src/assets/images/foto_10.webp
git commit -m "Foto 10 freigegeben" && git push
```

**Wichtig:** GitHub Pages ist öffentlich. Bei einem öffentlichen Repository sind außerdem alle
Dateien in `src/assets/images/` für jeden einsehbar, auch nicht freigegebene Fotos. Wenn Fotos noch
nicht freigegeben sind, gibt es zwei Möglichkeiten: Das Repository privat halten (Pages aus privaten
Repositories erfordert einen kostenpflichtigen GitHub-Plan) oder nicht freigegebene Fotos vor dem
Push aus `src/assets/images/` entfernen.

### Eigene Domain (optional)

1. Unter *Settings → Pages → Custom domain* die Domain eintragen.
2. Beim Domain-Anbieter die DNS-Einträge laut [GitHub-Dokumentation](https://docs.github.com/de/pages/configuring-a-custom-domain-for-your-github-pages-site) setzen.
3. Der nächste Workflow-Lauf baut automatisch mit der neuen Domain.

## Vor dem offiziellen Launch

- [ ] Alle `[PLATZHALTER]` in `src/data/profile.ts` und in den Komponenten ersetzen
      (`grep -rn PLATZHALTER src`)
- [ ] Fotos freigeben (`approvedForPublication: true`, Bildnachweis in `credit`)
- [ ] Impressum und Datenschutzerklärung vollständig ausfüllen und rechtlich prüfen lassen
- [ ] In `profile.ts` `site.isDemo = false` setzen (entfernt das Demo-Banner und `noindex`)
- [ ] OG-Vorschaubild `public/og-image.png` (1200 × 630) durch eine finale Version ersetzen

Wie Inhalte gepflegt werden, steht in [CONTENT_GUIDE.md](CONTENT_GUIDE.md).

## Barrierefreiheit, SEO und Datenschutz

- Semantisches HTML, Sprunglink „Zum Inhalt“, sichtbare Fokuszustände, tastaturbedienbares Mobilmenü
  (Esc schließt es), Alt-Texte aus `images.ts`, Animationen nur ohne `prefers-reduced-motion`
- Meta-Description, Canonical, Open Graph, JSON-LD (`Person`), Sitemap, robots.txt
- Schriften lokal eingebunden (`@fontsource`), kein Tracking, keine Cookies, keine externen Dienste
- Bilder: AVIF/WebP in mehreren Breiten, feste Seitenverhältnisse, Lazy Loading, Hero-Bild priorisiert

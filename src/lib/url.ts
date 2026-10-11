/**
 * Erzeugt einen Pfad relativ zur Basis-URL der Website.
 * Funktioniert für Projektseiten (/REPO/) und Benutzerseiten (/) gleichermaßen.
 */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

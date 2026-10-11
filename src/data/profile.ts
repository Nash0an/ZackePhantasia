/**
 * Zentrale Inhaltsdatei der Website.
 *
 * Alle Texte, die mit [PLATZHALTER] beginnen, sind Demo-Inhalte und müssen
 * vor dem offiziellen Launch durch echte, vom Kunden freigegebene Angaben
 * ersetzt werden. Optionale Felder dürfen leer bleiben – die Seite bleibt
 * trotzdem vollständig.
 */

export interface ContactChannel {
  label: string;
  href: string;
  value: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Person {
  name: string;
  jobTitle: string;
  claim: string;
  intro: string;
  bio: string[];
  location?: string;
  contact: ContactChannel[];
  social: SocialLink[];
}

export interface Competency {
  id: string;
  title: string;
  summary: string;
  details: string[];
  category?: string;
  order: number;
  imageId?: string;
}

export interface Qualification {
  title: string;
  institution: string;
  year?: string;
  description?: string;
  proofUrl?: string;
}

export interface Project {
  title: string;
  problem: string;
  role: string;
  approach: string;
  result: string;
  competencyIds: string[];
  imageId?: string;
  links?: SocialLink[];
}

export interface Testimonial {
  quote: string;
  author: string;
  context?: string;
  /** Nur mit schriftlicher Freigabe auf true setzen. */
  approved: boolean;
}

export interface SiteConfig {
  title: string;
  description: string;
  lang: string;
  locale: string;
  /** 'hell' = minimalistisch-hell, 'dunkel' = modern-dunkel */
  theme: 'hell' | 'dunkel';
  /** Solange true: Hinweisbanner und noindex für Suchmaschinen. */
  isDemo: boolean;
  ogImage: string;
  nav: { label: string; href: string }[];
}

export const site: SiteConfig = {
  title: 'Zacharias Giakos – Portfolio',
  description: '[PLATZHALTER] Kurzbeschreibung für Suchmaschinen: Wer ist die Person, was bietet sie an?',
  lang: 'de',
  locale: 'de_DE',
  theme: 'dunkel',
  isDemo: true,
  ogImage: 'og-image.png',
  nav: [
    { label: 'Über mich', href: '#ueber-mich' },
    { label: 'Bereiche', href: '#bereiche' },
    { label: 'Qualifikationen', href: '#qualifikationen' },
    { label: 'Projekte', href: '#projekte' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
};

export const person: Person = {
  name: 'Zacharias Giakos',
  jobTitle: '[PLATZHALTER] Berufsbezeichnung',
  claim: '[PLATZHALTER] Ein klarer Satz, der beschreibt, wofür diese Person steht.',
  intro:
    '[PLATZHALTER] Zwei bis drei Sätze zur Einführung: Für wen arbeitet die Person, welche Bereiche verbindet sie, und was macht ihre Arbeit besonders?',
  bio: [
    '[PLATZHALTER] Absatz 1 der Biografie: Werdegang, Motivation und persönlicher Hintergrund.',
    '[PLATZHALTER] Absatz 2 der Biografie: Wie die verschiedenen Tätigkeitsbereiche zusammenhängen und welchen Nutzen Auftraggeber davon haben.',
  ],
  location: '[PLATZHALTER] Ort / Region',
  contact: [
    { label: 'E-Mail', href: 'mailto:kontakt@example.com', value: 'kontakt@example.com' },
  ],
  social: [],
};

/** Tätigkeitsbereiche (Arbeitstitel – Formulierungen mit dem Kunden abstimmen); Reihenfolge über order. */
export const competencies: Competency[] = [
  {
    id: 'film',
    title: 'Film & Erwachsenenfilm',
    summary: '[PLATZHALTER] Kurzbeschreibung in ein bis zwei Sätzen.',
    details: ['[PLATZHALTER] Leistung oder Schwerpunkt', '[PLATZHALTER] Leistung oder Schwerpunkt', '[PLATZHALTER] Leistung oder Schwerpunkt'],
    order: 1,
    imageId: 'foto_07',
  },
  {
    id: 'gesundheitsconsulting',
    title: 'Consulting im Gesundheitsbereich',
    summary: '[PLATZHALTER] Kurzbeschreibung in ein bis zwei Sätzen.',
    details: ['[PLATZHALTER] Leistung oder Schwerpunkt', '[PLATZHALTER] Leistung oder Schwerpunkt', '[PLATZHALTER] Leistung oder Schwerpunkt'],
    order: 2,
    imageId: 'foto_08',
  },
  {
    id: 'schamanische-arbeit',
    title: 'Schamanische Arbeit',
    summary: '[PLATZHALTER] Kurzbeschreibung in ein bis zwei Sätzen.',
    details: ['[PLATZHALTER] Leistung oder Schwerpunkt', '[PLATZHALTER] Leistung oder Schwerpunkt', '[PLATZHALTER] Leistung oder Schwerpunkt'],
    order: 3,
    imageId: 'foto_13',
  },
  {
    id: 'psychedelische-begleitung',
    title: 'Begleitung psychedelischer Erfahrungen',
    summary: '[PLATZHALTER] Kurzbeschreibung in ein bis zwei Sätzen.',
    details: ['[PLATZHALTER] Leistung oder Schwerpunkt', '[PLATZHALTER] Leistung oder Schwerpunkt', '[PLATZHALTER] Leistung oder Schwerpunkt'],
    order: 4,
    imageId: 'foto_20',
  },
  {
    id: 'torwart-personal-training',
    title: 'Torwart- & Personal Training',
    summary: '[PLATZHALTER] Kurzbeschreibung in ein bis zwei Sätzen.',
    details: ['[PLATZHALTER] Leistung oder Schwerpunkt', '[PLATZHALTER] Leistung oder Schwerpunkt', '[PLATZHALTER] Leistung oder Schwerpunkt'],
    order: 5,
    imageId: 'foto_11',
  },
];

export const qualifications: Qualification[] = [
  {
    title: '[PLATZHALTER] Abschluss / Ausbildung',
    institution: '[PLATZHALTER] Institution',
    year: '[JJJJ]',
    description: '[PLATZHALTER] Optionale Beschreibung des Abschlusses.',
  },
  {
    title: '[PLATZHALTER] Zertifikat / Weiterbildung',
    institution: '[PLATZHALTER] Institution',
    year: '[JJJJ]',
  },
  {
    title: '[PLATZHALTER] Zusatzqualifikation',
    institution: '[PLATZHALTER] Institution',
  },
];

export const projects: Project[] = [
  {
    title: '[PLATZHALTER] Projekt 1',
    problem: '[PLATZHALTER] Ausgangslage: Welche Aufgabe oder Herausforderung gab es?',
    role: '[PLATZHALTER] Rolle der Person im Projekt.',
    approach: '[PLATZHALTER] Vorgehen in wenigen Sätzen.',
    result: '[PLATZHALTER] Ergebnis – nur belegbare Aussagen.',
    competencyIds: ['gesundheitsconsulting'],
  },
  {
    title: '[PLATZHALTER] Projekt 2',
    problem: '[PLATZHALTER] Ausgangslage: Welche Aufgabe oder Herausforderung gab es?',
    role: '[PLATZHALTER] Rolle der Person im Projekt.',
    approach: '[PLATZHALTER] Vorgehen in wenigen Sätzen.',
    result: '[PLATZHALTER] Ergebnis – nur belegbare Aussagen.',
    competencyIds: ['torwart-personal-training'],
  },
  {
    title: '[PLATZHALTER] Projekt 3',
    problem: '[PLATZHALTER] Ausgangslage: Welche Aufgabe oder Herausforderung gab es?',
    role: '[PLATZHALTER] Rolle der Person im Projekt.',
    approach: '[PLATZHALTER] Vorgehen in wenigen Sätzen.',
    result: '[PLATZHALTER] Ergebnis – nur belegbare Aussagen.',
    competencyIds: ['film'],
  },
];

/** Nur Einträge mit approved: true werden angezeigt. */
export const testimonials: Testimonial[] = [];

/** Rechtliche Angaben – vor dem Launch vollständig und geprüft ausfüllen. */
export const legal = {
  operatorName: 'Zacharias Giakos',
  street: '[PLATZHALTER] Straße Hausnummer',
  city: '[PLATZHALTER] PLZ Ort',
  email: 'kontakt@example.com',
  phone: '',
  vatId: '',
  professionalInfo: '',
};

export const sortedCompetencies = [...competencies].sort((a, b) => a.order - b.order);
export const publishedTestimonials = testimonials.filter((t) => t.approved);

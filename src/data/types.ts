// ──────────────────────────────────────────────────────────────────────────
// Modèle de données — source de vérité du contenu du portfolio.
// Toute l'UI dérive de ces types. Ajouter du contenu = éditer src/data/*.ts.
// Conventions : noms en anglais, contenus (valeurs) en français.
// ──────────────────────────────────────────────────────────────────────────

/** Identifiants des compétences du référentiel BUT R&T. */
export type SkillId = 'RT1' | 'RT2' | 'RT3' | 'RT4' | 'RT5';

/** Niveau de maîtrise (libellé + jauge). */
export type SkillLevel = 'notion' | 'intermediaire' | 'avance' | 'expert';

/** État d'avancement, réutilisé par les SAÉ, projets et compétences. */
export type Status = 'acquis' | 'en-cours' | 'a-venir';

/** Lien externe générique (repo, démo, vidéo, rapport, poster…). */
export interface ExternalLink {
  label: string;
  href: string;
  kind?: 'repo' | 'demo' | 'video' | 'report' | 'poster' | 'other';
}

// Champs `simple` : version « vue simplifiée » (RH, recruteurs, non-informaticiens).
// Chaque sous-champ est optionnel : s'il manque, la version technique s'affiche.

export interface Profile {
  fullName: string;
  initials: string;
  title: string; // ligne sous le nom
  tagline: string; // phrase d'accroche
  about: string; // paragraphe « À propos »
  interests: string[];
  softSkills: string[];
  links: { github: string; linkedin: string; email: string };
  cvUrl: string; // ex : `${import.meta.env.BASE_URL}cv.pdf`
  cvUrlEn?: string; // version anglaise du CV (bouton masqué si absent)
  simple?: { title?: string; tagline?: string; about?: string };
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period?: string;
  track?: string;
  current?: boolean;
  description?: string;
  simple?: { title?: string; track?: string; description?: string };
}

export interface Skill {
  id: SkillId;
  label: string; // intitulé exact (référentiel)
  short: string; // libellé court pour les badges
  description: string;
  level: SkillLevel;
  levelPercent: number; // 0–100, alimente la jauge animée
  status: Status;
  track?: 'cyber' | 'commun';
  /** ids des SAÉ servant de preuve (résolus au runtime via getSaeById). */
  proofSaeIds: string[];
  note?: string;
  /** Niveau visé du référentiel (ex : « Niveau 1 — Assister l'administrateur »). */
  acLevel?: string;
  /** Apprentissages critiques (référentiel BUT R&T). `code` optionnel. */
  apprentissagesCritiques?: { code?: string; label: string }[];
  /** Vue simplifiée : intitulé, libellé court, explication et exemples concrets. */
  simple?: { label?: string; short?: string; description?: string; examples?: string[] };
}

export interface Sae {
  id: string; // slug unique, ex : 'sae4-cyber-01'
  code?: string; // ex : 'SAE4.Cyber.01'
  title: string;
  summary: string; // 1–2 phrases pour la carte
  description?: string; // texte long pour le détail / la modale
  highlights?: string[]; // points clés (bullets)
  skills: SkillId[]; // compétences travaillées → badges + filtre auto
  tools: string[]; // technos / outils
  status: Status;
  period?: string; // ex : '2024–2025'
  featured?: boolean; // mise en avant (épinglée en tête)
  links?: ExternalLink[];
  order?: number; // tri manuel optionnel (plus petit = plus haut)
  /** Vue simplifiée : titre, résumé, texte long et points clés sans jargon. */
  simple?: { title?: string; summary?: string; description?: string; highlights?: string[] };
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description?: string;
  skills?: SkillId[];
  tools: string[];
  status: Status;
  featured?: boolean;
  hidden?: boolean; // masque sans supprimer
  links?: ExternalLink[];
  simple?: { title?: string; summary?: string };
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  department?: string;
  period?: string;
  duration?: string;
  missions: string[];
  links?: ExternalLink[];
  simple?: { role?: string; department?: string; missions?: string[] };
}

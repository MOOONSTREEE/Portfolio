import type { SkillLevel, Status } from '@/data/types';

/** Concatène des classes conditionnelles (équivalent minimal de clsx). */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

/** Configuration d'affichage des états (couleur + libellé). */
export const STATUS_META: Record<Status, { label: string; tone: 'emerald' | 'cyan' | 'muted' }> = {
  acquis: { label: 'Acquis', tone: 'emerald' },
  'en-cours': { label: 'En cours', tone: 'cyan' },
  'a-venir': { label: 'À venir', tone: 'muted' },
};

/** Libellés lisibles des niveaux de maîtrise. */
export const LEVEL_LABEL: Record<SkillLevel, string> = {
  notion: 'Notions',
  intermediaire: 'Intermédiaire',
  avance: 'Avancé',
  expert: 'Expert',
};

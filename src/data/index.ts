// Point d'entrée unique des données + sélecteurs dérivés.
// L'UI consomme ces fonctions et ne calcule jamais elle-même tris/filtres.
export * from './types';
export { profile } from './profile';
export { education } from './education';
export { skills } from './skills';
export { saes } from './saes';
export { projects } from './projects';
export { internships } from './internships';

import type { SkillId } from './types';
import { saes } from './saes';
import { skills } from './skills';
import { projects } from './projects';

const byOrderThenPeriod = (
  a: { order?: number; period?: string },
  b: { order?: number; period?: string },
) =>
  (a.order ?? 999) - (b.order ?? 999) ||
  (b.period ?? '').localeCompare(a.period ?? '');

/** SAÉ triées : featured d'abord, puis order, puis période décroissante. */
export const sortedSaes = () =>
  [...saes].sort(
    (a, b) => Number(!!b.featured) - Number(!!a.featured) || byOrderThenPeriod(a, b),
  );

/** Projets visibles uniquement (les `hidden` sont exclus). */
export const visibleProjects = () => projects.filter((p) => !p.hidden);

/** Compétences réellement présentes dans les SAÉ → alimente le filtre. */
export const usedSkillIds = (): SkillId[] =>
  Array.from(new Set(saes.flatMap((s) => s.skills)));

export const getSkill = (id: SkillId) => skills.find((s) => s.id === id);

export const getSaeById = (id: string) => saes.find((s) => s.id === id);

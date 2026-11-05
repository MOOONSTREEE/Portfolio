import type { EducationItem } from './types';

// `period` affiché tel quel. Pour ne pas afficher d'années, retirer le champ.
export const education: EducationItem[] = [
  {
    id: 'but-rt',
    title: 'BUT Réseaux & Télécommunications',
    institution: 'IUT de Colmar — Université de Haute-Alsace',
    period: '2023 – en cours',
    track: 'Parcours Cybersécurité — 3ᵉ année en alternance',
    current: true,
    description:
      "Administration des réseaux, sécurisation des systèmes d'information et déploiement " +
      "d'infrastructures. 3ᵉ année suivie en alternance (contrat d'apprentissage) chez m2A depuis septembre 2026.",
  },
  {
    id: 'bac',
    title: 'Baccalauréat Général',
    institution: 'Lycée Léonce Vieljeux, La Rochelle',
    period: '2020 – 2023',
    track: 'Spécialités : NSI · LLCER Anglais',
    description: 'Session 2023, Académie de Poitiers.',
  },
  {
    id: 'dnb',
    title: 'Diplôme National du Brevet',
    institution: 'Académie de Poitiers',
    period: '2020',
    track: 'Mention Très Bien',
  },
];

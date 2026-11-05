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
    simple: {
      title: 'BUT Réseaux & Télécommunications (Bac+3)',
      track: 'Spécialité cybersécurité — 3ᵉ année en alternance',
      description:
        "Diplôme national en 3 ans, centré sur les réseaux informatiques et leur protection. La 3ᵉ année " +
        "se fait en alternance : une partie du temps à l'IUT, une partie en entreprise chez m2A.",
    },
  },
  {
    id: 'bac',
    title: 'Baccalauréat Général',
    institution: 'Lycée Léonce Vieljeux, La Rochelle',
    period: '2020 – 2023',
    track: 'Spécialités : NSI · LLCER Anglais',
    description: 'Session 2023, Académie de Poitiers.',
    simple: { track: 'Spécialités informatique (NSI) et anglais approfondi' },
  },
  {
    id: 'dnb',
    title: 'Diplôme National du Brevet',
    institution: 'Académie de Poitiers',
    period: '2020',
    track: 'Mention Très Bien',
  },
];

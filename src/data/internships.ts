import type { Internship } from './types';

export const internships: Internship[] = [
  {
    id: 'm2a-alternance',
    role: 'Apprenti — BUT R&T parcours Cybersécurité',
    company: 'Mulhouse Alsace Agglomération (m2A)',
    // department: '', // [À VALIDER] service d'accueil
    period: 'Depuis septembre 2026',
    duration: "Contrat d'apprentissage · 3ᵉ année",
    missions: [
      "Alternance école / entreprise dans le cadre de la 3ᵉ année de BUT R&T.",
      // [À COMPLÉTER — 2 à 4 missions concrètes]
    ],
  },
  {
    id: 'm2a',
    role: 'Technicien réseau (stage de 2ᵉ année)',
    company: 'Mulhouse Alsace Agglomération (m2A)',
    department: 'DSI — service Réseau & Infrastructure',
    period: '2ᵉ année', // [À VALIDER] dates exactes
    duration: '2 mois',
    missions: [
      // [À COMPLÉTER — 2 à 4 points]
      'Mission à compléter',
    ],
    links: [
      // { label: 'Poster de stage', href: '#', kind: 'poster' },
    ],
  },
  {
    id: 'stage-3e',
    role: "Stage d'observation (3ᵉ)",
    company: 'Entreprise de drones aquatiques', // [À VALIDER] nom + année
    missions: ['Découverte du monde professionnel et des usages technologiques.'],
  },
];

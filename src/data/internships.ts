import type { Internship } from './types';

export const internships: Internship[] = [
  {
    id: 'm2a',
    role: 'Technicien réseau (stage)',
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

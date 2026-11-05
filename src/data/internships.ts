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
      "Exploitation et maintien en conditions opérationnelles du réseau des sites de l'agglomération (écoles, bâtiments publics).",
      "Supervision et diagnostic d'incidents via UniFi et PRTG, par exemple des pertes de liaison fibre / SFP et l'analyse de leurs causes.",
      'Participation aux projets de renouvellement des équipements réseau (switchs, liaisons fibre).',
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
      'Remplacement des commutateurs Cisco dans environ 18 écoles : préparation, configuration et mise en service sur site.',
      "Déploiement de switchs UniFi Pro PoE sur des sites publics de l'agglomération.",
      'Migration de liaisons fibre multimode vers de la fibre monomode.',
      'Supervision du parc réseau avec PRTG et le contrôleur UniFi.',
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

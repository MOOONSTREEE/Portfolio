import type { Project } from './types';

// Section masquée tant que `visibleProjects()` renvoie un tableau vide.
// Pour masquer un projet sans le supprimer : ajouter `hidden: true`.
export const projects: Project[] = [
  {
    id: 'rootme-ctf',
    title: 'Challenges CTF — RootMe',
    summary:
      'Résolution de challenges de sécurité (réseau, web, cryptographie) sur la plateforme RootMe.',
    description:
      "Pratique régulière du Capture The Flag sur RootMe : exploitation et analyse de " +
      'vulnérabilités web, cryptographie et réseau. Une démarche offensive qui renforce la ' +
      'compréhension défensive des systèmes.',
    skills: ['RT5'],
    tools: ['RootMe', 'Web', 'Cryptographie', 'Réseau'],
    status: 'en-cours',
    simple: {
      title: 'Entraînement à la cybersécurité (RootMe)',
      summary:
        'Je relève régulièrement des défis en ligne qui consistent à trouver des failles de sécurité, ' +
        'dans un cadre légal, pour mieux comprendre comment s’en protéger.',
    },
    links: [
      // Renseigner l'URL du profil RootMe puis dé-commenter :
      // { label: 'Profil RootMe', href: 'https://www.root-me.org/...', kind: 'other' },
    ],
  },
];

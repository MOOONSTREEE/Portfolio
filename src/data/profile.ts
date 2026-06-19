import type { Profile } from './types';

export const profile: Profile = {
  fullName: 'Noé Coëffic',
  initials: 'NC',
  title: 'Étudiant BUT Réseaux & Télécommunications — Parcours Cybersécurité',
  tagline:
    "Réseaux, systèmes et sécurité — j'apprends à construire les infrastructures et à les défendre.",
  about:
    "Je suis Noé Coëffic, étudiant en 2ᵉ année de BUT Réseaux & Télécommunications à l'IUT de Colmar, " +
    "où je me spécialise dans le parcours Cybersécurité. Je m'intéresse à l'administration des réseaux, " +
    "à la sécurisation des systèmes d'information et au déploiement d'infrastructures fiables. En dehors " +
    "des cours, je pratique la musculation et je suis passionné de jeux vidéo — deux univers qui nourrissent " +
    "ma rigueur, ma persévérance et mon goût de la stratégie. Mon objectif : évoluer vers les métiers de la " +
    'cybersécurité et de l\'administration réseau.',
  interests: ['Musculation', 'Calisthénie', 'Jeux vidéo'],
  softSkills: [
    'Rigueur & discipline',
    'Persévérance',
    "Esprit d'équipe",
    'Réflexion stratégique',
    'Résolution de problèmes',
    'Réactivité',
  ],
  links: {
    github: 'https://github.com/MOOONSTREEE',
    linkedin: 'https://www.linkedin.com/in/noé-coëffic-749b872a3/',
    email: 'noe.coeffic@uha.fr',
  },
  // BASE_URL vaut '/Portfolio/' en production (GitHub Pages) et '/' en dev.
  cvUrl: `${import.meta.env.BASE_URL}cv.pdf`,
};

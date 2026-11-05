import type { Profile } from './types';

export const profile: Profile = {
  fullName: 'Noé Coëffic',
  initials: 'NC',
  title: 'Apprenti BUT Réseaux & Télécommunications — Parcours Cybersécurité',
  tagline:
    "Réseaux, systèmes et sécurité — j'apprends à construire les infrastructures et à les défendre.",
  about:
    "Je suis Noé Coëffic, étudiant en 3ᵉ année de BUT Réseaux & Télécommunications à l'IUT de Colmar, " +
    "parcours Cybersécurité, en alternance chez Mulhouse Alsace Agglomération (m2A). Je m'intéresse à l'administration des réseaux, " +
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
  cvUrlEn: `${import.meta.env.BASE_URL}cv-en.pdf`,

  // Vue simplifiée (RH / non-informaticiens)
  simple: {
    title: 'Étudiant en alternance — informatique, réseaux et cybersécurité',
    tagline:
      'Je fais fonctionner les réseaux informatiques des organisations et je les protège contre les attaques.',
    about:
      "Je suis Noé Coëffic, en 3ᵉ et dernière année d'un BUT Réseaux & Télécommunications (diplôme Bac+3) " +
      "à l'IUT de Colmar, avec une spécialité en cybersécurité. Je suis cette année en alternance chez " +
      "Mulhouse Alsace Agglomération (m2A) : je partage mon temps entre l'IUT et le service informatique, " +
      "où je m'occupe du réseau qui relie les écoles et les bâtiments publics de l'agglomération. Mon métier, " +
      "c'est de faire en sorte que les ordinateurs, Internet et les outils numériques fonctionnent sans " +
      "interruption, et de les protéger contre le piratage. En dehors des cours, je pratique la musculation " +
      "et les jeux vidéo, qui me demandent de la régularité, de la persévérance et de la stratégie. Mon " +
      "objectif : travailler dans la cybersécurité ou l'administration des réseaux.",
  },
};

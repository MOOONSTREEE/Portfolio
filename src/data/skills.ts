import type { Skill } from './types';

// Apprentissages critiques (AC) : texte officiel du Programme National BUT R&T.
// RT1/RT2/RT3 → AC de niveau 1 (publiés au PN). RT4/RT5 (parcours Cybersécurité)
// → apprentissages clés du cursus, à confirmer avec le syllabus de l'IUT de Colmar.
// Niveaux estimés d'après les relevés de notes — à affiner librement.
export const skills: Skill[] = [
  {
    id: 'RT1',
    label: "Administrer les réseaux et l'Internet",
    short: 'Réseaux & Internet',
    description:
      'Configuration, segmentation et routage de réseaux : adressage IP, équipements actifs, ' +
      'séparation DMZ/LAN.',
    level: 'intermediaire',
    levelPercent: 70,
    status: 'en-cours',
    track: 'commun',
    simple: {
      label: 'Installer et gérer le réseau d’une organisation',
      short: 'Réseau',
      description:
        'Mettre en place le réseau qui relie les ordinateurs et les bâtiments d’une organisation, ' +
        'l’organiser et le faire fonctionner au quotidien.',
      examples: [
        'Configurer le matériel qui relie les ordinateurs entre eux et à Internet',
        'Découper un réseau en zones séparées pour limiter les risques',
        'Repérer une panne et la signaler ou la corriger',
      ],
    },
    proofSaeIds: ['sae4-cyber-01', 'sae1-02-reseaux', 'sae1-01-hygiene-cyber'],
    acLevel: "Niveau 1 — Assister l'administrateur du réseau",
    apprentissagesCritiques: [
      { code: 'AC11.01', label: "Maîtriser les lois fondamentales de l'électricité afin d'intervenir sur des équipements de réseaux et télécommunications" },
      { code: 'AC11.02', label: "Comprendre l'architecture et les fondements des systèmes numériques, les principes du codage de l'information, des communications et de l'Internet" },
      { code: 'AC11.03', label: 'Configurer les fonctions de base du réseau local' },
      { code: 'AC11.04', label: "Maîtriser les rôles et les principes fondamentaux des systèmes d'exploitation afin d'interagir avec ceux-ci pour la configuration et l'administration des réseaux et services fournis" },
      { code: 'AC11.05', label: 'Identifier les dysfonctionnements du réseau local et savoir les signaler' },
      { code: 'AC11.06', label: 'Installer un poste client, expliquer la procédure mise en place' },
    ],
  },
  {
    id: 'RT2',
    label: 'Connecter les entreprises et les usagers',
    short: 'Connectivité',
    description:
      'Supports et dispositifs de transmission, caractérisation du signal pour relier ' +
      'entreprises et usagers.',
    level: 'intermediaire',
    levelPercent: 52,
    status: 'en-cours',
    track: 'commun',
    simple: {
      label: 'Raccorder les bâtiments et les utilisateurs',
      short: 'Connexions',
      description:
        'Choisir et installer ce qui transporte les données : câbles, fibre optique ou Wi-Fi, ' +
        'pour que chaque bâtiment et chaque utilisateur soit bien connecté.',
      examples: [
        'Poser et tester des câbles réseau',
        'Mesurer la qualité du Wi-Fi dans un bâtiment et proposer des améliorations',
        'Expliquer une solution technique à une personne non spécialiste',
      ],
    },
    proofSaeIds: ['sae1-03-transmission'],
    acLevel: 'Niveau 1 — Découvrir les transmissions et la ToIP',
    apprentissagesCritiques: [
      { code: 'AC12.01', label: 'Mesurer et analyser les signaux' },
      { code: 'AC12.02', label: 'Caractériser des systèmes de transmissions élémentaires et découvrir la modélisation mathématique de leur fonctionnement' },
      { code: 'AC12.03', label: 'Déployer des supports de transmission' },
      { code: 'AC12.04', label: 'Connecter les systèmes de ToIP' },
      { code: 'AC12.05', label: "Communiquer avec un tiers (client, collaborateur…) et adapter son discours et sa langue à son interlocuteur" },
    ],
  },
  {
    id: 'RT3',
    label: 'Créer des outils et applications informatiques pour les R&T',
    short: 'Outils & applis',
    description:
      'Programmation, technologies Web, traitement de données et configuration applicative ' +
      '(pare-feu nftables, HAProxy).',
    level: 'intermediaire',
    levelPercent: 65,
    status: 'en-cours',
    track: 'commun',
    simple: {
      label: 'Créer des outils informatiques',
      short: 'Programmation',
      description:
        'Écrire des programmes et des petits outils qui automatisent des tâches répétitives ' +
        'et facilitent le travail d’une équipe informatique.',
      examples: [
        'Programmer en Python',
        'Créer et publier un site web',
        'Analyser des données et les présenter clairement',
      ],
    },
    proofSaeIds: ['sae4-cyber-01', 'sae-routage-oignon', 'sae1-04-web', 'sae1-05-donnees'],
    acLevel: "Niveau 1 — S'intégrer dans un service informatique",
    apprentissagesCritiques: [
      { code: 'AC13.01', label: 'Utiliser un système informatique et ses outils' },
      { code: 'AC13.02', label: 'Lire, exécuter, corriger et modifier un programme' },
      { code: 'AC13.03', label: 'Traduire un algorithme, dans un langage et pour un environnement donné' },
      { code: 'AC13.04', label: "Connaître l'architecture et les technologies d'un site Web" },
      { code: 'AC13.05', label: "Choisir les mécanismes de gestion de données adaptés au développement de l'outil et argumenter ses choix" },
      { code: 'AC13.06', label: "S'intégrer dans un environnement propice au développement et au travail collaboratif" },
    ],
  },
  {
    id: 'RT4',
    label: "Administrer un système d'information sécurisé",
    short: 'SI sécurisé',
    description:
      "Mise en œuvre d'une infrastructure sécurisée : annuaire LDAP, PKI, haute disponibilité.",
    level: 'intermediaire',
    levelPercent: 70,
    status: 'en-cours',
    track: 'cyber',
    simple: {
      label: 'Protéger le système informatique d’une organisation',
      short: 'Protection',
      description:
        'Mettre en place les protections qui empêchent les intrusions : filtrage des connexions, ' +
        'contrôle de qui accède à quoi, chiffrement des informations sensibles.',
      examples: [
        'Installer et régler un pare-feu (le « filtre » entre le réseau et l’extérieur)',
        'Gérer les comptes et les droits d’accès des utilisateurs',
        'Protéger les données grâce au chiffrement',
      ],
    },
    proofSaeIds: ['sae4-cyber-01'],
    acLevel: 'Parcours Cybersécurité — apprentissages clés (à confirmer)',
    apprentissagesCritiques: [
      { label: 'Concevoir et déployer une architecture réseau sécurisée (segmentation, DMZ)' },
      { label: 'Mettre en place et configurer des infrastructures de sécurité (pare-feu, VPN)' },
      { label: 'Sécuriser les services réseaux et les services d\'annuaires (LDAP, PKI)' },
      { label: 'Appliquer les principes de la cryptographie pour protéger les données' },
      { label: 'Sécuriser les réseaux locaux (LAN)' },
    ],
  },
  {
    id: 'RT5',
    label: "Surveiller un système d'information sécurisé / détecter et parer aux attaques",
    short: 'Supervision & défense',
    description:
      'Durcissement, gestion des accès et pratique offensive/défensive (challenges CTF) pour ' +
      'détecter et contrer les attaques.',
    level: 'intermediaire',
    levelPercent: 58,
    status: 'en-cours',
    track: 'cyber',
    simple: {
      label: 'Surveiller et réagir aux cyberattaques',
      short: 'Surveillance',
      description:
        'Garder un œil sur l’activité du système informatique pour repérer une attaque au plus tôt ' +
        'et savoir comment réagir.',
      examples: [
        'Utiliser des outils de surveillance qui alertent en cas d’activité anormale',
        'S’entraîner à trouver des failles pour mieux les corriger',
        'Réagir de façon organisée face à un incident de sécurité',
      ],
    },
    proofSaeIds: ['sae4-cyber-01', 'sae-routage-oignon'],
    acLevel: 'Parcours Cybersécurité — apprentissages clés (à confirmer)',
    apprentissagesCritiques: [
      { label: "Découvrir et pratiquer le pentesting (tests d'intrusion)" },
      { label: "Superviser la sécurité d'un système d'information" },
      { label: 'Réaliser des audits de sécurité' },
      { label: 'Détecter les attaques et analyser les incidents' },
      { label: 'Réagir face à une cyber-attaque (réponse à incident)' },
    ],
  },
];

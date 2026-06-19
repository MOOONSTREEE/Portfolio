import type { Sae } from './types';

// ──────────────────────────────────────────────────────────────────────────
// SAÉ — Situations d'Apprentissage et d'Évaluation.
//
// COMMENT AJOUTER UNE SAÉ :
//   1. Copier le gabarit ci-dessous (objet `_template`, à dé-commenter).
//   2. Lui donner un `id` unique (slug, sans espaces), remplir les champs.
//   3. `skills` n'accepte que des SkillId valides ('RT1'…'RT5') — l'auto-
//      complétion guide, un id inexistant casse le build.
//   4. (Optionnel) `featured: true` pour épingler, `order` pour le tri,
//      `links` pour rapport / vidéo / repo.
//
// LIENS VERS DES FICHIERS HÉBERGÉS : placer le fichier dans public/sae/ et
//   référencer `${BASE}sae/mon-fichier.pdf` (BASE gère le préfixe GitHub Pages).
// ──────────────────────────────────────────────────────────────────────────

const BASE = import.meta.env.BASE_URL; // '/Portfolio/' en prod, '/' en dev

export const saes: Sae[] = [
  {
    id: 'sae4-cyber-01',
    code: 'SAE4.Cyber.01',
    title: "Sécuriser un système d'information",
    summary:
      "Conception et sécurisation d'un réseau d'entreprise complet sur Proxmox : segmentation, " +
      'pare-feu, annuaire, PKI et haute disponibilité.',
    description:
      "Mise en place d'une infrastructure d'entreprise virtualisée de bout en bout. Le réseau est " +
      'segmenté en zones DMZ et LAN, filtrées par un pare-feu nftables. La gestion des identités ' +
      "repose sur une fusion LDAP + PKI, et la disponibilité des services est assurée par HAProxy. " +
      "L'ensemble est rattaché au domaine interne sae8.internal.",
    highlights: [
      'Segmentation réseau DMZ / LAN sur Proxmox',
      'Pare-feu nftables (politique de filtrage par zone)',
      'Fusion annuaire LDAP + autorité de certification PKI',
      'Haute disponibilité des services via HAProxy',
      'Domaine interne sae8.internal',
    ],
    skills: ['RT4', 'RT1', 'RT3', 'RT5'],
    tools: ['Proxmox', 'nftables', 'LDAP', 'PKI', 'HAProxy', 'Linux'],
    status: 'en-cours',
    period: '2ᵉ année',
    featured: true,
    order: 0,
  },
  {
    id: 'sae-routage-oignon',
    title: "Conception d'une architecture distribuée avec routage en oignon",
    summary:
      "Conception d'un système distribué mettant en œuvre le routage en oignon (onion routing) " +
      'pour anonymiser et sécuriser les communications.',
    description:
      "Étude et conception d'une architecture distribuée inspirée du routage en oignon (principe " +
      'de Tor). Les messages sont chiffrés en couches successives puis relayés de nœud en nœud : ' +
      'chaque relais ne déchiffre que la couche qui lui est destinée et ignore la route complète. ' +
      "L'objectif est de garantir l'anonymat et la confidentialité des échanges sur un réseau de " +
      'nœuds distribués.',
    highlights: [
      'Chiffrement en couches (onion encryption) et relais multi-nœuds',
      'Architecture distribuée (réseau de relais)',
      'Anonymisation et confidentialité des communications',
    ],
    skills: ['RT5', 'RT3', 'RT1'],
    tools: ['Routage en oignon', 'Cryptographie', 'Architecture distribuée', 'Réseau'],
    status: 'acquis',
    period: '2ᵉ année',
    order: 1,
  },
  {
    id: 'sae1-01-hygiene-cyber',
    code: 'SAÉ1.01',
    title: "Sensibilisation à l'hygiène informatique et à la cybersécurité",
    summary:
      "Production de vidéos de sensibilisation à la cybersécurité — un volet sur l'IA, un volet " +
      'sur les attaques Red Team.',
    description:
      "Sensibilisation aux bonnes pratiques d'hygiène informatique à travers la réalisation de " +
      "vidéos pédagogiques : une première édition centrée sur les enjeux de l'intelligence " +
      "artificielle, une seconde sur les techniques d'attaque Red Team et les réflexes de défense " +
      'associés.',
    highlights: [
      "Vidéo de sensibilisation — sujet Intelligence Artificielle (2023-2024)",
      'Vidéo de sensibilisation — sujet Red Team (2024-2025)',
      "Vulgarisation des bonnes pratiques d'hygiène informatique",
    ],
    skills: ['RT1'],
    tools: ['Cybersécurité', 'Sensibilisation', 'Montage vidéo'],
    status: 'acquis',
    period: '1ʳᵉ année',
    order: 10,
    links: [
      { label: 'Vidéo — IA (2023-24)', href: 'https://www.youtube.com/watch?v=ge0jZIjXvU8', kind: 'video' },
      { label: 'Vidéo — Red Team (2024-25)', href: 'https://youtu.be/59fyVq2R2TU', kind: 'video' },
    ],
  },
  {
    id: 'sae1-02-reseaux',
    code: 'SAÉ1.02',
    title: "S'initier aux réseaux informatiques",
    summary:
      "Premiers pas en réseaux : adressage IP, configuration d'équipements actifs et mise en " +
      'place de petites topologies locales.',
    description:
      "Installation et configuration d'un réseau local : plan d'adressage IP, paramétrage des " +
      'équipements actifs (commutateurs, routeurs) et vérification de la connectivité de bout en bout.',
    highlights: [
      "Plan d'adressage IP",
      'Configuration de commutateurs et routeurs',
      'Mise en place et test de topologies locales',
    ],
    skills: ['RT1'],
    tools: ['Cisco', 'IP', 'Réseaux locaux'],
    status: 'acquis',
    period: '1ʳᵉ année',
    order: 11,
  },
  {
    id: 'sae1-03-transmission',
    code: 'SAÉ1.03',
    title: 'Découvrir un dispositif de transmission',
    summary:
      'Câblage réseau cuivre (RJ45 Cat 6A) et cartographie de couverture WiFi (heatmap 2.4 / 5 GHz) ' +
      'du bâtiment C.',
    description:
      "Deux volets complémentaires. Côté filaire : confection et test de liens cuivre RJ45 Cat 6A " +
      "(câble S/FTP 4 paires), brassage sur panneaux et validation au contrôleur de lien. Côté " +
      'radio : réalisation de heatmaps de couverture WiFi du bâtiment C (rez-de-chaussée et 1ᵉʳ ' +
      "étage) en 2,4 et 5 GHz, identification des zones mal couvertes (couloirs, cages d'escalier) " +
      "et analyse du chevauchement des canaux pour formuler des recommandations.",
    highlights: [
      'Câblage cuivre RJ45 Cat 6A (S/FTP) + brassage et tests de lien',
      'Heatmaps de couverture WiFi 2,4 / 5 GHz (bâtiment C)',
      'Analyse des canaux et détection des zones mal couvertes',
    ],
    skills: ['RT2'],
    tools: ['RJ45 Cat 6A', 'Panneau de brassage', 'WiFi 2.4/5 GHz', 'Heatmap'],
    status: 'acquis',
    period: '1ʳᵉ année',
    order: 12,
    links: [
      { label: 'Rapport — câblage & dispositif', href: `${BASE}sae/sae1-03-rapport-cablage.pdf`, kind: 'report' },
      { label: 'Rapport — heatmap WiFi', href: `${BASE}sae/sae1-03-rapport-heatmap-wifi.pdf`, kind: 'report' },
    ],
  },
  {
    id: 'sae1-04-web',
    code: 'SAÉ1.04',
    title: 'Se présenter sur Internet',
    summary:
      "Création et mise en ligne d'un site web personnel : initiation aux technologies du Web " +
      '(HTML / CSS).',
    description:
      "Conception d'un premier site web personnel et publication en ligne. Initiation au HTML/CSS, " +
      'structuration du contenu et déploiement — une première approche du développement front-end, ' +
      'prolongée aujourd\'hui par ce portfolio.',
    highlights: ['Initiation HTML / CSS', 'Structuration de contenu web', 'Publication en ligne'],
    skills: ['RT3'],
    tools: ['HTML', 'CSS', 'Web'],
    status: 'acquis',
    period: '1ʳᵉ année',
    order: 13,
    links: [
      { label: 'Code source (GitHub)', href: 'https://github.com/MOOONSTREEE/MonSiteWeb', kind: 'repo' },
    ],
  },
  {
    id: 'sae1-05-donnees',
    code: 'SAÉ1.05',
    title: 'Traiter des données',
    summary:
      "Outil Python d'analyse des gros fichiers (IHM PyQt5, camembert, génération de script " +
      'PowerShell) + analyse d\'une attaque de l\'homme du milieu.',
    description:
      "Traitement de données de bout en bout, en binôme. Réalisation d'un outil Python en trois " +
      'étapes : sélection d\'un répertoire, parcours récursif avec tri et filtrage par taille ' +
      '(export JSON), puis une interface PyQt5 affichant un camembert de répartition (PyQtChart) ' +
      "et permettant de sélectionner les fichiers à supprimer — l'outil génère alors un script " +
      "PowerShell de suppression sécurisée. Un second volet a porté sur l'analyse d'une attaque " +
      "de l'homme du milieu (interception de données).",
    highlights: [
      'Parcours récursif, tri et filtrage de fichiers par taille (export JSON)',
      'IHM PyQt5 + camembert de répartition (PyQtChart)',
      "Génération automatique d'un script PowerShell de suppression",
      "Analyse d'une attaque de l'homme du milieu (MITM)",
    ],
    skills: ['RT3'],
    tools: ['Python', 'PyQt5', 'PyQtChart', 'JSON', 'PowerShell'],
    status: 'acquis',
    period: '1ʳᵉ année',
    order: 14,
    links: [
      { label: 'Code de l\'outil (.zip)', href: `${BASE}sae/sae1-05-outil-analyse-fichiers.zip`, kind: 'repo' },
    ],
  },

  // ── GABARIT — dupliquer ce bloc pour ajouter une SAÉ, puis dé-commenter ──
  // {
  //   id: 'sae-x-yy',
  //   code: 'SAE.X.YY',
  //   title: 'Titre de la SAÉ',
  //   summary: 'Résumé court affiché sur la carte (1–2 phrases).',
  //   description: 'Texte long affiché dans le détail (modale).',
  //   highlights: ['Point clé 1', 'Point clé 2'],
  //   skills: ['RT1'],
  //   tools: ['Outil A', 'Outil B'],
  //   status: 'en-cours',
  //   period: '2ᵉ année',
  //   order: 20,
  //   links: [{ label: 'Repo', href: '#', kind: 'repo' }],
  // },
];

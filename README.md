# Portfolio BUT R&T — Noé Coëffic

Portfolio web mono-page (one-page) sur le thème **réseau / cybersécurité**, valorisant les compétences
du référentiel **BUT Réseaux & Télécommunications**, les **SAÉ** et les **stages**.

**Stack :** React 18 + Vite + TypeScript · Tailwind CSS · Framer Motion · lucide-react.

---

## 🧱 Architecture pilotée par les données

Tout le contenu vit dans `src/data/` sous forme de **tableaux typés**. Les composants ne contiennent
**aucun contenu en dur** : ils mappent sur ces données. Conséquence : on enrichit le site en éditant
**un seul fichier**, sans toucher au JSX.

```
src/
├── data/
│   ├── types.ts        # contrats TypeScript (source de vérité)
│   ├── profile.ts      # identité, liens, accroche
│   ├── education.ts    # formation (timeline)
│   ├── skills.ts       # compétences RT1–RT5
│   ├── saes.ts         # SAÉ (projets universitaires)
│   ├── projects.ts     # projets perso (masqués si vide)
│   ├── internships.ts  # stages
│   └── index.ts        # exports + sélecteurs (tri, filtres dérivés)
├── components/         # UI réutilisable (Header, Hero, SaeCard, …)
├── hooks/              # useActiveSection, usePrefersReducedMotion
└── lib/                # helpers (cn, libellés d'état/niveau)
```

---

## 🚀 Installation & développement

Prérequis : **Node.js ≥ 20**.

```bash
npm install      # installe les dépendances
npm run dev      # serveur de dev (http://localhost:5173)
npm run build    # build de production (tsc + vite) dans dist/
npm run preview  # prévisualise le build de production
npm run lint     # vérification TypeScript (tsc --noEmit)
```

---

## 🌐 Déploiement — GitHub Pages

Le repo cible est **`MOOONSTREEE/Portfolio`**, d'où `base: '/Portfolio/'` dans `vite.config.ts`.
URL finale : `https://MOOONSTREEE.github.io/Portfolio/`.

Le déploiement est **automatique** via GitHub Actions (`.github/workflows/deploy.yml`) :

1. Pousser le projet sur la branche `main` du repo `Portfolio`.
2. Dans **Settings → Pages**, choisir **Source : GitHub Actions**.
3. Chaque `push` sur `main` build et publie le site.

> Si le repo est renommé, mettre à jour `base` dans `vite.config.ts` **et** l'URL Open Graph
> dans `index.html`.

---

## ✏️ Comment ajouter du contenu

### Ajouter une SAÉ

1. Ouvrir `src/data/saes.ts`.
2. Dupliquer le gabarit commenté en bas du tableau et le dé-commenter.
3. Donner un `id` unique, remplir `title`, `summary`, `description`, `tools`…
4. Renseigner `skills` avec des identifiants valides (`'RT1'` … `'RT5'`). Un id inexistant
   **fait échouer le build** : impossible de créer un badge ou un lien mort.
5. (Optionnel) `featured: true` pour épingler, `order` pour le tri, `links` pour rapport / vidéo / repo.

La carte, les badges et le filtre par compétence apparaissent **automatiquement**.

### Ajouter un projet personnel

Ajouter un objet dans `src/data/projects.ts`. La section et son entrée de menu n'apparaissent
**que si** au moins un projet est visible (sans `hidden: true`).

### Ajouter un stage / une formation

Ajouter un objet dans `src/data/internships.ts` ou `src/data/education.ts`.

### Vue technique / vue simplifiée

Un sélecteur dans l'en-tête bascule tout le site entre une **vue technique** (vocabulaire du métier,
codes RT et SAÉ, outils, apprentissages critiques) et une **vue simplifiée** pour les RH et les
personnes hors informatique (langage courant, exemples concrets, sans codes ni jargon).

- Chaque contenu peut avoir un champ `simple` (profil, formation, compétences, SAÉ, projets,
  stages). S'il manque, la version technique s'affiche : rien ne casse si on oublie de le remplir.
- En vue simplifiée, les codes (`RT1`, `SAÉ1.01`), les listes d'outils, les pourcentages, les
  filtres et les apprentissages critiques sont masqués ; les compétences affichent des exemples
  concrets (`simple.examples`).
- Le choix du visiteur est mémorisé, et le lien **`…/Portfolio/?vue=simple`** ouvre directement la
  vue simplifiée : c'est celui à envoyer à un·e RH.
- Logique : `src/lib/readingMode.tsx` (`useReadingMode().pick(tech, simple)`).

### Modifier une compétence

Éditer `src/data/skills.ts` : `level`, `levelPercent` (jauge), `status`, et `proofSaeIds`
(liste d'`id` de SAÉ servant de preuves).

---

## ✅ À compléter / valider

- **Compétences RT1, RT2, RT3, RT5** : niveaux et preuves exacts (depuis Mahara).
- **RT4 / RT5** : intitulés exacts du parcours Cybersécurité (syllabus IUT Colmar).
- **Alternance m2A** (3ᵉ année) : service d'accueil + 2 à 4 missions concrètes.
- **Stage m2A** (2ᵉ année) : dates exactes + 2 à 4 missions + poster éventuel.
- **SAÉ de 3ᵉ année** : à ajouter dans `saes.ts` au fil de l'année.
- **Stage 3ᵉ** : nom de l'entreprise de drones aquatiques + année.
- **Baccalauréat** : année exacte.
- **CV** : `public/cv.pdf` (FR) et `public/cv-en.pdf` (EN) à régénérer en cas de changement.
- **Décision** : afficher ou non les années de formation (retirer `period` dans `education.ts`).

---

© 2026 Noé Coëffic — Portfolio BUT R&T

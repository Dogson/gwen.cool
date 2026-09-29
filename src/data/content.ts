export type SkillGroup = {
  title: string;
  icon: string;
  items: string[];
};

export type Project = {
  index: string;
  name: string;
  domain: string;
  year: string;
  tagline: string;
  description: string;
  stack: string[];
  url: string;
  accent: string;
};

export const profile = {
  name: "Gwenaël Girod",
  firstName: "Gwenaël",
  lastName: "Girod",
  location: "Grenoble, France",
  role: "Ingénieur fullstack",
  subtitle: "Conception d'applications",
  age: 33,
  experience: "8 ans d'expérience",
  email: "gwenael@girod.email",
  github: "https://github.com/dogson",
  linkedin: "https://www.linkedin.com/in/ggirod/",
  malt: "https://www.malt.fr/profile/gwenaelgirod",
};

export type SocialId = "linkedin" | "github" | "malt";

export type Social = {
  id: SocialId;
  label: string;
  href: string;
  brand: string;
};

export const socials: Social[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: profile.linkedin,
    brand: "#0A66C2",
  },
  { id: "github", label: "GitHub", href: profile.github, brand: "#181717" },
  { id: "malt", label: "Malt", href: profile.malt, brand: "#FC5757" },
];

export const intro =
  "Je conçois et développe des applications web métier à forte valeur d'usage, de la modélisation des données jusqu'aux interfaces, au déploiement et à l'industrialisation.";

export const profileParagraphs = [
  "Ingénieur fullstack, 8 ans d'expérience sur des applications web métier à forte valeur d'usage : santé, IA, énergie... Je conçois et développe de bout en bout : modélisation des données, conception des APIs, interfaces front, déploiement et industrialisation.",
  "Mes principes : lisibilité et propreté du code, scalabilité de l'architecture, ergonomie et accessibilité de l'UX, non-régression garantie par les tests et la CI.",
];

export const pullQuote =
  "Concevoir et développer de bout en bout, avec le souci de la maintenabilité.";

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    icon: "◨",
    items: [
      "React",
      "TypeScript",
      "Astro",
      "Storybook",
      "Design system",
      "Architecture atomique",
      "Accessibilité",
      "Responsive",
    ],
  },
  {
    title: "Back-end",
    icon: "◧",
    items: [
      "Conception d'API",
      "API REST",
      "GraphQL",
      "WebSockets",
      "NestJS",
      "NodeJS",
      "Symfony",
      "Java Spring",
    ],
  },
  {
    title: "Données",
    icon: "◆",
    items: ["Modélisation de données", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "IA applicative",
    icon: "✦",
    items: [
      "RAG",
      "Embeddings & vectorisation",
      "IA on-premise",
      "Whisper",
      "Ollama",
      "NeMo",
      "Exposition de modèles",
    ],
  },
  {
    title: "Tests & qualité",
    icon: "◉",
    items: [
      "TDD",
      "Tests unitaires & d'intégration",
      "Tests end-to-end",
      "Jest",
      "Vitest",
      "Cypress",
      "Couverture & qualité de code",
    ],
  },
  {
    title: "Architecture & industrialisation",
    icon: "▦",
    items: ["ADR", "CI/CD", "Monorepo", "GitHub Actions", "Docker"],
  },
  {
    title: "Développement assisté par IA",
    icon: "❖",
    items: [
      "Génération & refactoring",
      "Skills & agents",
      "OpenCode",
      "Claude Code",
      "GitHub Copilot",
    ],
  },
];

export const projects: Project[] = [
  {
    index: "01",
    name: "about games",
    domain: "aboutgames.gwen.cool",
    year: "2026",
    tagline: "Agrégateur d'essais vidéos sur le jeu vidéo",
    description:
      "Plateforme qui rassemble une sélection choisie de vidéastes francophones et anglophones et leurs essais vidéo sur le jeu vidéo, triés par jeu par une reconnaissance automatique par IA.",
    stack: ["React", "NestJS", "IA"],
    url: "https://aboutgames.gwen.cool/",
    accent: "var(--color-aboutgames)",
  },
  {
    index: "02",
    name: "miam",
    domain: "miam.gwen.cool",
    year: "2025",
    tagline: "Carnet de recettes",
    description:
      "Site de recettes statique en JAMStack, contenu piloté depuis un CMS et rendu au build pour rester rapide et sobre.",
    stack: ["Astro", "React", "TypeScript", "DecapCMS"],
    url: "https://miam.gwen.cool",
    accent: "var(--color-miam)",
  },
  {
    index: "03",
    name: "flowstate",
    domain: "flowstate.gwen.cool",
    year: "2023",
    tagline: "Playlists de jeux vidéo",
    description:
      "Site statique de playlists de musiques de jeux vidéo, pensé pour l'écoute et la découverte, avec une interface épurée.",
    stack: ["React", "TypeScript"],
    url: "https://flowstate.gwen.cool",
    accent: "var(--color-flowstate)",
  },
  {
    index: "04",
    name: "blog",
    domain: "blog.gwen.cool",
    year: "2019",
    tagline: "Écriture & technique",
    description:
      "Blog personnel en JAMStack, généré au build et alimenté par un CMS, pour écrire sans se soucier de l'infrastructure.",
    stack: ["Gatsby", "React", "GraphQL", "Netlify-CMS"],
    url: "https://blog.gwen.cool",
    accent: "var(--color-blog)",
  },
];

export const navLinks = [
  { label: "Profil", href: "#profil" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets persos", href: "#projets" },
];

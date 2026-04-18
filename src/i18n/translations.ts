export type Lang = "en" | "es";

const translations = {
  en: {
    nav: {
      metrics: "metrics()",
      stack: "stack()",
      contact: "contact()",
    },
    hero: {
      label: "// PORTFOLIO: Ismael Tristan",
      headline: "FULLSTACK DEVELOPER",
      tagline: "Building scalable web applications with modern technologies",
      downloadCv: "Download_cv()",
      viewGithub: "View_github()",
    },
    metrics: {
      years: "YEARS",
      clients: "CLIENTS",
      projects: "PROJECTS",
      tools: "TOOLS",
    },
    projects: {
      label: "// PROJECTS",
      title: "RECENT WORK",
      showAll: "Show_all()",
    },
    stack: {
      label: "// TECH_STACK",
      title: "TECHNOLOGIES",
    },
    contact: {
      label: "// CONTACT",
      title: "LET'S BUILD",
      description: "Available for freelance and full-time opportunities",
      button: "Contact()",
    },
  },
  es: {
    nav: {
      metrics: "metricas()",
      stack: "stack()",
      contact: "contacto()",
    },
    hero: {
      label: "// PORTAFOLIO: Ismael Tristan",
      headline: "DESARROLLADOR FULLSTACK",
      tagline: "Construyendo aplicaciones web escalables con tecnologías modernas",
      downloadCv: "Descargar_cv()",
      viewGithub: "Ver_github()",
    },
    metrics: {
      years: "AÑOS",
      clients: "CLIENTES",
      projects: "PROYECTOS",
      tools: "HERRAMIENTAS",
    },
    projects: {
      label: "// PROYECTOS",
      title: "TRABAJO RECIENTE",
      showAll: "Ver_todos()",
    },
    stack: {
      label: "// TECH_STACK",
      title: "TECNOLOGÍAS",
    },
    contact: {
      label: "// CONTACTO",
      title: "CONSTRUYAMOS",
      description: "Disponible para freelance y oportunidades de tiempo completo",
      button: "Contacto()",
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];

export default translations;

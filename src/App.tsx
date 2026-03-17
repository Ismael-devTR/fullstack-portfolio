import { useTranslation } from "react-i18next";
import Button from "./components/ButtonSite";
import Card, { type CardProps } from "./components/Card";
import Chip from "./components/Chip";
import type { ProjectCardProps } from "./components/ProjectCard";
import ProjectCard from "./components/ProjectCard";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { t, i18n } = useTranslation();

  const [techStack, stackLoading] = useFetch<{ name: string; iconUrl: string }>(
    "https://blog.itr-dev.com/api/skills"
  );

  const metrics: CardProps[] = [
    {
      labelCard: t("metrics.years"),
      description: "5+",
      variant: "main",
    },
    {
      labelCard: t("metrics.clients"),
      description: "6+",
    },
    {
      labelCard: t("metrics.tools"),
      description: "10+",
    },
  ];

  const projects: ProjectCardProps[] = [];

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language.startsWith("es") ? "en" : "es");
  };

  return (
    <div className="layout">
      <nav className="navigation bg-card p-6" aria-label="Main navigation">
        <div className="layout-container nav-inner">
          <div>
            <span className="font-mono text-orange text-lg">//</span>{" "}
            <span className="font-display text-white text-xl">{t("nav.title")}</span>
          </div>
          <button
            onClick={toggleLang}
            className="lang-switcher"
            aria-label="Toggle language"
          >
            <span className="font-mono text-gray-600 text-sm">lang:</span>
            <span className="font-mono text-orange text-sm">
              {i18n.language.startsWith("es") ? "ES" : "EN"}
            </span>
          </button>
        </div>
      </nav>
      <section className="layout-container container p-8">
        <section className="hero">
          <span className="text-orange font-mono">
            {t("hero.label")}
          </span>
          <h1 className="text-white font-display">{t("hero.heading")}</h1>
          <p className="text-gray-600 text-xl font-mono">
            {t("hero.description")}
          </p>
          <div className="btn-container">
            <Button
              download
              target="_blank"
              rel="noopener noreferer"
              href={i18n.language.startsWith("es") ? "/cv/Ismael-Tristan-cv-es.pdf" : "/cv/Ismael-Tristan-cv-en.pdf"}
              variant="dark"
            >
              {t("hero.downloadCv")}
            </Button>
            <Button href="https://github.com/Ismael-devTR" target="_blank">
              {t("hero.viewGithub")}
            </Button>
          </div>
        </section>
        <section className="metrics-container fade-up" style={{ animationDelay: "0.15s" }}>
          {metrics.map((metric) => (
            <Card key={metric.labelCard} {...metric} />
          ))}
        </section>
        {projects.length > 0 && (
          <section className="projects-container fade-up" style={{ animationDelay: "0.3s" }}>
            <span className="font-mono text-orange">{t("projects.label")}</span>
            <div className="projects-title">
              <h2 className="font-display text-white text-2xl">{t("projects.heading")}</h2>
              <a className="font-mono text-orange" href="https://github.com/Ismael-devTR" target="_blank" rel="noopener noreferrer">
                {t("projects.showAll")}
              </a>
            </div>
            <div className="card-container gap-5">
              {projects.map((project) => (
                <ProjectCard {...project} />
              ))}
            </div>
          </section>
        )}
        <section className="stack-container gap-5 fade-up" style={{ animationDelay: "0.3s" }}>
          <span className="font-mono text-orange">{t("stack.label")}</span>
          <h2 className="font-display text-white text-2xl">{t("stack.heading")}</h2>
          <div className="chip-container gap-4">
            {!stackLoading &&
              techStack?.map(
                ({ name, iconUrl }: { name: string; iconUrl: string }) => (
                  <Chip key={name} iconUrl={iconUrl} label={name} />
                )
              )}
          </div>
        </section>
        <section className="contact bg-card p-8 gap-5 fade-up" style={{ animationDelay: "0.45s" }}>
          <span className="font-mono text-orange">{t("contact.label")}</span>
          <h2 className="font-display text-white text-2xl">{t("contact.heading")}</h2>
          <p className="font-mono text-gray-600 text-xl">
            {t("contact.availability")}
          </p>
          <span className="text-teal font-mono text-base">
            dev.tristan.romero@gmail.com
          </span>
          <Button href="mailto:dev.tristan.romero@gmail.com?subject=Portfolio Contact&body=Hi Ismael,%0D%0A%0D%0AI saw your portfolio and would like to talk about...">
            {t("contact.button")}
          </Button>
        </section>
      </section>
    </div>
  );
}

export default App;

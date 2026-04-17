import { useEffect, useRef, useState } from "react";
import Button from "./components/ButtonSite";
import Card, { type CardProps } from "./components/Card";
import Chip from "./components/Chip";
import type { ProjectCardProps } from "./components/ProjectCard";
import ProjectCard from "./components/ProjectCard";
import { useFetch } from "./hooks/useFetch";
import { useParallax } from "./hooks/useParallax";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useTypewriter } from "./hooks/useTypewriter";
import { useLang } from "./i18n/useLang";

function App() {
  const { lang, t, toggleLang } = useLang();

  const [techStack, stackLoading] = useFetch<{ name: string; iconUrl: string }>(
    "https://blog.itr-dev.com/api/skills"
  );

  // Scroll progress
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nav scroll behavior
  const [navScrolled, setNavScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setNavScrolled(currentY > 50);
      setNavHidden(currentY > 300 && currentY > lastScrollY.current);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax for hero
  const parallaxOffset = useParallax(0.3);

  // Typewriter
  const { displayed, isDone } = useTypewriter(t.hero.headline, 100, 800);

  // Scroll reveal
  const [metricsRef, metricsVisible] = useScrollReveal<HTMLElement>({ threshold: 0.2 });
  const [stackRef, stackVisible] = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const [contactRef, contactVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  const metrics: CardProps[] = [
    { labelCard: t.metrics.years, description: "5+", variant: "main" },
    { labelCard: t.metrics.clients, description: "5+" },
    { labelCard: t.metrics.projects, description: "5+" },
    { labelCard: t.metrics.tools, description: "5+" },
  ];

  const projects: ProjectCardProps[] = [];

  const navClass = [
    "navigation",
    navScrolled ? "nav-scrolled" : "",
    navHidden ? "nav-hidden" : "",
  ].filter(Boolean).join(" ");

  return (
    <div className="layout">
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Navigation */}
      <nav className={navClass}>
        <div className="layout-container nav-logo">
          <span className="font-mono text-orange text-lg">//</span>{" "}
          <span className="font-display text-white text-xl">FULLSTACK</span>
        </div>
        <div className="nav-links">
          <a href="#metrics" className="nav-link">{t.nav.metrics}</a>
          <a href="#stack" className="nav-link">{t.nav.stack}</a>
          <a href="#contact" className="nav-link">{t.nav.contact}</a>
          <button
            onClick={toggleLang}
            className="lang-toggle font-mono"
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "lang-active" : "lang-inactive"}>EN</span>
            <span className="lang-separator">/</span>
            <span className={lang === "es" ? "lang-active" : "lang-inactive"}>ES</span>
          </button>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="hero-wrapper">
        <div className="hero-bg-effects" style={{ transform: `translateY(${parallaxOffset}px)` }}>
          <div className="hero-orb hero-orb--orange" />
          <div className="hero-orb hero-orb--teal" />
          <div className="hero-grid" />
        </div>

        <div className="layout-container">
          <section className="hero">
            <span className="text-orange font-mono" style={{ animation: "slide-in-left 0.6s ease-out forwards" }}>
              {t.hero.label}
            </span>
            <h1 className="text-white font-display text-5xl">
              {displayed}
              {!isDone && <span className="typewriter-cursor" />}
            </h1>
            <p className="text-gray-600 text-xl font-mono hero-tagline" style={{ animation: "fade-up 0.8s ease-out 1.8s forwards", opacity: 0 }}>
              {t.hero.tagline}
            </p>
            <div className="btn-container" style={{ animation: "fade-up 0.8s ease-out 2.2s forwards", opacity: 0 }}>
              <Button
                download
                target="_blank"
                rel="noopener noreferrer"
                href="/cv/Ismael-Tristan-cv-en.pdf"
                variant="dark"
              >
                {t.hero.downloadCv}
              </Button>
              <Button href="https://github.com/Ismael-devTR" target="_blank">
                {t.hero.viewGithub}
              </Button>
            </div>
          </section>
        </div>
      </section>

      {/* Main Content */}
      <div className="section-wrapper">
        <section className="layout-container container p-8">
          {/* Metrics */}
          <section
            id="metrics"
            ref={metricsRef}
            className={`metrics-container reveal ${metricsVisible ? "visible" : ""}`}
          >
            {metrics.map((metric) => (
              <Card key={metric.labelCard} {...metric} />
            ))}
          </section>

          {/* Projects */}
          {projects.length > 0 && (
            <section className="projects-container">
              <span className="font-mono text-orange section-label">{t.projects.label}</span>
              <div className="projects-title">
                <h3 className="font-display text-white text-2xl">{t.projects.title}</h3>
                <a className="font-mono text-orange" href="http://">
                  {t.projects.showAll}
                </a>
              </div>
              <div className="card-container gap-5">
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </section>
          )}

          {/* Tech Stack */}
          <section
            id="stack"
            ref={stackRef}
            className={`stack-container gap-8 reveal ${stackVisible ? "visible" : ""}`}
          >
            <span className="font-mono text-orange section-label">{t.stack.label}</span>
            <h3 className="font-display text-white text-2xl">{t.stack.title}</h3>
            <div className="chip-container gap-4">
              {!stackLoading &&
                techStack?.map(
                  ({ name, iconUrl }: { name: string; iconUrl: string }) => (
                    <Chip key={name} iconUrl={iconUrl} label={name} />
                  )
                )}
            </div>
          </section>

          {/* Contact */}
          <div
            id="contact"
            ref={contactRef}
            className={`contact-wrapper reveal ${contactVisible ? "visible" : ""}`}
          >
            <section className="contact p-8 gap-5">
              <span className="font-mono text-orange section-label">{t.contact.label}</span>
              <h3 className="font-display text-white text-2xl">{t.contact.title}</h3>
              <p className="font-mono text-gray-600 text-xl">
                {t.contact.description}
              </p>
              <span className="text-teal font-mono text-base">
                dev.tristan.romero@gmail.com
              </span>
              <Button href="mailto:dev.tristan.romero@gmail.com?subject=Portfolio Contact&body=Hi Ismael,%0D%0A%0D%0AI saw your portfolio and would like to talk about...">
                {t.contact.button}
              </Button>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

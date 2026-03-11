import Button from "./components/ButtonSite";
import Card, { type CardProps } from "./components/Card";
import Chip from "./components/Chip";
import type { ProjectCardProps } from "./components/ProjectCard";
import ProjectCard from "./components/ProjectCard";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [techStack, stackLoading] = useFetch<{ name: string; iconUrl: string }>(
    "https://blog.itr-dev.com/api/skills"
  );

  const metrics: CardProps[] = [
    {
      labelCard: "YEARS",
      description: "5+",
      variant: "main",
    },
    {
      labelCard: "Clients",
      description: "6+",
    },
    {
      labelCard: "Tools",
      description: "10+",
    },
  ];

  const projects: ProjectCardProps[] = [];
  return (
    <div className="layout">
      <nav className="navigation bg-card p-6" aria-label="Main navigation">
        <div className="layout-container">
          <span className="font-mono text-orange text-lg">//</span>{" "}
          <span className="font-display text-white text-xl">FULLSTACK</span>
        </div>
      </nav>
      <section className="layout-container container p-8">
        <section className="hero">
          <span className="text-orange font-mono">
            // PORTFOLIO: Ismael Tristan
          </span>
          <h1 className="text-white font-display">FULLSTACK DEVELOPER</h1>
          <p className="text-gray-600 text-xl font-mono">
            Full Stack Developer with 4 years of experience building fast, reliable web applications. I've worked across startups and enterprise, contribute to open source, and care deeply about performance and clean code.
          </p>
          <div className="btn-container">
            <Button
              download
              target="_blank"
              rel="noopener noreferer"
              href="/cv/Ismael-Tristan-cv-en.pdf"
              variant="dark"
            >
              Download_cv()
            </Button>
            <Button href="https://github.com/Ismael-devTR" target="_blank">
              View_github()
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
            <span className="font-mono text-orange">// PROJECTS</span>
            <div className="projects-title">
              <h2 className="font-display text-white text-2xl">RECENT WORK</h2>
              <a className="font-mono text-orange" href="https://github.com/Ismael-devTR" target="_blank" rel="noopener noreferrer">
                Show_all()
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
          <span className="font-mono text-orange">// TECH_STACK</span>
          <h2 className="font-display text-white text-2xl">TECHNOLOGIES</h2>
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
          <span className="font-mono text-orange">// CONTACT</span>
          <h2 className="font-display text-white text-2xl">LET'S BUILD</h2>
          <p className="font-mono text-gray-600 text-xl">
            Available for freelance and full-time opportunities
          </p>
          <span className="text-teal font-mono text-base">
            dev.tristan.romero@gmail.com
          </span>
          <Button href="mailto:dev.tristan.romero@gmail.com?subject=Portfolio Contact&body=Hi Ismael,%0D%0A%0D%0AI saw your portfolio and would like to talk about...">
            Contact()
          </Button>
        </section>
      </section>
    </div>
  );
}

export default App;

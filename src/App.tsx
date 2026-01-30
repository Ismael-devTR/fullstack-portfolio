import Button from "./components/ButtonSite"
import Card, { type CardProps } from "./components/Card"
import Chip from "./components/Chip"
import type { ProjectCardProps } from "./components/ProjectCard"
import ProjectCard from "./components/ProjectCard"

function App() {



  const metrics: CardProps[] = [
    {
      labelCard: "YEARS",
      description: "5+",
      variant: "main"
    }, {
      labelCard: "Clients",
      description: "5+",
    }, {
      labelCard: "Projects",
      description: "5+",
    }, {
      labelCard: "Tools",
      description: "5+",
    }
  ]


  const techStack = ["React", "TS", "Node", "SQL"]

  const projects: ProjectCardProps[] = [
    {
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&q=80",
      type: "fullstack",
      title: "E-Commerce Platform",
      description: "Modern online store with payment integration and real-time inventory"
    }, {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
      type: "frontend",
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with interactive charts and reports"
    }, {
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      type: "backend",
      title: "REST API Service",
      description: "Scalable microservices architecture with authentication and caching"
    }
  ]

  return (
    <div className='layout'>
      <nav className="navigation bg-card p-6">
        <div className="layout-container"><span className="font-mono text-orange text-lg">//</span> <span className="font-display text-white text-xl">FULLSTACK</span></div>
      </nav>
      <section className="layout-container container p-8">
        <section className="hero">
          <span className="text-orange font-mono">// PORTFOLIO: Ismael Tristan</span>
          <h1 className="text-white font-display">FULLSTACK DEVELOPER</h1>
          <p className="text-gray-600 text-xl font-mono">Building scalable web applications with modern technologies</p>
          <div className="btn-container">
            <Button download target="_blank" rel="noopener noreferer" href="/cv/Ismael-Tristan-cv-en.pdf" variant="dark">Download_cv()</Button>
            <Button href="https://github.com/Ismael-devTR" target="_blank" >View_github()</Button>
          </div>
        </section>
        <section className="metrics-container">
          {metrics.map(metric => (
            <Card {...metric} />
          ))}
        </section>
        <section className="projects-container">
          <span className="font-mono text-orange">// PROJECTS</span>
          <div className="projects-title">
            <h3 className="font-display text-white text-2xl">RECENT WORK</h3>
            <a className="font-mono text-orange" href="http://">Show_all()</a>
          </div>
          <div className="card-container gap-5">
            {projects.map(project => <ProjectCard {...project} />)}
          </div>
        </section>
        <section className="stack-container gap-5">
          <span className="font-mono text-orange">// TECH_STACK</span>
          <h3 className="font-display text-white text-2xl">TECHNOLOGIES</h3>
          <div className="chip-container gap-4">
            {techStack.map(tech => <Chip label={tech} />)}
          </div>
        </section>
        <section className="contact bg-card p-8 gap-5">
          <span className="font-mono text-orange">// CONTACT</span>
          <h3 className="font-display text-white text-2xl">LET'S BUILD</h3>
          <p className="font-mono text-gray-600 text-xl">Available for freelance and full-time opportunities</p>
          <span className="text-teal font-mono text-base">dev.tristan.romero@gmail.com</span>
          <Button href="mailto:dev.tristan.romero@gmail.com?subject=Portfolio Contact&body=Hi Ismael,%0D%0A%0D%0AI saw your portfolio and would like to talk about..."
          >Contact()</Button>
        </section>
      </section>
    </div>
  )
}

export default App

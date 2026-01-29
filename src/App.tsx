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
      img: "img",

      type: "fullstack",
      title: "project title",
      description: "descriptions here"
    }, {
      img: "img",
      type: "fullstack",
      title: "project title",
      description: "descriptions here"
    }
    , {
      img: "img",
      type: "fullstack",
      title: "project title",
      description: "descriptions here"
    }
  ]

  return (
    <div className='layout'>
      <nav className="navigation p-6">
        <div><span className="font-mono text-orange text-lg">//</span> <span className="font-display text-white text-xl">FULLSTACK</span></div>
        <div className="text-white">Menu</div>
      </nav>
      <section className="container p-8">
        <section className="hero">
          <span className="text-orange font-mono">// PORTFOLIO</span>
          <h1 className="text-white font-display">FULLSTACK DEVELOPER</h1>
          <p className="text-gray-600 text-xl font-mono">Building scalable web applications with modern technologies</p>
          <div className="btn-container">
            <Button variant="dark">Download_cv()</Button>
            <Button>View_github()</Button>
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
          <Button>Contact()</Button>
        </section>
      </section>
    </div>
  )
}

export default App

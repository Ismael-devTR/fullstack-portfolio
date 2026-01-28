function App() {
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
            <button type="button" className="button-site bg-dark-surface text-white text-base font-semibold ">Download_cv()</button>
            <button type="button" className="button-site bg-orange text-base font-semibold ">View_github()</button>
          </div>
        </section>
        <section className="metrics-container">
          <div className="metric-card bg-orange p5">
            <span className="font-mono text-base">YEARS</span>
            <h6 className="font-display text-5xl ">5+</h6>
          </div>
          <div className="metric-card bg-card p5">
            <span className="font-mono text-gray-600 text-base">Clients</span>
            <h6 className="font-display text-white text-5xl ">5+</h6>
          </div>
          <div className="metric-card bg-card p5">
            <span className="font-mono text-gray-600 text-base">Projects</span>
            <h6 className="font-display text-white text-5xl ">5+</h6>
          </div>
          <div className="metric-card bg-card p5">
            <span className="font-mono text-gray-600 text-base">Tools</span>
            <h6 className="font-display text-white text-5xl ">5+</h6>
          </div>
        </section>
        <section className="projects-container">
          <span className="font-mono text-orange">// PROJECTS</span>
          <div className="projects-title">
            <h3 className="font-display text-white text-2xl">RECENT WORK</h3>
            <a className="font-mono text-orange" href="http://">Show_all()</a>
          </div>
          <div className="card-container gap-5">
            <div className="card">
              img
              <div className="description bg-card gap-4 p-6">
                <span className="font-mono text-orange text-base">type: fullstack</span>
                <span className="font-mono text-white text-xl">project title</span>
                <p className="font-mono text-gray-600 text-xl">descriptions here</p>
              </div>
            </div>
            <div className="card">
              img
              <div className="description bg-card gap-4 p-6">
                <span className="font-mono text-orange text-base">type: fullstack</span>
                <span className="font-mono text-white text-xl">project title</span>
                <p className="font-mono text-gray-600 text-xl">descriptions here</p>
              </div>
            </div>
          </div>
        </section>
        <section className="stack-container gap-5">
          <span className="font-mono text-orange">// TECH_STACK</span>
          <h3 className="font-display text-white text-2xl">TECHNOLOGIES</h3>
          <div className="chip-container gap-4">
            <div className="bg-dark-surface font-mono text-md text-white p-4 border-placeholder">React</div>
            <span className="bg-dark-surface font-mono text-md text-white p-4 border-placeholder">TS</span>
            <span className="bg-dark-surface font-mono text-md text-white p-4 border-placeholder">Node</span>
            <span className="bg-dark-surface font-mono text-md text-white p-4 border-placeholder">SQL</span>
          </div>
        </section>
        <section className="contact bg-card p-8 gap-5">
          <span className="font-mono text-orange">// CONTACT</span>
          <h3 className="font-display text-white text-2xl">LET'S BUILD</h3>
          <p className="font-mono text-gray-600 text-xl">Available for freelance and full-time opportunities</p>
          <span className="text-teal font-mono text-base">dev.tristan.romero@gmail.com</span>
          <button type="button" className="button-site bg-orange text-base font-semibold ">Contact()</button>
        </section>
      </section>
    </div>
  )
}

export default App

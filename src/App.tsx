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
          <div className="metric-card p5">
            <span className="font-mono text-gray-600 text-base">YEARS</span>
            <h6 className="font-display text-white text-5xl ">5+</h6>
          </div>
          <div className="metric-card p5">
            <span className="font-mono text-gray-600 text-base">Clients</span>
            <h6 className="font-display text-white text-5xl ">5+</h6>
          </div>
            <div className="metric-card p5">
            <span className="font-mono text-gray-600 text-base">Projects</span>
            <h6 className="font-display text-white text-5xl ">5+</h6>
          </div>
            <div className="metric-card p5">
            <span className="font-mono text-gray-600 text-base">Tools</span>
            <h6 className="font-display text-white text-5xl ">5+</h6>
          </div>
        </section>
      </section>
    </div>
  )
}

export default App

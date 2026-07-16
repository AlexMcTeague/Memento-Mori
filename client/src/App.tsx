import './App.css'
import Logo from '/favicon.svg'
import { BookUser, FileCodeCorner } from 'lucide-react';

function App() {
  return (
    <>
      <section id="center">
        <img src={Logo} className="logo" />
        <div>
          <h1>Memento Mori</h1>
          <p>
            <em>Use the looming spectre of Doom to stay motivated</em>
            <br />Take advantage of every moment, stop procrastinating, and focus on what’s important
          </p>
        </div>
        <button
          type="button"
          className="counter" // TODO: Update this to a link to the planner page
        >
          Remember that you must die
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <FileCodeCorner />
          <h2>Documentation</h2>
          <p>Learn more about Memento Mori and its creator</p>
          <ul>
            <li>
              <a href="https://github.com/AlexMcTeague/Memento-Mori" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                This Site's Repository
              </a>
            </li>
            <li>
              <a href="https://alexmcteague.github.io/" target="_blank">
                <BookUser />
                Alex McTeague's Portfolio
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

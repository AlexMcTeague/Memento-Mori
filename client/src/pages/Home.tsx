import '../css/home.css';
import Logo from '/favicon.svg';
import { Link } from 'react-router';
import { BookUser, FileCodeCorner } from 'lucide-react';

function App() {
  return (
    <>
      <div className="home-root">
        <section id="center">
          <img src={Logo} className="logo" /> {/* TODO: Create a light-mode variant logo */}
          <div>
            <h1>Memento Mori</h1>
            <p>
              <em>Use the looming spectre of Doom to stay motivated</em>
              <br />Take advantage of every moment, stop procrastinating, and focus on what’s important
            </p>
          </div>
          <Link to="/List" className="btn-link">
            Remember that you must die
          </Link>
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
      </div>
    </>
  )
}

export default App

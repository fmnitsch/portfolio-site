import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
//Images
import musicApp from "../Images/wv-screenshot.jpg";
import handyHydraulics from "../Images/hh-screenshot.jpg";
import jammming from "../Images/jm-screenshot.jpg";
import movieNight from "../Images/mn-screenshot.jpg";
import { ReactComponent as Github } from "../Images/Github.svg";

const WorkSection = ({ setLocation }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.33,
  });

  useEffect(() => {
    if (inView) {
      setLocation("work");
    }
  }, [inView]);

  return (
    <main className="work-section" id="work" ref={ref}>
      <h2>Here's some work I've done:</h2>
      <div className="projects-container">
        <div className="project" id="waves-music">
          <img
            className="project-image"
            src={musicApp}
            alt="Waves Screenshot"
          />
          <div className="project-info">
            <div className="headline">
              <h3>
                <span className="orange">Waves Music: </span>
                Enjoy a beautiful UI, relaxing chill-hop, and responsive design.
              </h3>
            </div>
            <ul className="project-languages">
              <li>React</li>
              <li>HTML</li>
              <li>SCSS/SASS</li>
              <li>JavaScript</li>
            </ul>
            <div className="code-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://fmnitsch.github.io/music-player/"
              >
                <button className="live-demo">Live Demo</button>
              </a>
              <a target="_blank" rel="noreferrer" href="placeholder">
                <button className="case-study">Case Study</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/fmnitsch/music-player"
              >
                <button>
                  Code <Github className="github" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="project" id="movie-night">
          <img
            className="project-image"
            src={movieNight}
            alt="Movie night Screenshot"
          />
          <div className="project-info">
            <div className="headline">
              <h3>
                <span className="orange">Movie Night: </span>A way to build your
                must-watch list and never lose it.
              </h3>
            </div>
            <ul className="project-languages">
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className="code-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://fmnitsch.github.io/movie-night/"
              >
                <button className="live-demo">Live Demo</button>
              </a>
              <a target="_blank" rel="noreferrer" href="placeholder">
                <button className="case-study">Case Study</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/fmnitsch/movie-night"
              >
                <button>
                  Code <Github className="github" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="project" id="jammming">
          <img
            className="project-image"
            src={jammming}
            alt="Jammming screenshot"
          />
          <div className="project-info">
            <div className="headline">
              <h3>
                <span className="orange">Jammming: </span>
                Search for songs, build new Spotify playlists, and edit your
                current ones all in one spot.
              </h3>
            </div>
            <ul className="project-languages">
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className="code-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="http://fnit-jammming.surge.sh/"
              >
                <button className="live-demo">Live Demo</button>
              </a>
              <a target="_blank" rel="noreferrer" href="placeholder">
                <button className="case-study">Case Study</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/fmnitsch/codecademy-jammming"
              >
                <button>
                  Code <Github className="github" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="project" id="handy-hydraulics">
          <img
            className="project-image"
            src={handyHydraulics}
            alt="Handy Hydraulics screenshot"
          />
          <div className="project-info">
            <div className="headline">
              <h3>
                <span className="orange">Handy Hydraulics: </span>A series of
                calculators to make a Fire Protection Engineer's job easier.
              </h3>
            </div>
            <ul className="project-languages">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className="code-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://fmnitsch.github.io/handyhydraulics/handyhydraulics.html"
              >
                <button className="live-demo">Live Demo</button>
              </a>
              <a target="_blank" rel="noreferrer" href="placeholder">
                <button className="case-study">Case Study</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/fmnitsch/handyhydraulics"
              >
                <button>
                  Code <Github className="github" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkSection;

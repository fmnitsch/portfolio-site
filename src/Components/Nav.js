import { Link } from "react-router-dom";
import { ReactComponent as Linkedin } from "../Images/LinkedIn.svg";
import { ReactComponent as Github } from "../Images/Github.svg";

const Nav = ({ location }) => {
  return (
    <nav className="desktop-nav">
      <div className="page-links">
        <div className="name">
          <a href="/#home">
            <h3>
              FRANCIS
              <br />
              NITSCH
            </h3>
          </a>
          <hr />
          <p>Full Stack Developer</p>
        </div>
        <ul>
          <a href="/#about">
            <li>
              About
              <div
                className={`line ${location === "about" ? "active" : ""}`}
              ></div>
            </li>
          </a>
          <a href="/#work">
            <li>
              Work
              <div
                className={`line ${location === "work" ? "active" : ""}`}
              ></div>
            </li>
          </a>
          <a href="/#contact">
            <li>
              Contact
              <div
                className={`line ${location === "contact" ? "active" : ""}`}
              ></div>
            </li>
          </a>
          <Link to="/blog">
            <li>
              Blog
              <div
                className={`line ${location === "blog" ? "active" : ""}`}
              ></div>
            </li>
          </Link>
          <a
            href="https://www.dropbox.com/s/j7ncu6id47tr67n/Francis%20Nitsch%20Resume%20%E2%80%94%20Online.pdf?dl=0"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              Resumé
              <div className="line"></div>
            </li>
          </a>
        </ul>
      </div>
      <div className="social-links">
        <a target="_blank" rel="noreferrer" href="https://github.com/fmnitsch">
          <Github className="social-icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/francis-nitsch-b6020b48/"
        >
          <Linkedin className="social-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;

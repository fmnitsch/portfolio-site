import { Link } from "react-router-dom";
import { ReactComponent as Linkedin } from "../Images/LinkedIn.svg";
import { ReactComponent as Github } from "../Images/Github.svg";

const MobileNav = ({ location }) => {
  return (
    <nav className="mobile-nav">
      <div className="mobile-name">
        <a href="/#home">
          <h3>FRANCIS NITSCH</h3>
        </a>
      </div>
      <div className="mobile-page-links">
        <ul>
          <Link to="/blog">
            <li className={`${location === "blog" ? "mobile-active" : ""}`}>
              Blog
            </li>
          </Link>
          <a
            href="https://www.dropbox.com/s/j7ncu6id47tr67n/Francis%20Nitsch%20Resume%20%E2%80%94%20Online.pdf?dl=0"
            target="_blank"
            rel="noreferrer"
          >
            <li>Resumé</li>
          </a>
        </ul>

        <div className="social-links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/fmnitsch"
          >
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
      </div>
    </nav>
  );
};

export default MobileNav;

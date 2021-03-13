import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
// Images
import { ReactComponent as Copy } from "../Images/copysvg.svg";
import { ReactComponent as Linkedin } from "../Images/LinkedIn.svg";
import { ReactComponent as Github } from "../Images/Github.svg";

const Contact = ({ setLocation }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
  });

  const copyText = async () => {
    // Clipboard API supported?
    if (!navigator.clipboard) return;

    // copy text to clipboard
    const text = "hello@francisnitsch.com";
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  useEffect(() => {
    if (inView) {
      setLocation("contact");
    }
  }, [inView]);

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="email">
        <h2>Want to get in touch?</h2>
        <p>
          I'm always looking for new and interesting projects and opportunities.{" "}
          <br />I love to help great teams create useful, beautiful user
          experiences. <br />
          <br />
          Interested? Send me an email at
          <a href="mailto:hello@francisnitsch.com">
            <span id="email"> hello@francisnitsch.com</span>
          </a>{" "}
          <Copy className="copy-icon" onClick={copyText} />{" "}
        </p>
        <br />
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
    </section>
  );
};

export default Contact;

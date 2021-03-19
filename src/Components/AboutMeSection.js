import { useEffect } from "react";
import headshot from "../Images/Headshot.png";
import { useInView } from "react-intersection-observer";

const AboutMe = ({ setLocation }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setLocation("about");
    }
  }, [inView, setLocation]);

  return (
    <section className="about" id="about" ref={ref}>
      <div className="hi">
        <h2>It's nice to meet you!</h2>
        <p>Here's a little about me:</p>
      </div>
      <div className="bio-section">
        <img src={headshot} alt="Francis" />
        <div className="bio-text">
          <p>
            I love developing sites and apps that are useful, beautiful, and
            make people's lives better. With full stack experience, I like all
            parts of web development but I'm at my happiest working on a team,
            building front-end UIs using React and diving head-first into the
            details of CSS. <br />
            <br />
            I'm a self-starter and team-player. From my diverse background of
            work experience, I’ve developed excellent communication and client
            management skills which are crucial when working with different
            teams and stakeholders
            <br />
            <br />
            If you're looking for a curious, driven team player who's not afraid
            to break through barriers and learn new things, I'm always happy to
            chat.
          </p>
          <div className="languages-xl">
            <p>A few of the languages and frameworks I've worked in:</p>
            <div className="list-container">
              <ul>
                <li>HTML 5</li>
                <li>CSS/SCSS</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
              </ul>
              <ul>
                <li>React.js</li>
                <li>Redux</li>
                <li>Express.js</li>
              </ul>
              <ul>
                <li>SQL</li>
                <li>Command Line</li>
                <li>Git + Git workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="languages">
        <p>A few of the languages and frameworks I've worked in:</p>
        <div className="list-container">
          <ul>
            <li>HTML 5</li>
            <li>CSS/SCSS</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>React.js</li>
          </ul>
          <ul>
            <li>Redux</li>
            <li>Express.js</li>
            <li>SQL</li>
            <li>Command Line</li>
            <li>Git + Git workflow</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

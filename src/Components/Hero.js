import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Carousel from "./Carousel";

const Hero = ({ setLocation }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView) {
      setLocation("home");
    }
  }, [inView]);

  return (
    <div className="header-container" id="home" ref={ref}>
      <header className="main-header">
        <div className="hello-statement">
          <h1>
            Hi! I’m Francis.
            <br />
            <br />
            I’m a full stack web developer who loves to keep it simple.
          </h1>
        </div>
        <div className="carousel-wrapper">
          <Carousel />
        </div>
      </header>
    </div>
  );
};

export default Hero;

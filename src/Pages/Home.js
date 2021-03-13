import Hero from "../Components/Hero";
import Contact from "../Components/ContactSection";
import AboutMeSection from "../Components/AboutMeSection";
import WorkSection from "../Components/WorkSection";
import BlogSection from "../Components/BlogSection";

const Home = ({ setLocation }) => {
  return (
    <div className="home">
      <Hero setLocation={setLocation} />
      <div className="content">
        <AboutMeSection setLocation={setLocation} />
        <WorkSection setLocation={setLocation} />
        <Contact setLocation={setLocation} />
        <BlogSection />
      </div>
    </div>
  );
};

export default Home;

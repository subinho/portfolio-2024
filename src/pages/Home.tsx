import { arrow_down } from "../assets/icons";
import { Projects } from "../components";

const Home = () => {
  return (
    <div className="home">
      {/* hero */}
      <div className="hero" id="hero">
        <div className="hero_container">
          <h2 className="hero_welcome">Hey there, I'm Stepan</h2>
          <h1 className="hero_heading">
            A <strong className="hero_strong">Web Developer</strong> passionate
            about
            <br className="hero_break" /> learning new technologies
          </h1>
        </div>
        <img
          src={arrow_down}
          alt=""
          className="hero_arrow"
          height={32}
          width={32}
        />
      </div>
      {/* projects */}
      <Projects />
    </div>
  );
};

export default Home;

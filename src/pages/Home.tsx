import { arrow_down } from "../assets/icons";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero_container">
        <h2 className="hero_welcome">Hey there, I'm Stepan</h2>
        <h1 className="hero_heading">
          A <strong className="hero_strong">Web Developer</strong> passionate
          about
          <br /> learning new technologies
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
  );
};

export default Home;

import { Project } from '../components';
import { projectData } from '../assets/data';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects_container">
        {projectData.map((item) => (
          <Project
            image={item.image}
            heading={item.heading}
            desc={item.desc}
            badges={item.badges}
            badgeColor={item.badgeColor}
            refer={item.refer}
            key={item.id}
            github={item.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

{
  /* <div className="projects_item">
          <img src={under_construction} alt="" className="projects_image" />
          <div className="projects_details">
            <h3 className="projects_details-heading">Krasa a duse</h3>
            <p className="projects_details-desc">
              Small bussines page, which offers cosmetic and terapeutic
              services.
            </p>
            <span className="projects_badge">Wordpress</span>
            <button type="button" className="projects_details-btn">
              <Link to="krasaaduse.cz" target="_blank" rel="norefer">
                See project
              </Link>
            </button>
          </div>
        </div> */
}

{
  /* <Project
image={under_construction}
heading="Krasa a Duse"
desc="Small bussines page, which offers cosmetic and terapeutic
    services."
badge="Wordpress"
badgeColor="#1f9af1"
refer="krasaaduse.cz"
/> */
}

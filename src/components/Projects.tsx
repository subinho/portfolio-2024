import { Project } from '../components';
import { projectData } from '../assets/data';

const Projects = () => {
  return (
    <>
      <h2 style={{textAlign: 'center', fontSize: '3rem', fontWeight: '400', marginBlock: '1em'}}>Projects</h2>
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
    </>
  );
};

export default Projects;

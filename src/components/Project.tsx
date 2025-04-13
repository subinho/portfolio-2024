import { Link } from 'react-router-dom';
import { FC } from 'react';
import { ProjectProps } from '../assets/interfaces/global';

const Project: FC<ProjectProps> = ({
  image,
  heading,
  desc,
  badges,
  refer,
  github,
}): JSX.Element => {
  return (
    <div className="project_item">
      <img src={image} alt="" className="project_image" />
      <div className="project_details">
        <h3 className="project_details-heading">{heading}</h3>
        <p className="project_details-desc">{desc}</p>
        <div className="project_badges">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="project_badges-badge"
              style={{
                backgroundColor: badge['bgColor'],
                color: badge['color'],
              }}
            >
              {badge['name']}
            </span>
          ))}
        </div>
        <div className="project_details-links">
          <Link
            to={refer}
            target="_blank"
            rel="norefer"
            className={`${
              refer === '#' ? 'project_details-hidden' : 'project_details-live'
            }`}
          >
            Live
          </Link>
          <Link
            to={github}
            target="_blank"
            rel="norefer"
            className={`${
              github === '#'
                ? 'project_details-hidden'
                : 'project_details-github'
            }`}
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;

import { Link } from "react-router-dom";
import { FC } from "react";
import { ProjectProps } from "../assets/interfaces/global";

const Project: FC<ProjectProps> = ({
  image,
  heading,
  desc,
  badge,
  badgeColor,
  refer,
}): JSX.Element => {
  return (
    <div className="project_item">
      <img src={image} alt="" className="project_image" />
      <div className="project_details">
        <h3 className="project_details-heading">{heading}</h3>
        <p className="project_details-desc">{desc}</p>
        <span className="project_badge" style={{ backgroundColor: badgeColor }}>
          {badge}
        </span>
        <button type="button" className="project_details-btn">
          <Link
            to={refer}
            target="_blank"
            rel="norefer"
            className="project_details-link"
          >
            Visit site
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Project;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer_heading">Stepan Subrt Ⓒ 2024</h3>
      <div className="footer_nav">
        <ul className="footer_links">
          <li>
            <Link to="#hero">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="#">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

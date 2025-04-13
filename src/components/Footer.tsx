import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <h3 className="footer_heading">Stepan Subrt Ⓒ 2025</h3>
        <div className="footer_nav">
          <ul className="footer_links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link
                to="https://drive.google.com/file/d/1LcHPE37yr0EWFifvxNdmVuAeHi3tClog/view?usp=drive_link"
                target="_blank"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

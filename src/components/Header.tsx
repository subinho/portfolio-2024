import { close, menu } from '../assets/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <h1 className="topnav_logo">Stepan Subrt</h1>
      <nav className="topnav">
        <button className="topnav_open topnav_btn" onClick={handleMenu}>
          <img src={menu} alt="" height={32} width={32} />
        </button>
        <div className={`topnav_menu ${showMenu && 'active'}`}>
          <button className="topnav_close topnav_btn" onClick={handleMenu}>
            <img src={close} alt="" height={32} width={32} />
          </button>
          <ul className="topnav_links">
            <li className="topnav_item">
              <Link to="/" onClick={() => showMenu && setShowMenu(false)}>
                Home
              </Link>
            </li>
            <li className="topnav_item">
              <Link to="/about" onClick={() => showMenu && setShowMenu(false)}>
                About
              </Link>
            </li>
            <li className="topnav_item">
              <Link
                to="https://drive.google.com/file/d/1CN2WKjyUQRnbLDSEebvU5aWeII9sYeNv/view"
                target="_blank"
                onClick={() => showMenu && setShowMenu(false)}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

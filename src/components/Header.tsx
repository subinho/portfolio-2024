import React from 'react';
import { close, menu } from '../assets/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showMenu, setShowMenu ] = useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        const scrollThreshold = 60; // Adjust as needed
        if (window.scrollY > scrollThreshold) {
          document.querySelector('.header')?.classList.add('bg_black');
        } else {
          document.querySelector('.header')?.classList.remove('bg_black');
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    }

  return (
    <header className='header'>
      <div className='header_container'>
      {/* Logo */}
        <div className='header_logo'>Štěpán Šubrt</div>

        {/* Mobile Menu */}
        <button className='header_mobile' onClick={toggleMenu}><img src={menu} alt='Mobile menu button' /></button>
        {/* Navigation */}
        <nav className={`header_navigation ${showMenu ? 'open' : ''}`}>
          <Link to='/' onClick={toggleMenu}>Home</Link>
          <Link to='/about' onClick={toggleMenu}>About me</Link>
          <Link to='https://drive.google.com/file/d/1LcHPE37yr0EWFifvxNdmVuAeHi3tClog/view?usp=drive_link' target='_blank' onClick={toggleMenu}>Resume</Link>
          <button className='header_mobile header_close' onClick={toggleMenu}><img src={close} alt='Mobile menu button' /></button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

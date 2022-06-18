import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../../public/LOGO.svg';
import menu from '../../../public/menu.svg';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <nav className="header__nav ">
        <Link to="about" className="header__link">
          about
        </Link>
        <Link to="songs" className="header__link">
          songs
        </Link>
        <Link to="songs" className="header__link">
          poems
        </Link>
        <Link to="songs" className="header__link">
          contacts
        </Link>
      </nav>
      {showMenu ? (
        <nav className="header__nav header__nav--mobile">
          <Link to="about" className="header__link">
            about
          </Link>
          <Link to="songs" className="header__link">
            songs
          </Link>
          <Link to="songs" className="header__link">
            poems
          </Link>
          <Link to="songs" className="header__link">
            contacts
          </Link>
        </nav>
      ) : null}

      <img
        src={menu}
        alt="меню"
        className="header__menu"
        onClick={() => {
          setShowMenu((value) => !value);
        }}
      />
    </header>
  );
};

export default Header;

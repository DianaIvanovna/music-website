import React, { useState } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/LOGO.svg';
import menu from '../../../public/menu.svg';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <nav className="header__nav ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'header__link header__link--active' : 'header__link'
          }
        >
          about
        </NavLink>
        <NavLink
          to="songs"
          className={({ isActive }) =>
            isActive ? 'header__link header__link--active' : 'header__link'
          }
        >
          songs
        </NavLink>
        <NavLink
          to="poems"
          className={({ isActive }) =>
            isActive ? 'header__link header__link--active' : 'header__link'
          }
        >
          poems
        </NavLink>
        <NavLink
          to="contacts"
          className={({ isActive }) =>
            isActive ? 'header__link header__link--active' : 'header__link'
          }
        >
          contacts
        </NavLink>
      </nav>
      {showMenu ? (
        <nav className="header__nav header__nav--mobile">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
            about
          </NavLink>
          <NavLink
            to="songs"
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
            songs
          </NavLink>
          <NavLink
            to="poems"
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
            poems
          </NavLink>
          <NavLink
            to="contacts"
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
            contacts
          </NavLink>
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

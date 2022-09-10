import React, { useEffect, useState } from 'react';
import './Header.scss';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../../public/LOGO.svg';
import menu from '../../../public/menu.svg';

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [flagAnim, setFlagAnim] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const anim = query.get('anim');

    if (anim) {
      setFlagAnim(true);
    } else {
      setFlagAnim(false);
    }
  }, [location]);

  return (
    <header className={`header ${showMenu ? 'header--black' : ''}`}>
      <img
        src={logo}
        alt="logo"
        className="header__logo"
        onClick={() => {
          window.location.href = `/`;
        }}
      />
      <nav className="header__nav ">
        <NavLink
          onClick={() => {
            setShowMenu(false);
          }}
          to="/"
          className={({ isActive }) => {
            return isActive && flagAnim
              ? 'header__link header__link--active'
              : 'header__link';
          }}
        >
          about
        </NavLink>
        <NavLink
          onClick={() => {
            setShowMenu(false);
          }}
          to="songs"
          className={({ isActive }) =>
            isActive ? 'header__link header__link--active' : 'header__link'
          }
        >
          songs
        </NavLink>
        <NavLink
          onClick={() => {
            setShowMenu(false);
          }}
          to="poems"
          className={({ isActive }) =>
            isActive ? 'header__link header__link--active' : 'header__link'
          }
        >
          poems
        </NavLink>
        <NavLink
          onClick={() => {
            setShowMenu(false);
          }}
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
            onClick={() => {
              setShowMenu(false);
            }}
            to="/"
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
            about
          </NavLink>
          <NavLink
            onClick={() => {
              setShowMenu(false);
            }}
            to="songs"
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
            songs
          </NavLink>
          <NavLink
            onClick={() => {
              setShowMenu(false);
            }}
            to="poems"
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
            poems
          </NavLink>
          <NavLink
            onClick={() => {
              setShowMenu(false);
            }}
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

import React from 'react';
import './Footer.scss';
import info from '../../../public/info.svg';
// import instagram from '../../../public/instagram.svg';
import spotify from '../../../public/spotify.svg';
import youtube from '../../../public/youtube.svg';
import linktree from '../../../public/linktree.svg';
import { NavLink } from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <p className="footer__icon">
          <a
            href="https://www.youtube.com/channel/UCBbxmuOJ4jIqs-OBGQYJwiw"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="youtube" />
          </a>
        </p>
        {/* <p className="footer__icon">
          <a
            href="https://www.instagram.com/sergeyshmidtmusic/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
        </p> */}
        <p className="footer__icon">
          <a
            href="https://open.spotify.com/artist/6S1LEtvKQtd8uEvtPG2gDM"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={spotify}
              alt="spotify"
              style={{ width: '29px', heigth: '29px' }}
            />
          </a>
        </p>
        <p className="footer__icon  footer__icon--linktree">
          <a
            href="https://linktr.ee/sergeyshmidt"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linktree} alt="linktree" />
          </a>
        </p>
        <p className="footer__icon footer__icon--end">
          <img
            src={info}
            alt="info"
            onClick={() => {
              props.setOpenPopup((value) => !value);
            }}
          />
        </p>
      </div>
      <NavLink to="/privacy-policy" className="footer__copyright footer__link">
        Privacy Policy
      </NavLink>
      <p className="footer__copyright">
        Copyright {new Date().getUTCFullYear()}. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

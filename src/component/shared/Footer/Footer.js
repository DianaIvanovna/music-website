import React from 'react';
import './Footer.scss';
import info from '../../../public/info.svg';
import instagram from '../../../public/instagram.svg';
import vk from '../../../public/vk.svg';
import youtube from '../../../public/youtube.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <div className="footer__icon">
          <img src={youtube} alt="youtube" />
        </div>
        <div className="footer__icon">
          <img src={vk} alt="vk" />
        </div>
        <div className="footer__icon">
          <img src={instagram} alt="instagram" />
        </div>
        <div className="footer__icon">
          <img src={info} alt="info" />
        </div>
      </div>
      <p className="footer__copyright">Copyright 2021. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;

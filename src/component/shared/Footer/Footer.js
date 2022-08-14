import React from 'react';
import './Footer.scss';
import info from '../../../public/info.svg';
import instagram from '../../../public/instagram.svg';
import vk from '../../../public/vk.svg';
import youtube from '../../../public/youtube.svg';
import linktree from '../../../public/linktree.svg';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a
          className="footer__icon"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="youtube" />
        </a>
        {/* <div className="footer__icon">
          <img src={vk} alt="vk" />
        </div> */}
        <a
          className="footer__icon"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <p
          className="footer__icon"
          href="https://www.youtube.com/"
          target="_blank"
          onClick={() => {
            props.setOpenPopup((value) => !value);
          }}
        >
          <img src={info} alt="info" />
        </p>
        <a
          className="footer__icon footer__icon--end footer__icon--linktree"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linktree} alt="linktree" />
        </a>
      </div>
      <p className="footer__copyright">Copyright 2021. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;

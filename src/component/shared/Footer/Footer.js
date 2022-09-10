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
        <p className="footer__icon">
          <a
            href="https://www.youtube.com/channel/UCBbxmuOJ4jIqs-OBGQYJwiw"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="youtube" />
          </a>
        </p>
        {/* <div className="footer__icon">
          <img src={vk} alt="vk" />
        </div> */}
        <p className="footer__icon">
          <a
            href="https://www.instagram.com/sergeyshmidtmusic/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />
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
      <p className="footer__copyright">Copyright 2022. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;

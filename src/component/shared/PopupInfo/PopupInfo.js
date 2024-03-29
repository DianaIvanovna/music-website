import React from 'react';
import './PopupInfo.scss';
import { NavLink } from 'react-router-dom';

const PopupInfo = (props) => {
  return (
    <div
      className="popup-info__back"
      onClick={(event) => {
        if (event.target.className === 'popup-info__back') {
          props.setOpenPopup(false);
        }
      }}
    >
      <div className="popup-info">
        <div className="popup-info__field">
          <p className="popup-info__name">WEBSITE CONTENT, photography </p>
          <a
            className="popup-info__value"
            href="https://sergeyshmidt.com/"
            target="_blank"
            rel="noreferrer"
          >
            Sergey Shmidt
          </a>
        </div>
        <div className="popup-info__field">
          <p className="popup-info__name"> UI / UX Design </p>
          <a
            className="popup-info__value"
            href="https://www.behance.net/stacy-kondratenko/"
            target="_blank"
            rel="noreferrer"
          >
            Anastasiia Kondratenko
          </a>
        </div>
        <div className="popup-info__field">
          <p className="popup-info__name"> Web development </p>
          <a
            className="popup-info__value"
            href="https://vk.com/garbyz_diana"
            target="_blank"
            rel="noreferrer"
          >
            Diana Garbuz
          </a>
        </div>
        <div className="popup-info__field">
          <p className="popup-info__name"> Photo editing </p>
          <a
            className="popup-info__value"
            href="https://vk.com/gashovalova"
            target="_blank"
            rel="noreferrer"
          >
            Ksenia Gashova
          </a>
        </div>

        <div
          className="popup-info__back-button"
          onClick={() => {
            props.setOpenPopup(false);
          }}
        >
          <svg
            width="48"
            height="18"
            viewBox="0 0 48 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.49388 0.435578C8.18215 0.162816 7.70833 0.194404 7.43557 0.506132L0.43557 8.50613C0.188148 8.7889 0.188148 9.21112 0.43557 9.49389L7.43557 17.4939C7.70833 17.8056 8.18215 17.8372 8.49388 17.5644C8.8056 17.2917 8.83719 16.8179 8.56443 16.5061L2.65282 9.75001H47C47.4142 9.75001 47.75 9.41422 47.75 9.00001C47.75 8.5858 47.4142 8.25001 47 8.25001H2.65282L8.56443 1.49389C8.83719 1.18216 8.8056 0.708339 8.49388 0.435578Z"
              fill="#DA4F4F"
            />
          </svg>
          <span>Back </span>
        </div>
        <div className="popup-info__field--attention">
          <p className="popup-info__name ">This website is a private website</p>
          <NavLink
            to="/privacy-policy"
            className="popup-info__link"
            onClick={() => {
              props.setOpenPopup(false);
            }}
          >
            Privacy Policy
          </NavLink>
        </div>

        <div className="popup-info__elipse-1"></div>
        <div className="popup-info__elipse-2"></div>
      </div>
    </div>
  );
};

export default PopupInfo;

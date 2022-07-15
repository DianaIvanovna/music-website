import React from 'react';
import './StubPage.scss';
import guitar from '../../public/guitar.png';

const StubPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__title">Web site available soon...</h1>
      <div className="error-page__img-container">
        <img src={guitar} alt="guitar" className="error-page__img" />
      </div>
      {/* <div className="error-page__text-container">
        <h1 className="error-page__header">404</h1>
        <p className="error-page__header">Oooops! Something went wrong</p>
        <Link
          to="mailto:contact@sergeyshmidt.com"
          onClick={(e) => {
            window.location.href = 'mailto:contact@sergeyshmidt.com';
            e.preventDefault();
          }}
          className="error-page__link"
        >
          contact@sergeyshmidt.com
        </Link>


        <p className="error-page__text">
          If you want to contact me, please send an email on:
        </p>
        
      </div>

      <div className="error-page__img-container">
        <img
          src={photoContacts}
          alt="sergey shmidt"
          className="error-page__img"
        />
      </div>
      <div className="error-page__blur"></div>
      <div className="error-page__linear"></div> */}

      <div className="contacts-page__linear"></div>
    </div>
  );
};

export default StubPage;

import React from 'react';
import './StubPage.scss';
import guitar from '../../public/guitar.png';

const StubPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__title">Website available soon...</h1>
      <div className="error-page__img-container">
        <img src={guitar} alt="guitar" className="error-page__img" />
      </div>
      <div className="contacts-page__linear"></div>
    </div>
  );
};

export default StubPage;

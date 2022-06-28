import React from 'react';
import './ContactsPage.scss';
import { Link } from 'react-router-dom';
import photoContacts from '../../public/photoContacts.png';

const ContactsPage = () => {
  return (
    <div className="contacts-page">
      <div className="contacts-page__text-container">
        <h1 className="contacts-page__header">Get in touch</h1>
        <p className="contacts-page__text">
          If you want to contact me, please send an email on:
        </p>
        <Link
          to="mailto:contact@sergeyshmidt.com"
          onClick={(e) => {
            window.location.href = 'mailto:contact@sergeyshmidt.com';
            e.preventDefault();
          }}
          className="contacts-page__link"
        >
          contact@sergeyshmidt.com
        </Link>
      </div>

      <div className="contacts-page__img-container">
        <img
          src={photoContacts}
          alt="sergey shmidt"
          className="contacts-page__img"
        />
      </div>
      <div className="contacts-page__blur"></div>
      <div className="contacts-page__linear"></div>
    </div>
  );
};

export default ContactsPage;

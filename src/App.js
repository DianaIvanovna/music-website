// import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './component/AboutPage/AboutPage';
import SongsPage from './component/SongsPage/SongsPage';
import PoemsPage from './component/PoemsPage/PoemsPage';
import ContactsPage from './component/ContactsPage/ContactsPage';
import Header from './component/shared/Header/Header';
import Footer from './component/shared/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />

      <React.Fragment>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/songs" element={<SongsPage />} />
          <Route path="/poems" element={<PoemsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route
            path="/test"
            element={
              <div>
                <div className="test-container">
                  <div className="poems-page__shadow-base"></div>
                  <div className="poems-page__shadow-up"></div>
                  <p className="poems-page__poem-text">
                    Никто, ничто, никак, ничем
                    <br />
                    Не вдохновляли меня прежде.
                    <br />
                    Но Вы, право, особенны,
                    <br />
                    Красивы – без или в одежде.
                    <br />
                    <br />
                    Ведь рядом с Вами в тот же миг
                    <br />
                    Я обретаю вдохновенье.
                    <br />
                    Не скрою я, что у меня
                    <br />
                    Есть к Вам огромное влеченье.
                    <br />
                    <br />
                    Я к Вам, ей-богу, буду впредь
                    <br />
                    Всегда, всю жизнь с огромным сердцем.
                    <br />
                    Я рад бы был, если бы Вы
                    <br />
                    Пошли б со мной, с шикарным перцем.
                    <br />
                    <br />
                    Для Вас готов на много я -<br />
                    Вы просветите хоть рентгеном.
                    <br />
                    Я честный парень, без гнилья,
                    <br />
                    С большой душой, с не малым …<br />
                    <br />
                    17/01/2021
                  </p>
                  <div className="poems-page__shadow-down"></div>
                </div>
              </div>
            }
          />

          <Route element={<AboutPage />} />
        </Routes>
      </React.Fragment>

      <Footer />
    </div>
  );
}

export default App;

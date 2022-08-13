// import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './component/AboutPage/AboutPage';
import SongsPage from './component/SongsPage/SongsPage';
import PoemsPage from './component/PoemsPage/PoemsPage';
import ContactsPage from './component/ContactsPage/ContactsPage';
import StubPage from './component/StubPage/StubPage';
import Header from './component/shared/Header/Header';
import Footer from './component/shared/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />

      {/* <StubPage /> */}

      <React.Fragment>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/songs" element={<SongsPage />} />
          <Route path="/poems" element={<PoemsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />

          <Route element={<AboutPage />} />
        </Routes>
      </React.Fragment>

      <Footer />
    </div>
  );
}

export default App;

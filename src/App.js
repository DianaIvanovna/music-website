// import logo from './logo.svg';
import './App.scss';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './component/AboutPage/AboutPage2';
import SongsPage from './component/SongsPage/SongsPage';
import PoemsPage from './component/PoemsPage/PoemsPage';
import PrivacyPolicy from './component/PrivacyPolicy/PrivacyPolicy';
import ContactsPage from './component/ContactsPage/ContactsPage';
import StubPage from './component/StubPage/StubPage';
import Header from './component/shared/Header/Header';
import Footer from './component/shared/Footer/Footer';
import PopupInfo from './component/shared/PopupInfo/PopupInfo';

function App() {
  const [openPopup, setOpenPopup] = useState(false);

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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="*" element={<AboutPage />} />
        </Routes>
      </React.Fragment>

      {openPopup ? <PopupInfo setOpenPopup={setOpenPopup} /> : null}

      <Footer setOpenPopup={setOpenPopup} />
    </div>
  );
}

export default App;

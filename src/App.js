// import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './component/AboutPage/AboutPage';
import SongsPage from './component/SongsPage/SongPage';
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

          <Route element={<AboutPage />} />
        </Routes>
      </React.Fragment>

      <Footer />
    </div>
  );
}

export default App;

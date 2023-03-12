import React, { useEffect, useMemo, useRef, useState } from 'react';
import './SongsPage.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import AudioContainer from './modules/AudioContainer';
import { Transition } from 'react-transition-group';
import audoiIcon from '../../public/audio-info.svg';
import audoiIcon2 from '../../public/audio-info-2.svg';
import audoiIcon3 from '../../public/audio-info-3.svg';
import wavesBackground from '../../public/wavesBackground.png';

import { songsArr } from './data';

const SongsPage = () => {
  const [activeSong, setActiveSong] = useState(0);
  const [animMenu, setAnimMenu] = useState(true);
  const [animSong, setAnimSong] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const app = document.querySelector('.app');
    if (app) {
      app.classList.add('app--songs');
    }

    const query = new URLSearchParams(location.search);
    const id = query.get('id');

    // if (id && songsArr[id] !== undefined && !songsArr[id]?.disabled) {
    //   setAnimMenu(false);
    //   setAnimSong(true);
    //   setActiveSong(id);
    // }
    // setShowPage(true);

    if (id && songsArr[id] !== undefined && !songsArr[id]?.disabled) {
      setAnimMenu(false);
      setAnimSong(true);
      setActiveSong(id);
    } else {
      setAnimMenu(true);
      setAnimSong(false);
    }
    setShowPage(true);

    return () => {
      app.classList.remove('app--songs');
    };
  }, [location]);

  if (!showPage) {
    return null;
  }

  return (
    <div className="songs-page">
      {/* DESKTOP */}

      <ul className="songs-page__list">
        {songsArr.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setActiveSong(index);
            }}
            className={`songs-page__li ${
              activeSong === index ? 'songs-page__li--active' : ''
            } ${item.disabled ? 'songs-page__li--disabled' : ''}`}
          >
            <p className="songs-page__song-name">{item.title}</p>
            <time className="songs-page__song-date">
              {item.releaseDateText}
            </time>
          </li>
        ))}
      </ul>

      <div className="songs-page__container">
        <AudioContainer
          audioProp={songsArr[activeSong].audio}
          song={songsArr[activeSong]}
          defaultTime={songsArr[activeSong].defaultTime}
          parametersProp={songsArr[activeSong].parameters}
          changeAudio={(index) => {
            setActiveSong(index);
          }}
          songsLength={songsArr.filter((item) => !item.disabled).length}
          activeSong={activeSong}
        />
        <div className="songs-page__audio-info">
          <div className="songs-page__audio-info-container">
            <div className="songs-page__audio-field">
              <p className="songs-page__audio-title">
                Lyrics, Music, Arrangement:
              </p>
              <p className="songs-page__audio-value">
                {songsArr[activeSong].Lyrics}
              </p>
            </div>
            <div className="songs-page__audio-field">
              <p className="songs-page__audio-title">Recording Performance:</p>
              <p
                className="songs-page__audio-value"
                dangerouslySetInnerHTML={{
                  __html: songsArr[activeSong].recordingPerformance,
                }}
              ></p>
            </div>
            <div className="songs-page__audio-field">
              <p className="songs-page__audio-title">
                Recording, Mixing, Mastering:
              </p>
              <p
                className="songs-page__audio-value"
                dangerouslySetInnerHTML={{
                  __html: songsArr[activeSong].Recording,
                }}
              ></p>
            </div>
            <div className="songs-page__audio-field">
              <p className="songs-page__audio-title">Release Date:</p>
              <p className="songs-page__audio-value">
                {songsArr[activeSong].releaseDate}
              </p>
            </div>
          </div>

          <div className="songs-page__icon-container">
            {songsArr[activeSong].spotify ? (
              <a
                href={songsArr[activeSong].spotify}
                className="songs-page__icon"
                alt="Spotify"
                target="_blank"
                rel="noreferrer"
              >
                <img src={audoiIcon} alt="Spotify" />
              </a>
            ) : null}

            {songsArr[activeSong].appleMusic ? (
              <a
                href={songsArr[activeSong].appleMusic}
                className="songs-page__icon"
                alt="appleMusic"
                target="_blank"
                rel="noreferrer"
              >
                <img src={audoiIcon2} alt="appleMusic" />
              </a>
            ) : null}
            {songsArr[activeSong].youtube ? (
              <a
                href={songsArr[activeSong].youtube}
                className="songs-page__icon"
                alt="youtube"
                target="_blank"
                rel="noreferrer"
              >
                <img src={audoiIcon3} alt="youtube" />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      {/* DESKTOP */}

      {/* MOBILE */}

      <Transition
        in={animMenu}
        timeout={1000}
        //  moutOnEnter
        unmountOnExit
      >
        {(state) => (
          <div className={`songs-page__menu songs-page__menu--${state}`}>
            <h1 className="songs-page__title">Songs</h1>
            <ul className="songs-page__list songs-page__list--mobile">
              {songsArr.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setActiveSong(index + 1);
                    setAnimMenu(false);
                    //setAnimSong(true);
                    window.scroll({
                      left: 0,
                      top: 0,
                      behavior: 'smooth',
                    });
                    setTimeout(() => {
                      // window.location.href = `/songs?id=${index}`;
                      navigate(
                        `/songs?songs=${songsArr[index].url}&id=${index}`
                      );
                    }, 300);

                    // return navigate(`/songs?id=${index}`);
                  }}
                  className={`songs-page__li ${
                    index === activeSong - 1 ? 'songs-page__li--active' : ''
                  } ${item.disabled ? 'songs-page__li--disabled' : ''}`}
                >
                  <p className="songs-page__song-name">{item.title}</p>
                  <time className="songs-page__song-date">
                    {item.releaseDateText}
                  </time>
                </li>
              ))}
            </ul>

            <img
              src={wavesBackground}
              alt="waves background"
              className="songs-page__waves-background"
            />
          </div>
        )}
      </Transition>

      <Transition in={animSong} timeout={1000}>
        {(state) => (
          <>
            {animSong ? (
              <div
                className={`songs-page__audio-container songs-page__audio-container--${state}`}
                // ref={refPoem}
              >
                <h2 className="songs-page__name-mobile">
                  {songsArr[activeSong].title}
                </h2>

                <AudioContainer
                  audioProp={songsArr[activeSong].audio}
                  parametersProp={songsArr[activeSong].parameters}
                  changeAudio={(index) => {
                    setActiveSong(index);
                  }}
                  defaultTime={songsArr[activeSong].defaultTime}
                  songsLength={songsArr.filter((item) => !item.disabled).length}
                  activeSong={activeSong}
                />

                <div className="songs-page__audio-info-container">
                  <div className="songs-page__audio-field">
                    <p className="songs-page__audio-title">
                      Lyrics, Music, Arrangement:
                    </p>
                    <p className="songs-page__audio-value">
                      {songsArr[activeSong].Lyrics}
                    </p>
                  </div>
                  <div className="songs-page__audio-field">
                    <p className="songs-page__audio-title">
                      Recording Performance:
                    </p>
                    <p
                      className="songs-page__audio-value"
                      dangerouslySetInnerHTML={{
                        __html: songsArr[activeSong].recordingPerformance,
                      }}
                    ></p>
                  </div>
                  <div className="songs-page__audio-field">
                    <p className="songs-page__audio-title">
                      Recording, Mixing, Mastering:
                    </p>
                    <p
                      className="songs-page__audio-value"
                      dangerouslySetInnerHTML={{
                        __html: songsArr[activeSong].Recording,
                      }}
                    ></p>
                  </div>
                  <div className="songs-page__audio-field">
                    <p className="songs-page__audio-title">Release date:</p>
                    <p className="songs-page__audio-value">
                      {songsArr[activeSong].releaseDate}
                    </p>
                  </div>
                </div>

                <div className="songs-page__icon-container">
                  {songsArr[activeSong].spotify ? (
                    <a
                      href={songsArr[activeSong].spotify}
                      alt="Spotify"
                      className="songs-page__icon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={audoiIcon} alt="Spotify" />
                    </a>
                  ) : null}
                  {songsArr[activeSong].appleMusic ? (
                    <a
                      href={songsArr[activeSong].appleMusic}
                      alt="appleMusic"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={audoiIcon2} alt="appleMusic" />
                    </a>
                  ) : null}

                  {songsArr[activeSong].youtube ? (
                    <a
                      href={songsArr[activeSong].youtube}
                      alt="youtube"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={audoiIcon3} alt="youtube" />
                    </a>
                  ) : null}
                </div>
              </div>
            ) : null}
          </>
        )}
      </Transition>

      {/* END MOBILE */}

      <div className="songs-page__shadow-up"></div>
      <div className="songs-page__shadow-down"></div>
    </div>
  );
};

export default SongsPage;

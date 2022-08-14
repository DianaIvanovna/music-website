// анализирует звук и создает плеер
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './SongsPage.scss';
import AudioContainer from './modules/AudioContainer';
import { Transition } from 'react-transition-group';
import audoiIcon from '../../public/audio-info.svg';
import audoiIcon2 from '../../public/audio-info-2.svg';
import audoiIcon3 from '../../public/audio-info-3.svg';
import wavesBackground from '../../public/wavesBackground.png';

import audio1 from '../../public/audio1.mp3';
import audio2 from '../../public/audio2.mp3';
import audio3 from '../../public/audio3.mp3';
import audio4 from '../../public/audio4.mp3';

const songsArr = [
  {
    title: 'ПО ГОРОДУ',
    audio: audio1,
    Lyrics: 'Sergey Shmidt',
    recordingPerformance:
      'Vocals, guitars, bass – Sergey Shmidt <br/> Drums – Bastian Arac',
    Recording: 'scb-music',
    releaseDate: '01/11/2021',
    spotify: 'https://open.spotify.com/album/3aYe9WeszUGbFqw3bo7Cx5',
    appleMusic: 'https://music.apple.com/us/album/по-городу-single/1624085601',
    youtube:
      'https://music.youtube.com/playlist?list=OLAK5uy_lfJ1EusWQOwm17DbfSyxgzZ2kDi-44F68',
  },
  {
    title: 'FATE',
    audio: audio2,
    Lyrics: '2.Sergey Shmidt',
    recordingPerformance:
      '2.Vocals, guitars, bass – Sergey Shmidt Drums – Bastian Arac',
    Recording: '2.scb-music',
    releaseDate: '01/07/2022',
    spotify: 'https://open.spotify.com/album/3aYe9WeszUGbFqw3bo7Cx5',
    appleMusic: 'https://music.apple.com/us/album/по-городу-single/1624085601',
    youtube:
      'https://music.youtube.com/playlist?list=OLAK5uy_lfJ1EusWQOwm17DbfSyxgzZ2kDi-44F68',
  },
  {
    title: 'В Am я тебе, брат',
    audio: audio3,
    Lyrics: '3.Sergey Shmidt',
    recordingPerformance:
      '3.Vocals, guitars, bass – Sergey Shmidt Drums – Bastian Arac',
    Recording: '3.scb-music',
    releaseDate: '01/10/2022',
    spotify: 'https://open.spotify.com/album/3aYe9WeszUGbFqw3bo7Cx5',
    appleMusic: 'https://music.apple.com/us/album/по-городу-single/1624085601',
    youtube:
      'https://music.youtube.com/playlist?list=OLAK5uy_lfJ1EusWQOwm17DbfSyxgzZ2kDi-44F68',
  },
  {
    title: 'ПЕСНЯ №4',
    audio: audio4,
    Lyrics: '4.Sergey Shmidt',
    recordingPerformance:
      '4.Vocals, guitars, bass – Sergey Shmidt Drums – Bastian Arac',
    Recording: '4.scb-music',
    releaseDate: '01/11/2021',
    spotify: 'https://open.spotify.com/album/3aYe9WeszUGbFqw3bo7Cx5',
    appleMusic: 'https://music.apple.com/us/album/по-городу-single/1624085601',
    youtube:
      'https://music.youtube.com/playlist?list=OLAK5uy_lfJ1EusWQOwm17DbfSyxgzZ2kDi-44F68',
  },
  {
    title: 'ПЕСНЯ №5',
    audio: audio1,
    Lyrics: '5.Sergey Shmidt',
    recordingPerformance:
      '5.Vocals, guitars, bass – Sergey Shmidt Drums – Bastian Arac',
    Recording: '5.scb-music',
    releaseDate: '01/11/2021',
    spotify: 'https://open.spotify.com/album/3aYe9WeszUGbFqw3bo7Cx5',
    appleMusic: 'https://music.apple.com/us/album/по-городу-single/1624085601',
    youtube:
      'https://music.youtube.com/playlist?list=OLAK5uy_lfJ1EusWQOwm17DbfSyxgzZ2kDi-44F68',
  },
  {
    title: 'ПЕСНЯ №6',
    audio: audio2,
    Lyrics: '6.Sergey Shmidt',
    recordingPerformance:
      '6.Vocals, guitars, bass – Sergey Shmidt Drums – Bastian Arac',
    Recording: '6.scb-music',
    releaseDate: '01/11/2021',
    spotify: 'https://open.spotify.com/album/3aYe9WeszUGbFqw3bo7Cx5',
    appleMusic: 'https://music.apple.com/us/album/по-городу-single/1624085601',
    youtube:
      'https://music.youtube.com/playlist?list=OLAK5uy_lfJ1EusWQOwm17DbfSyxgzZ2kDi-44F68',
  },
];

const SongsPage = () => {
  const [activeSong, setActiveSong] = useState(0);
  const [animMenu, setAnimMenu] = useState(true);
  const [animSong, setAnimSong] = useState(false);

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
            } `}
          >
            <p className="songs-page__song-name">{item.title}</p>
            <time className="songs-page__song-date">{item.releaseDate}</time>
          </li>
        ))}
      </ul>

      <div className="songs-page__container">
        <AudioContainer
          audioProp={songsArr[activeSong].audio}
          changeAudio={(index) => {
            console.log('changeAudio', index);
            setActiveSong(index);
          }}
          songsLength={songsArr.length}
          activeSong={activeSong}
        />
        <div className="songs-page__audio-info">
          <div className="songs-page__audio-info-container">
            <div className="songs-page__audio-field-container">
              <p className="songs-page__audio-field">
                Lyrics, music, arrangement:
              </p>
              <p className="songs-page__audio-field">Recording performance:</p>
              <br />
              <p className="songs-page__audio-field">
                Recording, mixing, mastering:
              </p>
              <p className="songs-page__audio-field">Release date:</p>
            </div>
            <div>
              <p className="songs-page__audio-value">
                {songsArr[activeSong].Lyrics}
              </p>
              <p
                className="songs-page__audio-value"
                dangerouslySetInnerHTML={{
                  __html: songsArr[activeSong].recordingPerformance,
                }}
              ></p>
              <br />
              <p className="songs-page__audio-value">
                {songsArr[activeSong].Recording}
              </p>
              <p className="songs-page__audio-value">
                {songsArr[activeSong].releaseDate}
              </p>
            </div>
          </div>

          <div className="songs-page__icon-container">
            <a
              href={songsArr[activeSong].spotify}
              alt="Spotify"
              target="_blank"
              rel="noreferrer"
            >
              <img src={audoiIcon} alt="Spotify" />
            </a>
            <a
              href={songsArr[activeSong].appleMusic}
              alt="Spotify"
              target="_blank"
              rel="noreferrer"
            >
              <img src={audoiIcon2} alt="appleMusic" />
            </a>
            <a
              href={songsArr[activeSong].youtube}
              alt="youtube"
              target="_blank"
              rel="noreferrer"
            >
              <img src={audoiIcon3} alt="youtube" />
            </a>
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
                    setActiveSong(index);
                    setAnimMenu(false);
                    setAnimSong(true);
                    window.scroll({
                      left: 0,
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}
                  className={`songs-page__li ${
                    index === activeSong - 1 ? 'songs-page__li--active' : ''
                  }`}
                >
                  <p className="songs-page__song-name">{item.title}</p>
                  <time className="songs-page__song-date">
                    {item.releaseDate}
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
                  changeAudio={(index) => {
                    setActiveSong(index);
                  }}
                  songsLength={songsArr.length}
                  activeSong={activeSong}
                />

                <div className="songs-page__audio-info-container">
                  <p className="songs-page__audio-field">
                    Lyrics, music, arrangement:
                    <span className="songs-page__audio-value">
                      {songsArr[activeSong].Lyrics}
                    </span>
                  </p>

                  <p className="songs-page__audio-field">
                    Recording performance:{' '}
                    <span
                      className="songs-page__audio-value"
                      dangerouslySetInnerHTML={{
                        __html: songsArr[activeSong].recordingPerformance,
                      }}
                    ></span>{' '}
                  </p>

                  <p className="songs-page__audio-field">
                    Recording, mixing, mastering:
                    <span className="songs-page__audio-value">
                      {songsArr[activeSong].Recording}
                    </span>
                  </p>
                  <p className="songs-page__audio-field">
                    Release date:{' '}
                    <span className="songs-page__audio-value">
                      {songsArr[activeSong].releaseDate}
                    </span>
                  </p>
                </div>

                <div className="songs-page__icon-container">
                  <a
                    href={songsArr[activeSong].spotify}
                    alt="Spotify"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={audoiIcon} alt="Spotify" />
                  </a>
                  <a
                    href={songsArr[activeSong].appleMusic}
                    alt="Spotify"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={audoiIcon2} alt="appleMusic" />
                  </a>
                  <a
                    href={songsArr[activeSong].youtube}
                    alt="youtube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={audoiIcon3} alt="youtube" />
                  </a>
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

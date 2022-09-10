// анализирует звук и создает плеер
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './SongsPage.scss';
import AudioContainer from './modules/AudioContainer';
import { Transition } from 'react-transition-group';
import audoiIcon from '../../public/audio-info.svg';
import audoiIcon2 from '../../public/audio-info-2.svg';
import audoiIcon3 from '../../public/audio-info-3.svg';
import wavesBackground from '../../public/wavesBackground.png';
import { useLocation, useParams } from 'react-router-dom';

import audio1 from '../../public/audio1.wav';

/*
  ЗАБЛОЧЕННЫЕ ПЕСНИ ДОЛЖНЫ БЫТЬ В КОНЦЕ СПИСКА
*/

const songsArr = [
  {
    title: 'ПО ГОРОДУ',
    audio: audio1,
    Lyrics: 'Sergey Shmidt',
    recordingPerformance: `Vocals, guitars, bass – Sergey Shmidt<br/>
      Drums – <a
      class="songs-page__link"
      href="https://www.instagram.com/drumded/"
      alt="Alexander Goubko"
      target="_blank"
      rel="noreferrer"
    >
    Alexander Goubko 
    </a>`,
    Recording: `Steffen Burkhardt (<a
      class="songs-page__link"
      href="https://www.scb-music.de/"
      alt="Alexander Goubko"
      target="_blank"
      rel="noreferrer"
    >
    scb-music
    </a>)`,
    releaseDateText: 'MAY, 2022',
    releaseDate: '2022/05/13',
    spotify: 'https://open.spotify.com/album/3aYe9WeszUGbFqw3bo7Cx5',
    appleMusic: 'https://music.apple.com/us/album/по-городу-single/1624085601',
    youtube:
      'https://music.youtube.com/playlist?list=OLAK5uy_lfJ1EusWQOwm17DbfSyxgzZ2kDi-44F68',
    disabled: false,
    parameters: [
      //40 20 20
      {
        amplitude: 55,
        amplitudeMax: 75,
        amplitudeMin: 50,
        amplitudeIncrease: true,
        frequency: 0.95,
        offset: 150,
      },
      {
        amplitude: -40,
        amplitudeMax: -30,
        amplitudeMin: -50,
        amplitudeIncrease: true,
        frequency: 1.3,
        offset: -50,
      },
      {
        amplitude: 40,
        amplitudeMax: 42,
        amplitudeMin: 20,
        amplitudeIncrease: true,
        frequency: 1,
        offset: 0,
      },
    ],
  },
  {
    title: 'FATE',
    audio: audio1,
    Lyrics: '2.Sergey Shmidt',
    recordingPerformance:
      '2.Vocals, guitars, bass – Sergey Shmidt Drums – Bastian Arac',
    Recording: '2.scb-music',
    releaseDateText: 'SONG IN PROGRESS',
    releaseDate: '01/03/2022',
    spotify: 'https://open.spotify.com/album/3aYe9WeszUGbFqw3bo7Cx5',
    appleMusic: 'https://music.apple.com/us/album/по-городу-single/1624085601',
    youtube:
      'https://music.youtube.com/playlist?list=OLAK5uy_lfJ1EusWQOwm17DbfSyxgzZ2kDi-44F68',
    disabled: true,
    parameters: [
      //40 20 20
      {
        amplitude: 40,
        amplitudeMax: 60,
        amplitudeMin: 35,
        amplitudeIncrease: true,
        frequency: 0.95,
        offset: 40,
      },
      {
        amplitude: -30,
        amplitudeMax: -25,
        amplitudeMin: -50,
        amplitudeIncrease: true,
        frequency: 1.3,
        offset: -150,
      },
      {
        amplitude: -40,
        amplitudeMax: -30,
        amplitudeMin: -50,
        amplitudeIncrease: true,
        frequency: 1,
        offset: 100,
      },
    ],
  },
  {
    title: 'В Am Я ТЕБЕ, БРАТ',
    audio: audio1,
    Lyrics: '3.Sergey Shmidt',
    recordingPerformance:
      '3.Vocals, guitars, bass – Sergey Shmidt Drums – Bastian Arac',
    Recording: '3.scb-music',
    releaseDateText: 'SONG IN PROGRESS',
    releaseDate: '01/03/2022',
    spotify: 'https://open.spotify.com/album/3aYe9WeszUGbFqw3bo7Cx5',
    appleMusic: 'https://music.apple.com/us/album/по-городу-single/1624085601',
    youtube:
      'https://music.youtube.com/playlist?list=OLAK5uy_lfJ1EusWQOwm17DbfSyxgzZ2kDi-44F68',
    disabled: true,
  },
];

const SongsPage = () => {
  const [activeSong, setActiveSong] = useState(0);
  const [animMenu, setAnimMenu] = useState(true);
  const [animSong, setAnimSong] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const id = query.get('id');
    if (id) {
      setActiveSong(id);
    }
  }, []);

  return (
    <div className="songs-page">
      {/* DESKTOP */}

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
                  songsLength={songsArr.filter((item) => !item.disabled).length}
                  activeSong={activeSong}
                />

                <div className="songs-page__audio-info-container">
                  <div className="songs-page__audio-field">
                    <p className="songs-page__audio-title">
                      Lyrics, music, arrangement:
                    </p>
                    <p className="songs-page__audio-value">
                      {songsArr[activeSong].Lyrics}
                    </p>
                  </div>
                  <div className="songs-page__audio-field">
                    <p className="songs-page__audio-title">
                      Recording performance:
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
                      Recording, mixing, mastering:
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

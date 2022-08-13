// анализирует звук и создает плеер
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './SongsPage.scss';
import AudioContainer from './modules/AudioContainer';
import audoiIcon from '../../public/audio-info.svg';
import audoiIcon2 from '../../public/audio-info-2.svg';
import audoiIcon3 from '../../public/audio-info-3.svg';

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
  },
  {
    title: 'FATE',
    audio: audio2,
    Lyrics: '2.Sergey Shmidt',
    recordingPerformance:
      '2.Vocals, guitars, bass – Sergey Shmidt Drums – Bastian Arac',
    Recording: '2.scb-music',
    releaseDate: '01/07/2022',
  },
  {
    title: 'В Am я тебе, брат',
    audio: audio3,
    Lyrics: '3.Sergey Shmidt',
    recordingPerformance:
      '3.Vocals, guitars, bass – Sergey Shmidt Drums – Bastian Arac',
    Recording: '3.scb-music',
    releaseDate: '01/10/2022',
  },
  {
    title: 'ПЕСНЯ №4',
    audio: audio4,
    Lyrics: '4.Sergey Shmidt',
    recordingPerformance:
      '4.Vocals, guitars, bass – Sergey Shmidt Drums – Bastian Arac',
    Recording: '4.scb-music',
    releaseDate: '01/11/2021',
  },
  {
    title: 'ПЕСНЯ №5',
    audio: audio1,
    Lyrics: '5.Sergey Shmidt',
    recordingPerformance:
      '5.Vocals, guitars, bass – Sergey Shmidt Drums – Bastian Arac',
    Recording: '5.scb-music',
    releaseDate: '01/11/2021',
  },
  {
    title: 'ПЕСНЯ №6',
    audio: audio2,
    Lyrics: '6.Sergey Shmidt',
    recordingPerformance:
      '6.Vocals, guitars, bass – Sergey Shmidt Drums – Bastian Arac',
    Recording: '6.scb-music',
    releaseDate: '01/11/2021',
  },
];

const SongsPage = () => {
  const [activeSong, setActiveSong] = useState(0);

  return (
    <div className="songs-page">
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
            <img src={audoiIcon} alt="" />
            <img src={audoiIcon2} alt="" />
            <img src={audoiIcon3} alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default SongsPage;

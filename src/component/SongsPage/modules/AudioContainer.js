import React, { useEffect, useRef, useState } from 'react';
import './AudioContainer.scss';
import pauseIcon from '../../../public/pause.svg';
import playIcon from '../../../public/play.svg';
import prevAudio from '../../../public/prevAudio.svg';
import nextAudio from '../../../public/nextAudio.svg';
import iconSound from '../../../public/iconSound.svg';
import CanvasComponent from './CanvasComponent';

const AudioContainer = ({
  audioProp,
  activeSong,
  parametersProp,
  songsLength,
  changeAudio,
  defaultTime,
  songsArr,
  ...props
}) => {
  // audioProp={songsArr[activeSong].audio}
  // changeAudio={(index) => {
  //   setActiveSong(index);
  // }}
  // songsLength={songsArr.length}
  // activeSong={activeSong}

  const audioRef = useRef(null);
  const [audio, setAudio] = useState(null);
  const [playButton, setPlayButton] = useState(true);
  const [audioTime, setAudioTime] = useState(0);
  const [audioWidthTrack, setAudioWidthTrack] = useState('0%');
  const [audioLength, setAudioLength] = useState(defaultTime);
  const [audioInterval, setAaudioInterval] = useState(null);
  const [activeVolume, setActiveVolume] = useState(false);
  const [animCanvas, setAnimCanvas] = useState(false);
  const [switchFlag, setSwitchFlag] = useState(false);

  useEffect(() => {
    //логика остановки и очистки прошлого трека

    if (audioRef?.current && audio !== audioProp && switchFlag) {
      setAudio(audioProp);
      audioRef.current.src = audioProp;
      audioRef.current.currentTime = 0;

      // setAudioLength(Math.round(audioRef.curren.duration));
      // clearInterval(audioInterval);
      // setAaudioInterval(null);
      setSwitchFlag(false);
      setAnimCanvas(true);
      playHandler();
    } else if (audioRef?.current && audio !== audioProp) {
      // clearInterval(audioInterval);
      // setAaudioInterval(null);
      setAnimCanvas(false);
      setPlayButton(true);
      setAudio(audioProp);
      audioRef.current.src = audioProp;
      audioRef.current.currentTime = 0;
      setAudioTime(0);
      setAudioWidthTrack('0%');
      console.log('defaultTime', defaultTime, activeSong, songsArr);
      setAudioLength(defaultTime);
    }
  }, [audioProp]);

  useEffect(() => {
    return () => {
      pauseHandler();
    };
  }, []);

  const setDurationAudio = () => {
    if (audioRef?.current.duration) {
      setAudioLength(Math.round(audioRef.current.duration));
    } else {
      setTimeout(() => {
        setDurationAudio();
      }, 10);
    }
  };

  const playHandler = () => {
    const audio = audioRef?.current;

    if (audio) {
      audio.play();
      let audioTime = 0;

      setDurationAudio();
      const audioInterval2 = setInterval(() => {
        // Получаем значение на какой секунде песня
        audioTime = Math.round(audio.currentTime);

        setAudioTime(audioTime);
        setAudioWidthTrack((audioTime * 100) / audio.duration + '%');
      }, 10);
      setAaudioInterval(audioInterval2);
    }
  };

  useEffect(() => {
    if (audioTime === audioLength) {
      setAnimCanvas(false);
      pauseHandler();
    }
  }, [audioTime]);

  const pauseHandler = () => {
    const audio = audioRef?.current;
    if (audio) {
      audio.pause();
      clearInterval(audioInterval);
      setAaudioInterval(null);
    }
  };

  const changeVolume = (event) => {
    let target = event.target;

    const min = target.min;
    const max = target.max;
    const val = target.value;
    target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
    if (audioRef?.current) {
      audioRef.current.volume = target.value;
    }
  };

  const formatTime = (time) => {
    let second = time % 60;
    second = second < 10 ? `0${second}` : second;
    let minutes = Math.trunc(time / 60);
    return ` ${minutes}:${second} `;
  };

  const switchTreck = (flag = 'next') => {
    setSwitchFlag(true);
    if (flag === 'next') {
      changeAudio(activeSong + 1);
    } else {
      changeAudio(activeSong - 1);
    }
  };

  return (
    <div className="audio-container">
      <audio id="audio" ref={audioRef}></audio>
      <CanvasComponent
        animCanvas={animCanvas}
        parametersProp={parametersProp}
      />

      {/* АУДИО ДОРОЖКА */}
      <div className="audio-container__audio-track">
        <div
          className="audio-container__audio-track-active"
          style={{
            width: audioWidthTrack,
          }}
        >
          <div className="audio-container__audio-point"></div>
        </div>
        <div className="audio-container__time audio-container__time--mobile">
          <time>{formatTime(audioTime)}</time>
          <time>{formatTime(audioLength)}</time>
        </div>
      </div>

      <div className="audio-container__controls-container">
        {/* КНОПКИ УПРАВЛЕНИЯ */}
        <div className="audio-container__buttons-container">
          <button
            className="audio-container__button audio-container__button--prev"
            disabled={activeSong === 0}
            onClick={() => {
              switchTreck('prev');
            }}
          >
            <img src={prevAudio} alt="previous song" />
          </button>

          <button
            className="audio-container__button audio-container__button--playOrPause"
            onClick={() => {
              if (playButton) {
                // запуск песни
                setAnimCanvas(true);
                playHandler();
              } else {
                // пауза
                setAnimCanvas(false);
                pauseHandler();
              }
              setPlayButton((value) => !value);
            }}
          >
            <img
              src={playButton ? playIcon : pauseIcon}
              alt={playButton ? 'play' : 'pause'}
            />
          </button>
          <button
            className="audio-container__button audio-container__button--next"
            disabled={activeSong === songsLength - 1}
            onClick={() => {
              switchTreck('next');
            }}
          >
            <img src={nextAudio} alt="next song" />
          </button>

          <div className="audio-container__time">
            <time>{formatTime(audioTime)}</time>/
            <time>{formatTime(audioLength)}</time>
          </div>
        </div>

        {/* ИЗМЕНЕНИЕ ГРОМКОСТИ */}
        <div className="audio-container__volume-container">
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="1"
            step="0.1"
            onInput={changeVolume}
            className={`audio-container__range ${
              activeVolume ? '' : 'audio-container__range--hide'
            }`}
          />
          <svg
            className={`audio-container__volume-icon ${
              activeVolume ? 'audio-container__volume-icon--active' : ''
            }`}
            onClick={() => {
              setActiveVolume((value) => !value);
            }}
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.3946 2.31963C13.3577 2.08786 13.074 1.96395 12.873 2.16659L8.64056 6.43467C7.22927 7.85783 5.31422 8.65749 3.31727 8.65749C2.98645 8.65749 2.71827 8.92763 2.71827 9.26086V14.7391C2.71827 15.0724 2.98645 15.3425 3.31727 15.3425C5.31422 15.3425 7.22927 16.1422 8.64056 17.5653L12.873 21.8334C13.074 22.036 13.3577 21.9121 13.3946 21.6804C13.8044 19.1084 14.3422 15.1273 14.3422 12C14.3422 8.87272 13.8044 4.89162 13.3946 2.31963ZM11.4218 0.706311C12.7698 -0.653104 15.1095 0.0439354 15.4199 1.99214C15.8319 4.57714 16.3935 8.69664 16.3935 12C16.3935 15.3034 15.8319 19.4229 15.4199 22.0079C15.1095 23.9561 12.7698 24.6531 11.4218 23.2937L7.18929 19.0256C6.16276 17.9904 4.7698 17.4088 3.31727 17.4088C1.85356 17.4088 0.666992 16.2135 0.666992 14.7391V9.26086C0.666992 7.78645 1.85356 6.59121 3.31727 6.59121C4.7698 6.59121 6.16276 6.00956 7.18929 4.97439L11.4218 0.706311Z"
              fill="#7C83A1"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.9929 1.50533C23.46 1.18262 24.0984 1.30248 24.4188 1.77304C26.241 4.44946 27.3337 8.06204 27.3337 12C27.3337 15.938 26.241 19.5505 24.4188 22.227C24.0984 22.6975 23.46 22.8174 22.9929 22.4947C22.5258 22.172 22.4068 21.5289 22.7271 21.0583C24.2887 18.7647 25.2824 15.5703 25.2824 12C25.2824 8.42969 24.2887 5.23535 22.7271 2.94168C22.4068 2.47112 22.5258 1.82804 22.9929 1.50533Z"
              fill="#7C83A1"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.0265 4.18102C19.5372 3.93408 20.1499 4.15089 20.395 4.66528C21.3204 6.60691 21.8636 9.19681 21.8636 12C21.8636 14.8032 21.3204 17.3931 20.395 19.3347C20.1499 19.8491 19.5372 20.0659 19.0265 19.819C18.5159 19.572 18.3006 18.9549 18.5458 18.4405C19.3123 16.8321 19.8123 14.5599 19.8123 12C19.8123 9.44013 19.3123 7.16795 18.5458 5.55952C18.3006 5.04513 18.5159 4.42796 19.0265 4.18102Z"
              fill="#7C83A1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AudioContainer;

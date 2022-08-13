// анализирует звук и создает плеер
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './SongsPage.scss';
import audio1 from '../../public/audio.mp3';

/*
SongsPage5
три линии по музыке
*/

const SongsPage = () => {
  let audio,
    // массив для частот
    frequencyArray;
  let C,
    context,
    W,
    H,
    // цвет колонки
    contextAudio,
    analyser,
    source;

  useEffect(() => {
    C = document.getElementById('canvas');
    context = C.getContext('2d');
    W = C.width = 400;
    H = C.height = 400;
  }, []);

  const audioHandler = () => {
    audio = new Audio();
    // аудио контекст представляет собой объект, состоящий из аудио модулей
    // он управляет созданием узлов и выполняет обработку (декодирование) аудио данных
    contextAudio = new AudioContext();

    // анализатор представляет собой узел, содержащий актуальную (т.е. постоянно обновляющуюся) информацию о частотах и времени воспроизведения
    // он используется для анализа и визуализации аудио данных
    analyser = contextAudio.createAnalyser();

    // метод URL.createObjectURL() создает DOMString, содержащий URL с указанием на объект, заданный как параметр
    // он позволяет загружать файлы из любого места на жестком диске
    // время жизни URL - сессия браузера
    audio.src = audio1;

    // определяем источник звука
    source = contextAudio.createMediaElementSource(audio);

    // подключаем к источнику звука анализатор
    source.connect(analyser);

    // подключаем к анализатору "выход" звука - акустическая система устройства
    analyser.connect(contextAudio.destination);

    // получаем так называемый байтовый массив без знака на основе длины буфера
    // данный массив содержит информацию о частотах
    /*let bufferLength = analyser.frequencyBinCount;
  let frequencyArray = new Uint8Array(bufferLength);*/
    frequencyArray = new Uint8Array(analyser.frequencyBinCount);

    // запускаем воспроизведение
    audio.play();

    // включаем повтор воспроизведения
    audio.loop = true;
    startAnimation();
  };

  const startAnimation = () => {
    // включаем холст
    C.style.display = 'block';
    analyser.getByteFrequencyData(frequencyArray);

    context.clearRect(0, 0, C.width, C.height);
    var width = 5;
    let ii = 0;
    for (var j = 0; j < C.width - 1; j = j + 3) {
      ii++;
      drawLine(
        width * j,
        width * (j + 3),
        frequencyArray[j + 2] + 25,
        frequencyArray[j + 5] + 25,
        '#d2f3ff'
      );

      drawLine(
        width * j,
        width * (j + 3),
        frequencyArray[j + 1],
        frequencyArray[j + 4],
        '#275cf4'
      );
      drawLine(
        width * j,
        width * (j + 3),
        frequencyArray[j] + 100,
        frequencyArray[j + 3] + 100,
        '#cd0126'
      );
    }

    console.log('ii', ii);

    setTimeout(function () {
      requestAnimationFrame(startAnimation);
    }, 30);
  };

  function drawLine(left, leftNext, height, heightNext, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = 2;

    context.moveTo(left, height);
    context.lineTo(leftNext, heightNext);

    context.lineCap = 'square';
    context.stroke();
  }

  return (
    <div className="songs-page">
      {/* <button onClick={clickHandler}>audio</button> */}
      <button
        onClick={() => {
          audioHandler();
        }}
      >
        audio
      </button>
      {/* <audio id="audio" src={audio1} controls></audio> */}
      <canvas id="canvas" width={400} height={400}></canvas>
    </div>
  );
};

export default SongsPage;

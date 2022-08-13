// анализирует звук и создает плеер
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './SongsPage.scss';
import audio1 from '../../public/audio.mp3';

const array = [
  165, 191, 224, 235, 225, 207, 205, 208, 195, 182, 197, 203, 185, 176, 196,
  183, 149, 157, 161, 150, 160, 180, 193, 183, 153, 130, 129, 156, 175, 169,
  141, 146, 162, 180, 181, 158, 125, 115, 120, 126, 118, 145, 158, 157, 168,
  170, 150, 139, 138, 129, 135, 125, 135, 145, 136, 160, 175, 166, 135, 113,
  105, 112, 127, 142, 140, 125, 135, 152, 148, 136, 148, 153, 134, 132, 140,
  127, 111, 120, 135, 136, 133, 114, 115, 135, 156, 156, 142, 124, 116, 138,
  146, 131, 111, 105, 128, 144, 133, 108, 120, 135,
];

const SongsPage = () => {
  let dropZone = document.querySelector('div'),
    input = document.querySelector('input'),
    file,
    text,
    progress,
    volume,
    audio,
    // массив для частот
    frequencyArray;
  let C,
    context,
    W,
    H,
    centerX,
    centerY,
    radius,
    // эту переменную мы будем использовать для определения текущего прогресса
    piece,
    // количество колонок
    bars = 200,
    x,
    y,
    xEnd,
    yEnd,
    // ширина колонки
    barWidth = 2,
    // высота колонки
    barHeight,
    // цвет колонки
    contextAudio,
    lineColor,
    analyser,
    rads,
    source;

  useEffect(() => {
    C = document.getElementById('canvas');
    context = C.getContext('2d');
    W = C.width = window.innerWidth;
    H = C.height = window.innerHeight;
    centerX = W / 2;
    centerY = H / 2;
    bars = 200;
    // ширина колонки
    barWidth = 2;
    // высота колонки
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

    console.log('frequencyArray', frequencyArray);

    // запускаем воспроизведение
    audio.play();

    // включаем повтор воспроизведения
    audio.loop = true;
    startAnimation();
  };

  const startAnimation = () => {
    // включаем холст
    C.style.display = 'block';

    // определяем текущий прогресс (текущее время воспроизведения / продолжительность трека)
    piece = audio.currentTime / audio.duration;

    // устанавливаем радиус круга
    // мы будем использовать два радиуоди,н для прогресса, другой для визуализации частот
    radius = 105;

    // очищаем холст
    context.clearRect(0, 0, W, H);

    // рисуем круговой прогресс
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, Math.PI * (2 * piece));
    context.lineWidth = 30;
    context.stroke();

    // выводим значение громкости
    // volume.innerText = Math.trunc(audio.volume * 100) + '%';

    // выводим значение прогресса
    // progress.innerText = Math.trunc(piece * 100) + '%';

    // копируем данные о частотах в frequencyArray
    analyser.getByteFrequencyData(frequencyArray);
    // делаем итерацию по количеству колонок
    for (let i = 0; i < bars; i++) {
      // увеличиваем радиус
      radius = 120;

      // переводим количество колонок в радианы
      rads = (Math.PI * 2) / bars;

      // определяем высоту колонок
      barHeight = frequencyArray[i] * 0.6;

      // двигаемся от 0 по часовой стрелке
      x = centerX + Math.cos(rads * i) * radius;
      y = centerY + Math.sin(rads * i) * radius;
      xEnd = centerX + Math.cos(rads * i) * (radius + barHeight);
      yEnd = centerY + Math.sin(rads * i) * (radius + barHeight);

      // рисуем колонки
      drawBar(x, y, xEnd, yEnd, barWidth, frequencyArray[i]);
    }

    // зацикливаем анимацию
    requestAnimationFrame(startAnimation);
  };

  const drawBar = (x1, y1, x2, y2, width, frequency) => {
    // цвет колонок меняется от светло-голубого до темно-синего
    lineColor = 'rgb(' + frequency + ', ' + frequency + ', ' + 205 + ')';

    // рисуем линии
    context.strokeStyle = lineColor;
    context.lineWidth = width;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  };

  // const clickHandler = () => {
  //   var canvas = document.getElementById('canvas');
  //   var ctx = canvas.getContext('2d');
  //   var waves = ['red', 'green', 'blue'];
  //   var i = 0;

  //   function draw() {
  //     canvas.width = canvas.width;

  //     for (var j = waves.length - 1; j >= 0; j--) {
  //       var offset = i + j * Math.PI * 12;

  //       ctx.strokeStyle = waves[j];
  //       var randomLeft = ((Math.sin(offset / 100) + 1) / 2) * 200;
  //       var randomRight = ((Math.sin(offset / 100 + 10) + 1) / 2) * 200;
  //       var randomLeftConstraint = ((Math.sin(offset / 60 + 2) + 1) / 2) * 200;
  //       var randomRightConstraint = ((Math.sin(offset / 60 + 1) + 1) / 2) * 200;

  //       ctx.beginPath();
  //       ctx.moveTo(0, randomLeft + 100);

  //       // ctx.lineTo(canvas.width, randomRight + 100);
  //       ctx.bezierCurveTo(
  //         canvas.width / 3,
  //         randomLeftConstraint,
  //         (canvas.width / 3) * 2,
  //         randomRightConstraint,
  //         canvas.width,
  //         randomRight + 100
  //       );
  //       // ctx.lineTo(canvas.width, canvas.height);
  //       // ctx.lineTo(0, canvas.height);
  //       // ctx.lineTo(0, randomLeft + 100);

  //       //  xy 400 400 xy 0 400 xy 0 268.4547105928689
  //       //  xy 400 400 xy 0 400 xy 0 236.8124552684678
  //       //  xy 400 400 xy 0 400 xy 0 200

  //       ctx.stroke();
  //       ctx.closePath();
  //     }

  //     i = i + 3;
  //   }
  //   setInterval(() => {
  //     draw();
  //   }, 20);
  // };

  return (
    <div className="songs-page">
      <div>SongsPage</div>
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

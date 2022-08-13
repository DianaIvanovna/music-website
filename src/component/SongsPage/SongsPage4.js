// анализирует звук и создает плеер
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './SongsPage.scss';
import audio1 from '../../public/audio.mp3';

/*
    SongsPage4
    три синусоиды
*/

const SongsPage = () => {
  let HEIGHT = 0;
  let WIDTH = 0;
  let canvas, canvasContext;
  let step = -5;
  let gradient1 = null;
  let gradient2 = null;
  let gradient3 = null;

  useEffect(() => {
    canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');
    gradient1 = canvasContext.createLinearGradient(0, 0, WIDTH, 5);
    gradient1.addColorStop(0.0, '#DA4F4F');
    gradient1.addColorStop(0.5, '#DA604F');
    gradient1.addColorStop(1.0, '#DAB34F');
    gradient2 = canvasContext.createLinearGradient(0, 0, WIDTH, 5);
    gradient2.addColorStop(0.0, '#4F76DA');
    gradient2.addColorStop(1.0, '#DA4F68');
    gradient3 = canvasContext.createLinearGradient(0, 0, WIDTH, 5);
    gradient3.addColorStop(0.0, '#7C8ACB');
    gradient3.addColorStop(1.0, '#9375B9');
  }, []);

  const drowLine2 = () => {
    window.requestAnimationFrame(drowLine2);
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    HEIGHT = canvas.height;
    WIDTH = canvas.width;

    drawCurves(40, 'sin', gradient1, (WIDTH / (2 * Math.PI)) * 0.8, 200);
    drawCurves(20, 'cos', gradient2, (WIDTH / (2 * Math.PI)) * 0.5, 50);
    drawCurves(20, 'sin', gradient3, (WIDTH / (2 * Math.PI)) * 1, 0);

    step += 5;
  };

  const drawCurves = (amplitude, trig, color, frequency, offset) => {
    // trig is the trigonometric function to be used: sin or cos
    canvasContext.beginPath();
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = color;

    var x = 0;
    var y = 0;
    //var amplitude = 10;
    //Метод Canvas 2D API сохраняет все состояние холста, помещая текущее состояние в стек.
    canvasContext.save();

    //Метод добавляет преобразование перевода к текущей матрице путем перемещения холста и его исходных x единиц по горизонтали и y единицам по вертикали в сетке.
    // x Расстояние для перемещения в горизонтальном направлении
    // y Расстояние для перемещения в вертикальном направлении.
    canvasContext.translate(0, -amplitude * Math[trig](step / frequency));

    while (x < WIDTH) {
      y = HEIGHT / 2 + amplitude * Math[trig]((x + step) / frequency - offset);
      canvasContext.lineTo(x, y);
      x++;
    }

    canvasContext.stroke();
    canvasContext.restore();
  };

  return (
    <div className="songs-page">
      <button onClick={drowLine2}>drowLine2</button>
      <audio id="audio" src={audio1} controls onC></audio>
      <canvas id="canvas" width={800} height={400}></canvas>
    </div>
  );
};

export default SongsPage;

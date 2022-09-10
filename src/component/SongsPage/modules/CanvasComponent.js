import React, { createRef } from 'react';

class CanvasComponent extends React.Component {
  constructor(props) {
    super();
    this.canvasRef = createRef();
    this.canvasContext = null;
    this.width = null;
    this.height = null;
    this.gradient1 = null;
    this.gradient2 = null;
    this.gradient3 = null;
    this.step = -5;
    this.requestID = null;
    this.animStart = props.animCanvas;

    this.frame = 0;
    this.parameters = props.parametersProp;
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    // console.log('this.props.animCanvas', this.animStart, this.props.animCanvas);

    //this.animCanvas();

    if (this.animStart !== this.props.animCanvas) {
      this.animStart = this.props.animCanvas;

      if (this.props.animCanvas) {
        this.frame = 0;
        this.animCanvas(0);
      } else {
        window.cancelAnimationFrame(this.requestID);
      }
    }

    if (this.parameters !== this.props.parametersProp) {
      this.parameters = this.props.parametersProp;
      this.updateCanvas();
    }
  }

  updateCanvas() {
    this.canvasContext = this.canvasRef.current.getContext('2d');

    this.width = this.canvasRef.current.width;
    this.height = this.canvasRef.current.height;

    this.canvasContext.clearRect(0, 0, this.width, this.height);

    this.gradient1 = this.canvasContext.createLinearGradient(
      0,
      0,
      this.width,
      5
    );
    this.gradient1.addColorStop(0.0, '#DA4F4F');
    this.gradient1.addColorStop(0.5, '#DA604F');
    this.gradient1.addColorStop(1.0, '#DAB34F');
    this.gradient2 = this.canvasContext.createLinearGradient(
      0,
      0,
      this.width,
      5
    );
    this.gradient2.addColorStop(0.0, '#4F76DA');
    this.gradient2.addColorStop(1.0, '#DA4F68');
    this.gradient3 = this.canvasContext.createLinearGradient(
      0,
      0,
      this.width,
      5
    );
    this.gradient3.addColorStop(0.0, '#7C8ACB');
    this.gradient3.addColorStop(1.0, '#9375B9');

    // Амплитуда:
    //     amplitude max - 100 min - -100
    // Частота:
    //     frequency max - (this.width / (2 * Math.PI))*1 min = (this.width / (2 * Math.PI))*0.4
    // Смещение по горизонтали:
    //     offset

    this.drawCurves(
      this.parameters[0].amplitude,
      'sin',
      this.gradient1,
      (this.width / (2 * Math.PI)) * this.parameters[0].frequency,
      this.parameters[0].offset
    );
    this.drawCurves(
      this.parameters[1].amplitude,
      'sin',
      this.gradient2,
      (this.width / (2 * Math.PI)) * this.parameters[1].frequency,
      this.parameters[1].offset
    );
    this.drawCurves(
      this.parameters[2].amplitude,
      'sin',
      this.gradient3,
      (this.width / (2 * Math.PI)) * this.parameters[2].frequency,
      this.parameters[2].offset
    );
  }

  drawCurves = (amplitude, trig, color, frequency, offset) => {
    this.canvasContext.beginPath();
    this.canvasContext.lineWidth = 2;
    this.canvasContext.strokeStyle = color;

    var x = 0;
    var y = 0;
    //var amplitude = 10;
    //Метод Canvas 2D API сохраняет все состояние холста, помещая текущее состояние в стек.
    this.canvasContext.save();

    //Метод добавляет преобразование перевода к текущей матрице путем перемещения холста и его исходных x единиц по горизонтали и y единицам по вертикали в сетке.
    // x Расстояние для перемещения в горизонтальном направлении
    // y Расстояние для перемещения в вертикальном направлении.
    this.canvasContext.translate(
      0,
      -amplitude * Math[trig](this.step / frequency)
    );

    while (x < this.width) {
      y =
        this.height / 2 +
        amplitude * Math[trig]((x + this.step) / frequency - offset);
      this.canvasContext.lineTo(x, y);
      x++;
    }

    this.canvasContext.stroke();
    this.canvasContext.restore();
  };

  animCanvas = (props) => {
    this.requestID = window.requestAnimationFrame(this.animCanvas);
    this.canvasContext.clearRect(0, 0, this.width, this.height);

    if (Math.floor(props / 1000) !== this.frame) {
      // каждую секунду меняю амплитуду/частоту
      this.frame = Math.floor(props / 1000);

      this.parameters.forEach((item) => {
        if (item.amplitudeIncrease) {
          item.amplitude++;
        } else {
          item.amplitude--;
        }
        if (item.amplitude === item.amplitudeMax) {
          item.amplitudeIncrease = false;
        } else if (item.amplitude === item.amplitudeMin) {
          item.amplitudeIncrease = true;
        }
      });

      console.log('this.parameters1.amplitude', this.parameters[1].amplitude);
    }

    this.drawCurves(
      this.parameters[0].amplitude,
      'sin',
      this.gradient1,
      (this.width / (2 * Math.PI)) * this.parameters[0].frequency,
      this.parameters[0].offset
    );
    this.drawCurves(
      this.parameters[1].amplitude,
      'sin',
      this.gradient2,
      (this.width / (2 * Math.PI)) * this.parameters[1].frequency,
      this.parameters[1].offset
    );
    this.drawCurves(
      this.parameters[2].amplitude,
      'sin',
      this.gradient3,
      (this.width / (2 * Math.PI)) * this.parameters[2].frequency,
      this.parameters[2].offset
    );

    this.step += 5;
  };

  render() {
    return (
      <div className="audio-container__canvas-container">
        <div className="audio-container__shadow"></div>
        <canvas
          ref={this.canvasRef}
          width={300}
          height={300}
          className="audio-container__canvas"
        />
      </div>
    );
  }
}

export default CanvasComponent;

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
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    // console.log('this.props.animCanvas', this.animStart, this.props.animCanvas);
    if (this.animStart !== this.props.animCanvas) {
      this.animStart = this.props.animCanvas;
      if (this.props.animCanvas) {
        this.animCanvas();
      } else {
        // console.log('window.cancelAnimationFrame', window.cancelAnimationFrame);
        window.cancelAnimationFrame(this.requestID);
      }
    }
  }

  updateCanvas() {
    this.canvasContext = this.canvasRef.current.getContext('2d');
    this.width = this.canvasRef.current.width;
    this.height = this.canvasRef.current.height;

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

    this.drawCurves(
      40,
      'sin',
      this.gradient1,
      (this.width / (2 * Math.PI)) * 0.8,
      200
    );
    this.drawCurves(
      20,
      'cos',
      this.gradient2,
      (this.width / (2 * Math.PI)) * 0.5,
      50
    );
    this.drawCurves(
      20,
      'sin',
      this.gradient3,
      (this.width / (2 * Math.PI)) * 1,
      0
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

  animCanvas = () => {
    this.requestID = window.requestAnimationFrame(this.animCanvas);
    this.canvasContext.clearRect(0, 0, this.width, this.height);

    this.drawCurves(
      40,
      'sin',
      this.gradient1,
      (this.width / (2 * Math.PI)) * 0.8,
      200
    );
    this.drawCurves(
      20,
      'cos',
      this.gradient2,
      (this.width / (2 * Math.PI)) * 0.5,
      50
    );
    this.drawCurves(
      20,
      'sin',
      this.gradient3,
      (this.width / (2 * Math.PI)) * 1,
      0
    );

    this.step += 5;
  };

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        width={300}
        height={300}
        className="audio-container__canvas"
      />
    );
  }
}

export default CanvasComponent;

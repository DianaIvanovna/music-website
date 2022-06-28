import React, { useEffect } from 'react';
import './SongsPage.scss';

const SongsPage = () => {
  useEffect(() => {
    // var c = document.getElementById('myCanvas');
    // var ctx = c.getContext('2d');
    // var i;
    // for (i = 0; i < 360; i += 20) {
    //   ctx.moveTo(i + 5, 180);
    //   ctx.lineTo(i, 180);
    // }
    // ctx.stroke();
    // var counter = 0,
    //   x = 0,
    //   y = 180;
    // //100 iterations
    // var increase = (90 / 180) * Math.PI;
    // for (i = 0; i <= 180; i += 10) {
    //   ctx.moveTo(x, y);
    //   x = i;
    //   y = 180 - Math.sin(counter);
    //   counter += increase;
    //   ctx.lineTo(x, y);
    //   alert(' x : ' + x + ' y : ' + y);
    // }
    // ctx.stroke();
  }, []);
  return (
    <div className="songs-page">
      <div>SongsPage</div>
      {/* <canvas
        id="myCanvas"
        width="360"
        height="360"
        style="border:1px solid #d3d3d3;"
      ></canvas> */}
    </div>
  );
};

export default SongsPage;

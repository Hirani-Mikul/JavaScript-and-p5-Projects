let drawRange = function (incAmount, hA) {
    for (let i = 0; i < incAmount * width; i += incAmount) {
      let n = noise(i);
      let y = map(n, 0, 1, 0, height / hA);
      let x = i / incAmount;
      line(x, height - y, x, height);
    }
}

function setup() {
  createCanvas(600, 600);
  //background(150, 150, 255);
let xOff = 0;
  for (var i = 0; i < width; i++) {
    let yOff = 0;
    for (var j = 0; j < height; j++) {
      let nc = noise(xOff, yOff);
      let colR = map(nc, 0, 1, 50, 100);
      let colG = map(nc, 0, 1, 50, 200);
      let colB = map(nc, 0, 1, 100, 255);
      stroke(colR, colG, colB);
      point(i ,j);
      yOff += 0.01;
    }
    xOff += 0.01;
  }

  // Mountains
  stroke(158, 100, 150);
  drawRange(0.02, 1.12);
  stroke(190, 110, 130);
  drawRange(0.0243, 1.9);
  stroke(200, 100, 100);
  drawRange(0.01, 2.5);

  // Trees
  stroke(10, 255, 10);
  drawRange(0.1, 3.5);

  stroke(150, 255, 250);
  drawRange(0.15, 5.5);

  stroke(250, 255, 205);
  drawRange(0.019, 15);
}
// function draw () {
//   let xOff = 0;
//     for (var i = 0; i < width; i++) {
//       let yOff = 0;
//       for (var j = 0; j < height; j++) {
//         let nc = noise(xOff, yOff);
//         let colR = map(nc, 0, 1, 50, 100);
//         let colG = map(nc, 0, 1, 50, 200);
//         let colB = map(nc, 0, 1, 100, 255);
//         stroke(colR, colG, colB);
//         point(i ,j);
//         yOff += 0.01;
//       }
//       xOff += 0.01;
//     }
//
//     // Mountains
//     stroke(158, 100, 150);
//     drawRange(0.02, 1.12);
//     stroke(190, 110, 130);
//     drawRange(0.0243, 1.9);
//     stroke(200, 100, 100);
//     drawRange(0.01, 2.5);
//
//     // Trees
//     stroke(10, 255, 10);
//     drawRange(0.1, 3.5);
//
//     stroke(150, 255, 250);
//     drawRange(0.15, 5.5);
//
//     stroke(250, 255, 205);
//     drawRange(0.019, 15);
//
//
// }

//let generator;
function setup() {
  createCanvas(600, 600);
  background(100);
  //generator = random(1);
}

function draw() {
  // let x = randomGaussian(300, 120);
  // // let std_deviation = 30;
  // // let mean = 200;
  // // let x = std_deviation * num + mean;
  //
  // noStroke();
  // fill(100, 255, 150, 10);
  // ellipse(x, 300, 20, 20);
  for (var y = 0; y < height; y++) {
    let x = randomGaussian(150, 100);
    line(300, x, y, x);
  }
}

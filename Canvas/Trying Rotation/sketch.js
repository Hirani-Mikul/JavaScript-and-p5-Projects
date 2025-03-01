let img;
function preload () {
  img = loadImage("images/axe4.png");
}
function setup() {
  createCanvas(600, 600);
}
let x = 100;
let angle = 0;
function draw() {
  background(100);
  applyMatrix();
  translate(x, 100);
  rotate(angle);
  imageMode(CORNER);
  image(img, 0, 0, 15, 30);
  angle += 0.35;
  x+=10;
  resetMatrix();
  if (x > width) {
    x = 100;
  }
}

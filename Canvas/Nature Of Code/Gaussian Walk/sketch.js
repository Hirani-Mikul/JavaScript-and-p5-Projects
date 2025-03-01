let Walker = function () {
  this.x = width/2;
  this.y = height/2;
}
Walker.prototype.show = function () {
  stroke(0, 0, 0);
  strokeWeight(3);
  point(this.x, this.y);
}
Walker.prototype.move = function () {
  this.x = constrain(this.x, 0, width);
  this.y = constrain(this.y, 0, height);
  let x = randomGaussian(0, 5);
  let y = randomGaussian(0, 5);
  this.x += x;
  this.y += y;
}
let walker;
function setup() {
  createCanvas(600, 600);
  background(100);
  walker = new Walker();
}

function draw() {
  walker.show();
  walker.move();
}

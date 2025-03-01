var Walker = function () {
  this.x = width/2;
  this.y = height/2;
  this.tx = 0;
  this.ty = 100;
}
Walker.prototype.show = function () {
  stroke(255, 0, 0);
  strokeWeight(2);
  point(this.x, this.y);
}
Walker.prototype.walk = function () {
  this.x = map(noise(this.tx), 0, 1, 0, width);
  this.y = map(noise(this.ty), 0, 1, 0, height);
  this.tx += 0.001;
  this.ty += 0.001;
}
let walker;
function setup () {
  createCanvas(600, 600);
  background(100);
  walker = new Walker();
}
function draw () {
  walker.show();
  walker.walk();

}

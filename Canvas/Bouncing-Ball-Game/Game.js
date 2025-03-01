// Ball Constructor
var Ball = function () {
    this.x = width/2;
    this.y = 500;
    this.r = 20;
    this.img = ballImg;
    this.dx = 3;
    this.dy = 5;
}
Ball.prototype.update = function () {
  this.x += this.dx;
  this.y += this.dy;
}
Ball.prototype.checkEdges = function (p) {
  if (this.x > width - this.r/2 || this.x < this.r/2) {
    this.dx = -this.dx;
  } else if (this.y < this.r/2) {
    this.dy = -this.dy;
  }
 }
 Ball.prototype.show = function () {
   //fill(0, 150, 255);
   imageMode(CENTER);
   image(this.img, this.x, this.y, this.r, this.r);
    //noStroke();
    //ellipse(this.x, this.y, this.r, this.r);
 }
 Ball.prototype.intersect = function (p) {
   return (this.x + this.r/2 > p.x - p.width/2 && this.x - this.r/2 < p.x + p.width/2 && this.y + this.r/2 > p.y - p.height/2 && this.y - this.r/2 < p.y + p.height/2);
 }

// Paddle Constructor
var Paddle = function () {
    this.x = width/2;
    this.y = height - 30;
    this.width = 100;
    this.height = 10;
    //this.dir = dir;
}
Paddle.prototype.update = function (dir) {
  if (this.x > width - this.width/2) {
    this.x = width - this.width/2;
  } else if (this.x < this.width/2)  {
    this.x = this.width/2;
  }
  this.x += dir;
}
Paddle.prototype.show = function () {
  fill(0, 0, 255);
  rectMode(CENTER);
  rect(this.x, this.y, this.width, this.height);
}

// Bricks constructor
var Brick = function (x, y) {
  this.x = x;
  this.y = y;
  this.width = 80;
  this.height = 20;
  this.img = brickImg;
}
Brick.prototype.show = function () {
  imageMode(CENTER);
  image(brickImg, this.x, this.y, this.width, this.height);
};


// Button Constructor
let Button = function (config) {
  this.x = config.x;
  this.y = config.y;
  this.width = config.width || 100;
  this.height = config.height || 30;
  this.label = config.label || "Start";
  this.onClick = config.onClick || function () {};
  this.topOffset = config.topOffset || 0;
  this.leftOffset = config.leftOffset || 0;
  this.txtSize = config.txtSize;
  this.col = config.col || color(0, 0, 0);
  this.col2 = config.col2 || color(0, 255, 0, 100);
  this.strokeCol = config.strokeCol || color(0, 255, 255);
}
Button.prototype.isInside = function (mx, my) {
  return (mx > this.x - this.width/2 && mx < this.x + this.width/2 && my > this.y - this.height/2 && my < this.y + this.height/2);
}
Button.prototype.onClickHandler = function () {
  if (this.isInside(mouseX, mouseY)) {
    this.onClick();
  }
}
Button.prototype.show = function (x, y) {
  this.x = x;
  this.y = y;
  rectMode(CENTER);
  strokeWeight(2);
  stroke(255, 255, 0);
  fill(this.col2);
  rect(this.x, this.y, this.width, this.height, 10);
  textAlign(CENTER, CENTER);
  strokeWeight(1);
  stroke(this.strokeCol);
  textSize(this.txtSize);
  fill(this.col);
  text(this.label, this.x + this.leftOffset, this.y + this.topOffset);
}

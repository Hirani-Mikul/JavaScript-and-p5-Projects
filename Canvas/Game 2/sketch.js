let bubble;
let blocks = [];
function setup() {
  createCanvas(600, 600);
  startGame();
}
function startGame () {
  bubble = new Bubble(300, 300);
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      let x = i * random(100, 150) + 10;
      let y = j * random(100, 150) + 10;
      blocks.push(new Block(x, y))
    }
  }

}
function draw() {
  background(100);
  bubble.show();
  bubble.move();
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].show();
    bubble.collide(blocks[i]);
  }
}


let Bubble = function (x, y) {
  this.x = x;
  this.y = y;
  this.radius = 25;
  this.dx = 5;
  this.dy = 5;
}
Bubble.prototype.show = function () {
  fill(255, 0, 0);
  noStroke();
  ellipse(this.x, this.y, this.radius, this.radius);
}
Bubble.prototype.move = function () {
  this.x = constrain(this.x, this.radius/2, width - this.radius/2);
  this.y = constrain(this.y, this.radius/2, height - this.radius/2);
  if (keyIsDown(37)) {
    this.x -= this.dx;
  } else if (keyIsDown(39)) {
    this.x += this.dx;
  } else if (keyIsDown(38)) {
    this.y -= this.dy;
  } else if (keyIsDown(40)) {
    this.y += this.dy;
  }
}
Bubble.prototype.collide = function (other) {
  let d = dist(this.x, this.y, other.x, other.y);
  if (d < this.radius/2 + other.size/2) {
    this.dx = 0;
  } else {
    this.dx = 5;
  }
}
let Block = function (x, y) {
  this.x = x;
  this.y = y;
  this.size = 50;
}
Block.prototype.show = function () {
  rectMode(CENTER);
  fill(0, 0, 255);
  noStroke();
  rect(this.x, this.y, this.size, this.size);
}

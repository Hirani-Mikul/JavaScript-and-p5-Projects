let Bubble = function (x, y, col) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.r = 20;
  this.bubbleSpeed = 20;
  this.isShot = false;
  this.col = col;
}
Bubble.prototype.hang = function () {
  this.vel.mult(0);
  this.acc.mult(0);
}
Bubble.prototype.hangOnWall = function () {
  if (this.pos.y - this.r/2 <= 0) {
    this.hang();
  }
}
Bubble.prototype.collide = function (other) {
  let dy = this.vel.y;
  let dy2 = other.vel.y;
  let dx = this.vel.x;
  let dx2 = other.vel.x;
  return (this.pos.x + this.r/2 + dx > other.pos.x - other.r/2 && this.pos.x - this.r/2 - dx < other.pos.x + other.r/2 && this.pos.y + this.r/2 + dy > other.pos.y - other.r/2 && this.pos.y - this.r/2 - dy < other.pos.y + other.r/2);
}
Bubble.prototype.display = function () {
  push();
  translate(this.pos.x, this.pos.y);
  fill(this.col);
  ellipse(0, 0, this.r, this.r);
  pop();
}
Bubble.prototype.edges = function () {
  if (this.pos.x > width - this.r/2 || this.pos.x < this.r/2) {
    this.vel.x *= -1;
  }
}
Bubble.prototype.update = function () {
  this.vel.add(this.acc);
  this.vel.limit(this.bubbleSpeed);
  this.pos.add(this.vel);
  this.acc.mult(0);
}
Bubble.prototype.applyForce = function (f) {
  let force = f.copy();
  force.normalize();
  force.mult(this.bubbleSpeed);
  this.acc.add(force);
}

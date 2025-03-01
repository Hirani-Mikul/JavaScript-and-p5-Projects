let Liquid = function (x, y, w, h, c) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.c = c;
};
Liquid.prototype.display = function () {
  fill(0, 0, 255, 100);
  noStroke();
  rect(this.x, this.y, this.width, this.height);
};
Liquid.prototype.contains = function (m) {
  let mp = m.pos; // Mover Position
  let mMass = (m.mass * m.scale) / 2; // Mover radius interms of mass
  return (
    mp.y + mMass > this.y &&
    mp.y - mMass < this.y + this.height &&
    mp.x + mMass > this.x &&
    mp.x - mMass < this.x + this.width
  );
};
Liquid.prototype.calculateDragForce = function (m) {
  let speed = m.vel.mag();
  let dragMagnitude = speed * speed * this.c;

  let dragForce = m.vel.copy();
  dragForce.normalize();
  dragForce.mult(-dragMagnitude);

  return dragForce;
};

let Mover = function (x, y, m, col) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;
  this.scale = 10;
  this.col = col || color(0, 255, 0);
};
Mover.prototype.update = function () {
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.acc.mult(0);
};
Mover.prototype.applyForce = function (force) {
  var f = p5.Vector.div(force, this.mass);
  this.acc.add(f);
};
Mover.prototype.display = function () {
  noStroke();
  fill(this.col);
  ellipse(
    this.pos.x,
    this.pos.y,
    this.mass * this.scale,
    this.mass * this.scale
  );
};

Mover.prototype.checkWalls = function () {
  if (this.pos.x > width) {
    this.pos.x = width;
    this.vel.x *= -1;
  } else if (this.pos.x < 0) {
    this.pos.x = 0;
    this.vel.x *= -1;
  }
  if (this.pos.y > height) {
    this.pos.y = height;
    this.vel.y *= -1;
  } else if (this.pos.y < 0) {
    this.pos.y = 0;
    this.vel.y *= -1;
  }
};

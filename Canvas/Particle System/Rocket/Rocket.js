let Rocket = function () {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.angle = 0;
  this.aVel = 0.1;
  this.damping = 0.998;
  this.velLimit = 10;
  this.r = 30;
  this.thrusting = true;
}
Rocket.prototype.applyForce = function (f) {
  let force = f.copy();
  this.acc.add(force);
}
Rocket.prototype.thrust = function () {
  let angle = this.angle;
  let force = createVector(cos(angle), sin(angle));
  force.mult(0.2);
  this.applyForce(force);

  force.mult(-0.1);
  ps.addParticles(this.pos.x, this.pos.y, force);
}
Rocket.prototype.update = function () {
  this.vel.add(this.acc);
  this.vel.limit(this.velLimit);
  this.pos.add(this.vel);
  this.vel.mult(this.damping);
  this.acc.mult(0);
  ps.update();
}
Rocket.prototype.edges = function () {
  if (this.pos.x > width + this.r) {
    this.pos.x =  - this.r - 10;
  } else if (this.pos.x < 0 - this.r - 15) {
    this.pos.x = width + this.r;
  }
  if (this.pos.y > height + this.r) {
    this.pos.y =  - this.r - 10;
  } else if (this.pos.y < 0 - this.r - 15) {
    this.pos.y = height + this.r;
  }
}
Rocket.prototype.turn = function (dir) {
  this.angle += dir * this.aVel;
}
Rocket.prototype.display = function () {
  colorMode(RGB);
  push();
  translate(this.pos.x, this.pos.y);
  rotate(this.angle);
  rectMode(CENTER);
  if (this.thrusting) {
    fill(255, 100, 0);
  } else {
    fill(0, 255, 255);
  }
  rect(-(60/100) * this.r, (40/100) * this.r, this.r/3, this.r/4);
  rect(-(60/100) * this.r, -(40/100) * this.r, this.r/3, this.r/4);
  fill(0, 150, 150);
  triangle(this.r, 0, -(60/100) * this.r, -(60/100) * this.r, -(60/100) * this.r, (60/100) * this.r);
  pop();
}

let Bullet = function (pos) {
  this.pos = createVector(pos.x, pos.y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.width = 15;
  this.angle = 0;
  this.height = 5;
  this.lives = 25;
  this.isShot = false;
  this.hasHit = false;
}
Bullet.prototype.shoot = function (angle) {
  this.angle = angle;
  let force = createVector(cos(this.angle), sin(this.angle));
  this.applyForce(force);
}
Bullet.prototype.update = function () {
  this.vel.add(this.acc);
  this.vel.limit(15);
  this.pos.add(this.vel);
}
Bullet.prototype.applyForce = function (force) {
  this.acc.add(force);
}
Bullet.prototype.checkEdges = function () {
  if (this.pos.x > width) {
    this.pos.x = 0;
  } else if (this.pos.x < 0) {
    this.pos.x = width;
  }
  if (this.pos.y > height) {
    this.pos.y = 0;
  } else if (this.pos.y < 0) {
    this.pos.y = height;
  }
}
Bullet.prototype.hit = function (roid) {
  let roidX = roid.pos.x;
  let roidY = roid.pos.y;
  let roidW = roid.width/4;
  let roidH = roid.height/4;
   return (this.pos.x + this.width/2> roidX - roidW && this.pos.x - this.width/2 < roidX + roidW && this.pos.y + this.height/2 > roidY - roidH && this.pos.y - this.height/2 < roidY + roidH);
}
Bullet.prototype.display = function () {
  push();
  translate(this.pos.x, this.pos.y);
  rotate(this.angle);
  fill(255, 255, 0);
  rect(0, 0, this.width, this.height);
  pop();
}

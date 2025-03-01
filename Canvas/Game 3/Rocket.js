let Rocket = function (x, y) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.angle = 0;
  this.velLimit = 6;
  this.boostVelLimit = 15;
  this.angularVel = 0.08;
  this.mass = 30;
  this.img  = [img, img2];
  this.thrusting = false;
  this.boosting = false;
  this.rightThruster = false;
  this.leftThruster = false;
  this.width = 100;
  this.height = 50;
  this.damping = 0.99;
  this.brake = 0.951;
  this.isHit = false;
  this.die = false;
};
Rocket.prototype.update = function () {
    this.vel.add(this.acc);
    if (this.boosting) {
      this.vel.limit(this.boostVelLimit);
    } else {
      this.vel.limit(this.velLimit);
    }
    this.vel.mult(this.damping);
    this.pos.add(this.vel);
    this.acc.mult(0);
}
Rocket.prototype.turn = function (dir) {
  this.angle += dir * this.angularVel;
}
Rocket.prototype.thrust = function () {
    var angle = this.angle;
    var force = createVector(cos(angle), sin(angle));
    this.applyForce(force);
}
Rocket.prototype.stop = function () {
  this.vel.mult(this.brake);
}
Rocket.prototype.applyForce = function (force) {
    let f = force.copy();
    this.acc.add(f);
}
Rocket.prototype.checkEdges = function () {
    if (this.pos.x - this.width/2 > width) {
      this.pos.x = 0 - this.width/2;
    } else if (this.pos.x + this.width/2 <  0) {
      this.pos.x = width + this.width/2;
    }
    if (this.pos.y - this.height/2 > height) {
      this.pos.y = 0 - this.height/2;
    } else if (this.pos.y + this.height/2 <  0) {
      this.pos.y = height + this.height/2;
    }
}
Rocket.prototype.displayThrust = function () {
  imageMode(CORNER);
  if (this.thrusting) {
    let thrustHeight;
    if (this.boosting) {
      thrustHeight = random(10, 100);
    } else {
      thrustHeight = random(10, 50);
    }
    image(this.img[1], -8, 20, 20, thrustHeight);
  }
  if (this.rightThruster) {
    let rightThrustHeight = random(10, 30);
    image(this.img[1], 8, 20, 10, rightThrustHeight);
  }
   if (this.leftThruster) {
    let leftThrustHeight = random(10, 30);
    image(this.img[1], -15, 20, 10, leftThrustHeight);
  }
}
Rocket.prototype.hit = function (roid) {
  let Xroid = roid.pos.x;
  let Yroid = roid.pos.y;
  let Wroid = roid.width/4.5;
  let Hroid = roid.height/4.5;
  let Xship = this.pos.x;
  let Yship = this.pos.y;
  let Wship = this.width/4;
  let Hship = this.height/4;
  return (Xship + Wship > Xroid - Wroid && Xship - Wship < Xroid + Wroid && Yship + Hship > Yroid - Hroid && Yship - Hship < Yroid + Hroid);
}
Rocket.prototype.display = function () {
  push();
  translate(this.pos.x, this.pos.y);
  rotate(this.angle + PI/2);
  if (this.thrusting || this.rightThruster || this.leftThruster) {
    this.displayThrust();
  }
  imageMode(CENTER);
  image(this.img[0], 0, 0);
  pop();
};

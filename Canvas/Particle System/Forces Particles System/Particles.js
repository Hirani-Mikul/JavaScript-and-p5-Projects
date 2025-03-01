let Particle = function (pos) {
  this.pos = pos.copy();
  this.vel = createVector(random(-1, 1)/3, random(-1, 0));
  this.acc = createVector(0, 0);
  this.mass = random(2, 4);
  this.scale = 10;
  this.lifeSpan = 255;
}
Particle.prototype.run = function () {
  this.update();
  this.display();
}
Particle.prototype.applyForce = function (f) {
  let force = f.copy();
  force.div(this.mass);
  this.acc.add(force);
}
Particle.prototype.update = function () {
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.lifeSpan -= 2;
  this.acc.mult(0);
}
Particle.prototype.isDead = function () {
  return this.lifeSpan < 0;
}
Particle.prototype.display = function () {
  fill(0, 255, 0, this.lifeSpan);
  ellipse(this.pos.x, this.pos.y, this.mass * this.scale, this.mass * this.scale);
}

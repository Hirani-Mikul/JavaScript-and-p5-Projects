let Particle = function (pos, dir) {
  this.pos = pos.copy();
  this.vel = p5.Vector.random2D();
  this.acc = dir.copy();
  this.r = random(10, 20);
  this.lifeSpan = 255;
}
Particle.prototype.run = function () {
  this.update();
  this.display();
}
Particle.prototype.update = function () {
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.lifeSpan -= 2;
}
Particle.prototype.isDead = function () {
  return this.lifeSpan < 0;
}
Particle.prototype.display = function () {
  colorMode(HSB);
  let hue = map(this.lifeSpan, 255 , 0, 0, 46);
  fill(this.lifeSpan, hue, this.lifeSpan);
  //fill(hue, this.lifeSpan, this.lifeSpan, this.lifeSpan);
  noStroke();
  ellipse(this.pos.x, this.pos.y, this.r, this.r);
}

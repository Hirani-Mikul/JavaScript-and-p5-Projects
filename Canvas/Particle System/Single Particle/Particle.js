let Particle = function (pos) {
    this.pos = pos.copy();
    this.vel = createVector(random(-1, 1), random(-1, 0));
    this.acc = createVector(0, 0.05);
    this.size = 10;
    this.timeToLive = 255;
}
Particle.prototype.run = function () {
    this.update();
    this.display();
};
Particle.prototype.isDead = function () {
  return (this.timeToLive < 0);
}
Particle.prototype.update = function () {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.timeToLive -= 2;
};
Particle.prototype.display = function () {
  fill(255, 255, 0, this.timeToLive);
  stroke(255, 255, 255, this.timeToLive);
  ellipse(this.pos.x, this.pos.y, this.size, this.size);
}

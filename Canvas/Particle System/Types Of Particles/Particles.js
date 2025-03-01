let Particle = function (pos_) {
    this.pos = pos_.copy();
    this.vel  = createVector(random(-1, 1), random(-2, 0));
    this.acc = createVector(0, 0.05);
    this.size = 10;
    this.timeToLive = 255;
};
Particle.prototype.run = function () {
  this.update();
  this.display();
};
Particle.prototype.update = function () {
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.timeToLive -= 2;
};
Particle.prototype.isDead = function () {
  return (this.timeToLive < 0);
};
Particle.prototype.display = function () {
    colorMode(HSB);
    let hue = map(this.timeToLive, 255, 0, 0, 43);
    fill(hue, 255, 255, this.timeToLive);
    //stroke(255, 0, 0, this.timeToLive);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
};

let Particle2 = function (pos_) {
  Particle.call(this, pos_)
}
Particle2.prototype = Object.create(Particle.prototype);
Particle2.prototype.display = function () {
  colorMode(HSB);
  let hue = map(this.timeToLive, 255, 0, 100, 0);
  fill(hue, 255, 255, this.timeToLive);
  push();
  translate(this.pos.x, this.pos.y);
  rectMode(CENTER);
  let theta = map(this.pos.y, 0, height, 0, TWO_PI * 2);
  rotate(theta);
  fill(hue, 255, 255, this.timeToLive);
  //stroke(0, 255, 255, this.timeToLive);
  rect(0, 0, this.size, this.size);
  pop();
};

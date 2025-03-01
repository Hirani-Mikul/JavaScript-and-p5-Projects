let Particle2 = function (pos) {
  Particle.call(this, pos);
}
Particle2.prototype = Object.create(Particle.prototype);
Particle2.prototype.display = function () {
  push();
  translate(this.pos.x, this.pos.y);
  let theta = map(this.pos.y, 0, height, 0, TWO_PI);
  rotate(theta);
  rectMode(CENTER);
  fill(255, 255, 0, this.lifeSpan);
  rect(0, 0, this.mass * this.scale, this.mass * this.scale);
  pop();
}

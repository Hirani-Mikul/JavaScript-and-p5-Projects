let Attractor = function (x, y, m, g) {
  this.pos = createVector(x, y);
  this.mass = m;
  this.G = g; // Gravitational attraction between two bodies strength.
};
Attractor.prototype.display = function () {
  fill(255, 255, 0);
  noStroke();
  ellipse(this.pos.x, this.pos.y, this.mass * 10, this.mass * 10);
};
Attractor.prototype.attract = function (mover) {
  let force = p5.Vector.sub(this.pos, mover.pos);
  let distance = force.mag();
  distance = constrain(distance, 5, 25);
  force.normalize();
  let strength = (this.G * this.mass * mover.mass) / (distance * distance);
  force.mult(strength);
  return force;
};

let Repeller = function (pos) {
  this.power = 300;
  this.pos = pos.copy();
  this.r = 50;
}
Repeller.prototype.calculateRepullsion = function (p) {
  let dir = p5.Vector.sub(this.pos, p.pos);
  let dist = dir.mag();
  dir.normalize();
  dist = constrain(dist, 1, 100);
  let force = -1 * this.power / (dist * dist);
  dir.mult(force);
  return dir;
}
Repeller.prototype.display = function () {
  push();
  translate(this.pos.x, this.pos.y);
  fill(255, 0, 0);
  ellipse(0, 0, this.r, this.r);
  pop();
}

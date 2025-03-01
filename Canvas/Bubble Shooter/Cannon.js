let Cannon = function () {
  this.x = width/2;
  this.y = height - 30;
  this.size = 50;
  this.angle = -PI/2;
  this.aVel = 0.01;
}
Cannon.prototype.turn = function (dir) {
  this.angle = constrain(this.angle, -PI, 0);
  this.angle += this.aVel * dir;
}
Cannon.prototype.shoot = function () {
  let angle = this.angle;
  let force = createVector(cos(angle), sin(angle));
  return force;
}
Cannon.prototype.displayStorage = function () {
  push();
  translate(this.x, this.y);
  rotate(this.angle);
  fill(255, 150, 50);
  ellipse(0, 0, (65/100) * this.size, (65/100) * this.size);
  fill(0, 0, 0);
  ellipse(0, 0, (45/100) * this.size, (45/100) * this.size);
  fill(255, 0, 0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, (-36/100) * this.size, (10/100) * this.size, (34/100) * this.size, 5);
  rect(0, (36/100) * this.size, (10/100) * this.size, (34/100) * this.size, 5);
  pop();
}
Cannon.prototype.display = function () {
  push();
  translate(this.x, this.y);
  rotate(this.angle);
  strokeWeight(3);
  fill(0, 255, 255, 0);
  bezier((60 / 100) * this.size, (-40/100) * this.size, -this.size, -this.size, -this.size, this.size, (60 / 100) * this.size, (40/100) * this.size);
  rectMode(CENTER);
  fill(255, 255, 0);
  strokeWeight(3);
  rect((70/100) * this.size, 0, (35/100) * this.size, (90/100) * this.size, 20);
  strokeWeight(2);
  fill(0, 255, 0, 100);
  ellipse((70/100) * this.size, 0, (30/100) * this.size, (80/100) * this.size);
  fill(255, 0, 0, 200);
  ellipse((70/100) * this.size, 0, (20/100) * this.size, (50/100) * this.size);
  pop();
}

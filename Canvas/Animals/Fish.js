let Fish = function (x, y) {
  Creature.call(this, x, y);
  this.r = 100;
  this.angle = 0;
}
Fish.prototype = Object.create(Creature.prototype);
Fish.prototype.display = function () {
  this.angle = this.velocity.heading() - TWO_PI;
  push();
  translate(this.position.x, this.position.y);
  rotate(this.angle);
  //noFill();
  fill(255, 0, 0);
  stroke(0, 0, 0);
  strokeWeight(4);
  // Curved area
  bezier(0, -70, 40, -50, 40, 50, 0, 70);
  // Upper Line
  bezier(0, -70, -70, -70, -90, -20, -100, 10);

    // Lower lines

  bezier(0, 70, -30, 80, -40, 70, -60, 60);

  // Upper Line
  line(-100, 10, -110, 25);

  // Lips
  bezier(-60, 30, -170, 10, -105, 70, -60, 30);
  bezier(-110, 45, -120, 70, -70, 60, -60, 30);
  // Lower
  bezier(-60, 60, -70, 70, -90, 70, -100, 60);

  // Eyes
  fill(255, 255, 255);
  ellipse(-80, -30, 40, 40);
  ellipse(-30, -30, 40, 40);

  // EyeBalls
  ellipse(-75, -30, 10, 10);
  ellipse(-35, -30, 10, 10);

  // BackPart
  //noFill();
  fill(255, 0, 0);
  bezier(0, -70, 30, -70, 50, -60, 80, -20);
  bezier(80, -20, 90, -10, 110, -60, 130, -90);
  bezier(130, -90, 150, -100, 110, -60, 140, -20);

  bezier(140, -20, 150, -10, 150, 0, 140, 20);

  bezier(0, 70, 30, 70, 50, 60, 80, 20);
  bezier(80, 20, 90, 10, 110, 60, 130, 90);
  bezier(130, 90, 150, 100, 110, 60, 140, 20);
  //bezier(0, 70, 40, 70, 70, 60, 100, 20);

  fill(0, 0, 0);
  strokeWeight(1);
  ellipse(0, 0, 10, 10);
  pop();
}

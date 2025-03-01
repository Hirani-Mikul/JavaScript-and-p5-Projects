let Creature = function () {
  this.position = createVector(random(width), random(height));
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.Health = 100;
  this.angle = 0;
  this.isAlive = true;
  this.isEaten = false;
  this.speed = 5;
  this.Alpha = 255;
  this.Age = 10;
  this.Type = "A";
}
Creature.prototype.checkEdges = function () {}
Creature.prototype.isDead = function () {
  return (this.Health < 0 || this.age > 50 || this.isEaten);
}
Creature.prototype.getFood = function (f) {
  var foodPos = f.position.copy();
  var dir = p5.Vector.sub(foodPos, this.position);
  dir.normalize();
  this.acceleration = dir;
}
Creature.prototype.update = function () {
  this.Alpha = (255/100) * this.Health;
  this.velocity.add(this.acceleration);
  this.velocity.limit(this.speed);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
  this.Health = constrain(this.Health, 0, 100);
  this.Health--;
}
Creature.prototype.collision = function () {}

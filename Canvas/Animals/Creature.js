let Creature = function (x, y) {
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.health = 100;
  this.isAlive = true;
}
Creature.prototype.die = function () {
  if (this.health < 0) {
    this.isAlive = false;
  }
}
Creature.prototype.Food = function (food) {
  //var foodPos = createVector(food.x, food.y);
  var foodPos = food.copy();
  var dir = p5.Vector.sub(foodPos, this.position);
  dir.normalize();
  this.acceleration = dir;
}
Creature.prototype.update = function () {
  //var food = food.copy();
  this.velocity.add(this.acceleration);
  this.velocity.limit(5);
  this.position.add(this.velocity);
}

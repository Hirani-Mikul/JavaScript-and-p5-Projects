let Asteroid = function (x, y, w, h, img, health) {
  this.pos = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.angle = 0;
  this.aVel = random(-0.01, 0.01);//0.005;
  this.img =  img;
  this.width = w;
  this.health = health;
  this.height = h;
  this.isHit = false;
}
Asteroid.prototype.afterHit = function () {
    this.img = img4;
    this.width = 50;
    this.height = 50;
}
Asteroid.prototype.update = function () {
  this.vel.mult(2);
  this.vel.limit(2);
  this.pos.add(this.vel);
}
Asteroid.prototype.checkCollision = function (other) {
  return (this.pos.x + this.width/3 > other.pos.x - other.width/3 && this.pos.x - this.width/3 < other.pos.x + other.width/3 && this.pos.y + this.height/3 > other.pos.y - other.height/3 && this.pos.y - this.height/3 < other.pos.y + other.height/3);
}
Asteroid.prototype.checkEdges = function () {
  // if (this.pos.x - this.width/2 > width) {
  //   this.pos.x = 0 - this.width/2;
  // } else if (this.pos.x + this.width/2 < 0) {
  //   this.pos.x = width + this.width/2;
  // }
  // if (this.pos.y - this.height/2 > height) {
  //   this.pos.y = 0 - this.height/2;
  // } else if (this.pos.y + this.height/2 < 0) {
  //   this.pos.y = height + this.height/2;
  // }
  // if (this.pos.x - this.width/2 > width || this.pos.x + this.width/2 < 0 || this.pos.y - this.height/2 > height || this.pos.y + this.height/2 < 0) {
  //   this.pos.set(0, 0);
  //   this.vel.mult(-1);
  // }
  let ans = floor(random(2));
  if (this.pos.x - this.width/2 > width || this.pos.x + this.width/2 < 0 ) {
    this.vel = p5.Vector.random2D();
    if (ans === 0) {
      this.pos.x = 0 - this.width/2;
      this.pos.y = random(height);
    } else {
      this.pos.x = width + this.width/2;
      this.pos.y = random(height);
    }
  } else if (this.pos.y - this.height/2 > height || this.pos.y + this.height/2 < 0) {
    this.vel = p5.Vector.random2D();

    if (ans === 0) {
      this.pos.y = 0 - this.height/2;
      this.pos.x = random(width);
    } else {
      this.pos.y = height + this.height/2;
      this.pos.x = random(width);
    }
  }
}
Asteroid.prototype.display = function () {
  push();
  translate(this.pos.x, this.pos.y);
  rotate(this.angle);
  imageMode(CENTER);
  image(this.img, 0, 0, this.width, this.height);
  this.angle += this.aVel;
  pop();
}

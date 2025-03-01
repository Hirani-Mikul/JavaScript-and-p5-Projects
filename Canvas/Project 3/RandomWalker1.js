let walker;
function setup() {
  createCanvas(600, 600);
  background(100);
  walker = new Walker();
}
function draw() {
  walker.display();
  walker.walk();
}

var Walker = function () {
  this.x = width/2;
  this.y = height/2;
};
Walker.prototype.display = function () {
  stroke(0, 0, 0);
  point(this.x, this.y);
};
Walker.prototype.walk = function () {
  // var choice = floor(random(4));
  // if (choice === 0) {
  //   this.x++;
  // } else if (choice === 1) {
  //   this.x--;
  // } else if (choice === 2) {
  //   this.y++;
  // } else {
  //   this.y--;
  // }
  let stepX = random(-1, 1);
  let stepY = random(-1, 1);
  this.x += stepX;
  this.y += stepY;
};

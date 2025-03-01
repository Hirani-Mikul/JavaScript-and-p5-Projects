// Colors
let red;
let blue;
let green;
let yellow;
let lightBlue;
let white;
let col = [];


let keys = [];
let shooter;
let bubbles = [];
function setup() {
  createCanvas(600, 600);
  angleMode(RADIANS);
  shooter = new Cannon();
  findColor();
}

let findColor = function () {
  red = color(255, 0, 0);
  pink = color(255, 0, 255);
  green = color(0, 255, 0);
  yellow = color(255, 255, 0);
  lightBlue = color(0, 255, 255);
  white = color(255, 255, 255);
  col = [red, pink, green, yellow, lightBlue, white];
}


function keyPressed () {
  keys[keyCode] = true;
  if (keys[32]) {
    createBubbles();
    shootBubble();
  }
}
function keyReleased () {
  keys[keyCode] = false;
}
let createBubbles = function () {
  let randNum = floor(random(6));
  let fCol = col[randNum];
  bubbles.push(new Bubble(shooter.x, shooter.y, fCol));
}
let shootBubble = function () {
  for (var i = 0; i < bubbles.length; i++) {
    if (!bubbles[i].isShot) {
      bubbles[i].applyForce(shooter.shoot());
    }
    bubbles[i].isShot = true;
  }
}
let turnCannon = function () {
  if (keys[37]) {
    shooter.turn(-1);
  } else if (keys[39]) {
    shooter.turn(1);
  }
}
let displayBubbles = function () {
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].hangOnWall();
    bubbles[i].update();
    bubbles[i].edges();
    bubbles[i].display();
  }
}
let hangBubble = function () {
  for (var i = 0; i < bubbles.length; i++) {
    for (var j = 0; j < bubbles.length; j++) {
      if (i != j && bubbles[i].collide(bubbles[j])) {
        bubbles[j].hang();
        bubbles[i].hang();
      }
    }
  }
}
function draw() {
  background(0, 0, 255, 200);
  turnCannon();
  shooter.displayStorage();
  hangBubble();
  displayBubbles();
  shooter.display();
}

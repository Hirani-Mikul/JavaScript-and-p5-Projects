let ship;
let keys = [];
let ps;
function keyPressed () {
  keys[keyCode] = true;
}
function keyReleased () {
  keys[keyCode] = false;
}
function setup() {
  createCanvas(600, 600);
  angleMode(RADIANS);
  ship = new Rocket();
  ps = new ParticleSystem();
}
let shipThrust = function () {
  if (keys[38]) {
    ship.thrust();
    ship.thrusting = true;
  } else {
    ship.thrusting = false;
  }
}
let turnShip = function () {
  if (keys[37]) {
    ship.turn(-1);
  } else if (keys[39]) {
    ship.turn(1);
  }
}
function draw() {
  background(0, 0, 0);
  turnShip();
  shipThrust();
  ship.update();
  ship.edges();
  ship.display();

}

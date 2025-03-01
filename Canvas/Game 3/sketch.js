function preload () {
  img = loadImage("Images/shipssmall.png"); // Ship Image
  img2 = loadImage("Images/thrust.png"); // Thrust Image
  img3 = loadImage("Images/asteroidbig.png"); // Big Asteroid
  img4 = loadImage("Images/asteroidsmall.png"); // Small Asteroid
  img5 = loadImage("Images/asteroidtiny.png");
}
function setup() {
  let cnv = createCanvas(600, 600);
  angleMode(RADIANS);
  startGame();
}

let startGame = function () {
  score = 0;
  Health = MaxHealth;
  createGameObject();
  createAsteroids();
};

let createGameObject = function () {
  ship = new Rocket(width / 2, height / 2);
};

function draw() {
  background(0, 0, 0);
  collision();
  drawBullets();
  drawAsteroids();
  drawShip();
  drawScore();
  //manageHealth();
  drawHealth();
  if (ship.die) {
    restartGame();
  }
  //  restartGame();
  //text(ship.isHit, 300, 300);


}

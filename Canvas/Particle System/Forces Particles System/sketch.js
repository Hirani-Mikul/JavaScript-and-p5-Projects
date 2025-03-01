let ps;
let gravity;
let wind;
let repeller;
let repeller2;
function setup() {
  createCanvas(600, 600);
  angleMode(RADIANS);
  wind = createVector(0.1, 0);
  gravity = createVector(0, 0.1);
  ps = new ParticleSystem(createVector(width/2, 20));
  repeller = new Repeller(createVector(width/2, height/3));
  repeller2 = new Repeller(createVector(width/3, height/1.8));
}

function draw() {
  background(0, 0, 255);
  //ps.applyForce(wind);
  repeller.display();
  repeller2.display();
  ps.applyRepeller(repeller);
  ps.applyRepeller(repeller2);
  ps.applyGravity();
  ps.update();
  ps.addParticles();
}

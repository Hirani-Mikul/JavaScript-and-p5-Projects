let system;
function setup() {
  createCanvas(600, 600);
  system = new ParticleSystem(createVector(width/2, 30));
}

function draw() {
  colorMode(RGB);
  background(0, 0, 255);
  system.update();
  system.addParticles();

  textSize(20);
  fill(0, 255, 255);
  text(floor(frameRate()), 20, 20);
}

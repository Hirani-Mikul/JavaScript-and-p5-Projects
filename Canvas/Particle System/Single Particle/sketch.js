let p;
function setup() {
  createCanvas(400, 400);
  p = new Particle(createVector(width/2, 10));
}

function draw() {
  background(0, 0, 255);
  p.run();
  if (p.isDead()) {
    p = new Particle(createVector(width/2, 10));
  }
}

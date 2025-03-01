let ps;
let ps2;
let run = true;
let systems = [];

function setup() {
  createCanvas(600, 600);
  ps = new ParticleSystem(createVector(width / 2, 10));
  ps2 = new ParticleSystem(createVector(width / 2 + 100, 10));
}

function keyPressed() {
  if (keyCode === 32) {
    systems.push(new ParticleSystem(createVector(mouseX, mouseY)));
  }
}

function draw() {
  background(0, 0, 255);
  ps.run();
  ps2.run();
  if (run) {
    ps.addNewParticles();
    ps2.addNewParticles();
  }
  for (var i = 0; i < systems.length; i++) {
    systems[i].run();
    if (run) {
      systems[i].addNewParticles();
    }
  }
  fill(255, 255, 0);
  noStroke();
  textSize(25);
  textAlign(LEFT, TOP);
  text("No. Of Particles: " + ps.particles.length, 10, 30);
  text("No. Of Particles: " + ps2.particles.length, 10, 60);
}

function mousePressed() {
  run = !run;
}

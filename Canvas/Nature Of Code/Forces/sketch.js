function setup() {
  createCanvas(600, 600);
  startAll();
}
function draw() {
  background(100);
  assignSliders();
  if (attractorStatus) {
    attractor.display();
  }

  for (var i = 0; i < movers.length; i++) {
    let attractForce = attractor.attract(movers[i]);
    if (attractorStatus) {
      movers[i].applyForce(attractForce);
    }
    gravity.set(0, movers[i].mass * valGravity);
    wind.set(valWind, 0);
    createFrictionForce(movers[i]);
    let dragForce = liquid.calculateDragForce(movers[i]);
    if (gravityStatus) {
      movers[i].applyForce(gravity);
    }
    if (windStatus) {
      movers[i].applyForce(wind);
    }
    if (frictionStatus) {
      movers[i].applyForce(friction);
    }
    if (liquid.contains(movers[i])) {
      if (dragForceStatus && displayWater) {
        movers[i].applyForce(dragForce);
      }
    }
    movers[i].update();
    if (!attractorStatus) {
      movers[i].checkWalls();
    }
    movers[i].display();
  }

  if (displayWater) {
    liquid.display();
  }
  displayActiveForces();
  showForceValue();
}
function keyPressed() {
  if (keyCode === 32) {
    let col = color(random(255), random(255), random(255));
    movers.push(new Mover(mouseX, mouseY, moverSize, col));
  }
}

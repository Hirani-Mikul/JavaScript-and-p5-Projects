let activateWindForce = function () {
  windStatus = !windStatus;
};

let activateGravityForce = function () {
  gravityStatus = !gravityStatus;
};

let activateFrictionForce = function () {
  frictionStatus = !frictionStatus;
};

let activateDragForce = function () {
  dragForceStatus = !dragForceStatus;
};

let deactivateAllForces = function () {
  windStatus = false;
  gravityStatus = false;
  frictionStatus = false;
  dragForceStatus = false;
  displayWater = false;
  attractorStatus = false;
};

let drawWaterBody = function () {
  displayWater = !displayWater;
};

let showAttractor = function () {
  attractorStatus = !attractorStatus;
};

let createFrictionForce = function (m) {
  let c = valFriction; // Constant dragForce. How the surface and the object react with each other.
  let normalForce = 1;
  let frictionMag = c * normalForce;
  friction = m.vel.copy();
  friction.normalize();
  friction.mult(-1);
  friction.mult(frictionMag);
  return friction;
};

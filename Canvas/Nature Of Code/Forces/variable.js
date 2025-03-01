let movers = [];
let attractor;
let gravity;
let wind;
let friction;
let windBtn,
  frictionBtn,
  gravityBtn,
  fluidDragForcebtn,
  clearAllForce,
  waterShow,
  resetBtn,
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  addAttractor;
let windStatus = false;
let gravityStatus = false;
let frictionStatus = false;
let dragForceStatus = false;
let displayWater = false;
let attractorStatus = false;
let liquid = [];
let valDrag, valWind, valFriction, valGravity;
let defaultValue1 = 0.01;
let defaultValue2 = 0.1;
let incAmt = 0.01;
let moverSize;

let createTextParagraph = function () {
  let title = createP("Forces");
  title.position(20, 0);
  title.style("font-size", "40px");
  title.style("color", "red");
  title.style("font-weight", "bold");
  title.style("font-family", "ink free");
  let amount = createP("Strength");
  amount.position(200, 0);
  amount.style("font-size", "40px");
  amount.style("color", "red");
  amount.style("font-weight", "bold");
  amount.style("font-family", "ink free");

  let moverSizeText = createP("Adjust Movers Size");
  moverSizeText.position(1100, 10);
  moverSizeText.style("font-size", "20px");
  moverSizeText.style("color", "red");
  moverSizeText.style("font-weight", "bold");
  moverSizeText.style("font-family", "calibri");
};
let addSliders = function () {
  // DragForce
  slider1 = createSlider(0, 0.5, defaultValue1, incAmt);
  slider1.position(200, 290);
  //WindForce
  slider2 = createSlider(0, 1, defaultValue1, incAmt);
  slider2.position(200, 110);
  // GravityForce
  slider3 = createSlider(0, 1, defaultValue2, incAmt);
  slider3.position(200, 230);
  // FrictionForce
  slider4 = createSlider(0, 1, defaultValue1, incAmt);
  slider4.position(200, 165);
  // MoverSize
  slider5 = createSlider(1, 15, 2, 1);
  slider5.position(1110, 70);
};

let assignSliders = function () {
  valDrag = slider1.value();
  liquid.c = valDrag;
  valWind = slider2.value();
  valFriction = slider4.value();
  valGravity = slider3.value();
  moverSize = slider5.value();
};

let createLiquidSurface = function () {
  liquid = new Liquid(0, height / 2, width, height / 2, valDrag);
};

let createAttractor = function () {
  attractor = new Attractor(width / 2, height / 2, 10, 1);
};
let showForceValue = function () {
  textFont("calibri", 20);
  fill(0, 255, 255);
  text("Wind: " + valWind, 10, 20);
  text("Friction: " + valFriction, 10, 45);
  text("Gravity: " + valGravity, 10, 70);
  text("DragForce: " + valDrag, 10, 95);
  text("MoverSize: " + moverSize, 10, 120);
};

let startAll = function () {
  createTextParagraph();
  addSliders();
  createLiquidSurface();
  createMovers();
  createAttractor();
  createForces();
  createBtns();
  btnAction();
};

let resetSketch = function () {
  movers = [];
  createMovers();
  deactivateAllForces();
};

let createForces = function () {
  gravity = createVector(0, 0);
  wind = createVector(valWind, 0);
};

let createBtns = function () {
  windBtn = createButton("Wind");
  windBtn.position(10, 100);
  frictionBtn = createButton("Friction");
  frictionBtn.position(10, 160);
  gravityBtn = createButton("Gravity");
  gravityBtn.position(10, 220);
  fluidDragForcebtn = createButton("DragForce");
  fluidDragForcebtn.position(10, 280);
  clearAllForce = createButton("ClearForces");
  clearAllForce.position(10, 340);
  waterShow = createButton("AddWater");
  waterShow.position(10, 400);
  resetBtn = createButton("Reset");
  resetBtn.position(10, 520);

  addAttractor = createButton("Attractor");
  addAttractor.position(10, 460);
};
let btnAction = function () {
  windBtn.mousePressed(activateWindForce);
  frictionBtn.mousePressed(activateFrictionForce);
  gravityBtn.mousePressed(activateGravityForce);
  fluidDragForcebtn.mousePressed(activateDragForce);
  clearAllForce.mousePressed(deactivateAllForces);
  waterShow.mousePressed(drawWaterBody);
  resetBtn.mousePressed(resetSketch);
  addAttractor.mousePressed(showAttractor);
};

let createMovers = function () {
  for (var i = 0; i < 1; i++) {
    let x = width / 2;
    let y = 20;
    let m = random(2, 3);
    movers[i] = new Mover(x, y, m);
  }
};

let displayActiveForces = function () {
  if (windStatus) {
    windBtn.style("background-color", "green");
    windBtn.style("color", "orange");
  } else {
    windBtn.style("background-color", "rgba(75, 235, 75, 0.719)");
    windBtn.style("color", "rgba(26, 3, 228, 0.856)");
  }
  if (frictionStatus) {
    frictionBtn.style("background-color", "green");
    frictionBtn.style("color", "orange");
  } else {
    frictionBtn.style("background-color", "rgba(75, 235, 75, 0.719)");
    frictionBtn.style("color", "rgba(26, 3, 228, 0.856)");
  }
  if (gravityStatus) {
    gravityBtn.style("color", "orange");
    gravityBtn.style("background-color", "green");
  } else {
    gravityBtn.style("background-color", "rgba(75, 235, 75, 0.719)");
    gravityBtn.style("color", "rgba(26, 3, 228, 0.856)");
  }
  if (dragForceStatus) {
    fluidDragForcebtn.style("background-color", "green");
    fluidDragForcebtn.style("color", "orange");
  } else {
    fluidDragForcebtn.style("background-color", "rgba(75, 235, 75, 0.719)");
    fluidDragForcebtn.style("color", "rgba(26, 3, 228, 0.856)");
  }
  if (displayWater) {
    waterShow.style("background-color", "green");
    waterShow.style("color", "orange");
  } else {
    waterShow.style("background-color", "rgba(75, 235, 75, 0.719)");
    waterShow.style("color", "rgba(26, 3, 228, 0.856)");
  }
  if (attractorStatus) {
    addAttractor.style("background-color", "green");
    addAttractor.style("color", "orange");
  } else {
    addAttractor.style("background-color", "rgba(75, 235, 75, 0.719)");
    addAttractor.style("color", "rgba(26, 3, 228, 0.856)");
  }
};

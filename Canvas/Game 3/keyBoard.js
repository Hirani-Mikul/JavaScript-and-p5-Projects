function keyPressed () {
    keys[keyCode] = true;
    triggerShooting();
}
function keyReleased () {
  keys[keyCode] = false;
}
function mousePressed () {
  //triggerShooting();
}

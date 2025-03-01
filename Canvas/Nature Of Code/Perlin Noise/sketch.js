let t = 0;
function setup() {
  createCanvas(600, 600);
  background(100);
}

function draw() {
  let n = noise(t);
  let x = map(n, 0, 1, 0, width);
  rect(0, t * 100, x, 1);
  t += 0.01;
}

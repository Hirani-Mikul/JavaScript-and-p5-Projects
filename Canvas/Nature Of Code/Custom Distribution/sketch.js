function setup() {
  createCanvas(600, 600);
  background(100);

  run();
}
let monteCarlo = function () {

  while (true) {
    let r1 = random(1);
    let probability = r1;
    let r2 = random(1);
    if (r2 < probability) {
      return r1;
    }
  }
}
function run () {
  for (let i = 0; i < 10; i++) {
    fill(200, 32, 100);
    let num = monteCarlo();
    let radius = num * 30;
    ellipse(num * 400, 300, radius, radius);
  }
}
function draw() {


}

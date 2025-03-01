// Two Dimension Perlin Noise.
function setup () {
  createCanvas(600, 600);

}
let zOff = 0;
function draw () {
  let xOff = 0;
  for (var x = 0; x < 100; x++) {
    let yOff = 0;
    for (var y = 0; y < 100; y++) {
      let bright = map(noise(xOff, yOff, zOff), 0, 1, 0, 255);
      stroke(bright, bright, bright);
      point(x, y);
      yOff += 0.01;
    }
    xOff += 0.01;
  }
  zOff += 0.01;
}

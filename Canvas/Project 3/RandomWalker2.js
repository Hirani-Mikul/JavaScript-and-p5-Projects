let randomCount;

let rectWidth;

function setup () {
  createCanvas(600, 600);

  randomCount = new Array();
  for (var i = 0; i < 20; i++) {
    randomCount[i] = 0;
  }
  rectWidth = floor(width/randomCount.length);

}
function draw () {
    background(100);
  noStroke();
  var index = floor(random(randomCount.length));
  randomCount[index]+= 10;

  for (var i = 0; i < randomCount.length; i++) {
    fill(255, 100, 100);
    rect(i * rectWidth, height - randomCount[i], rectWidth - 1, randomCount[i]);
    fill(0, 0, 0);
    text(i, i * rectWidth + 5, height - 15);
  }

}

let spinningBall = function () {
  push();
  translate(x, y);
  rotate(angle);
  imageMode(CENTER);
  image(ballImg2, 0, 0)
  angle+= 0.02;

  let ballWidth = ballImg2.width/2.5; // Half Of The Ball Image Width
  let ballHeight = ballImg2.height/3; // Half Of The Ball Image Height
  // CheckEdges
    if (x > width - ballWidth || x < ballWidth) {
      dx = -dx;
    } else if (y > height - ballHeight || y < ballHeight) {
      dy = -dy;
    }
    x += dx;
    y += dy;
  pop();
}

let textScreen1 = function () {
  textSize(40);
  fill(255, 0, 0);
  text("°°°·.°·..·°¯°·._.· ʷᗴｌⓒᵒ𝓂ᵉ ·._.·°¯°·.·° .·°°°", 300, 50);

  fill(20, 41, 227);
  text("꧁꧁Ħ𝓪𝓥乇 Ƒυ𝓝!!!!꧂꧂", 300, 150);

  fill(200, 100, 0);
  stroke(0, 0, 255);
  strokeWeight(2);
  text("E   ҉   n   ҉   j   ҉   o   ҉   y   ҉", 300, 250);
}
let scene1 = function () {
  currentScene = 1;
  background(19, 205, 212, 100);
  spinningBall();
  drawButtons();
  textScreen1();
  if (currentScene === 3) {
    helpScene();
  }
}
let scene2 = function () {
  currentScene = 2;
  isStart = true;
  //background(100);
  //background(backgroundImg);
  if (img === undefined) {
    background(100);
  } else {
    imageMode(CENTER);
    image(img, 300, 300);
  }
  drawGame();

  if (!bricks.length || !lives) {
    clear();
    isOver = true;
  }

}
let winScene = function () {
  currentScene = 4;
  background(0, 100, 0, 5);
  fill(255, 100, 100);
  noStroke();
  textAlign(CENTER, CENTER);
  textFont("gabriola", 100);
  text("Congratulation", 300, 60);
  if (Levels[Levels.length -1].isFinished && currentLevel === Levels.length -1) {
    textSize(50);
    text("You Completed All The Levels", 300, 160);
  } else {
    text("You Win", 300, 160);
  }
  fill(0, 255, 255);
  textFont("ink free", 50);
  text("Your Score Is:  " + score, 300, 260);
  //text(score, 300, 350);
  imageMode(CENTER);
  image(imgwin, 300, 450, 300, 300);
  if (currentLevel < Levels.length - 1) {
    btn6.show(480, 400);
  }
  btn5.show(480, 450);
}
let loseScene = function () {
  currentScene = 5;
  background(100, 0, 0, 2);
  noStroke();
  textAlign(CENTER, CENTER);
  fill(0, 255, 200, 5);
  textSize(100);
  text(":(", 300, 60);
  textSize(70);
  text("[̲̅S][̲̅o][̲̅r][̲̅r][̲̅y][̲̅!][̲̅!][̲̅!]", 300, 160);
  textSize(50);
  fill(0, 255, 100, 5);
  text("𝓨𝓸𝓾 𝓛𝓸𝓼𝓽!!", 300, 220);
  text("☜😲 ＴŕЎ 𝐀𝓰𝐀ĮＮ? ♠♗", 300, 280);
  imageMode(CENTER);
  image(imglose, 250, 450);
  textFont("gabriola", 100);
  btn7.show(480, 400);
  btn5.show(480, 450);
}
let helpScene = function () {
  currentScene = 3;
  imageMode(CENTER);
  image(canvas, width/2, height/2 + 150);
  canvas.background(196, 154, 63, 50);
  canvas.strokeWeight(20);
  canvas.noFill();
  canvas.stroke(255, 0, 255, 100);
  canvas.rect(0, 0, canvas.width, canvas.height, 10);
  //canvas.textSize(30);
  canvas.noStroke();
  canvas.fill(100, 25, 255);
  canvas.textAlign(CENTER, CENTER);
  canvas.textFont("ink free", 30);
  canvas.text("Hello!!", canvas.width/2, 30);
  canvas.textFont("papyrus", 20);
  canvas.fill(200, 219, 180);
  canvas.text("Break All The", canvas.width/2, 90);
  canvas.text("Bricks To", canvas.width/2, 120);
  canvas.text("Complete The", canvas.width/2, 150);
  canvas.text("Levels...", canvas.width/2, 180);
  canvas.stroke(145, 245, 118, 10);
  canvas.strokeWeight(10);
  canvas.line(15, canvas.height/2 + 45, canvas.width - 15, canvas.height/2 + 45);
  canvas.noStroke();
  canvas.text("Don't Lose", canvas.width/2, 220);
  canvas.text("Lives!!!", canvas.width/2, 245);
  btn4.show(300, 570);
}
let settingScene = function () {
  currentScene = 6;
  imageMode(CENTER);
  image(img5, 300, 300);
  textFont("papyrus", 50);
  fill(100, 255, 255, 100);
  text("Change Themes", 300, 50);
  textFont("ink free");
  btn8.show(170, 200);
  btn9.show(430, 200);
  btn10.show(170, 300);
  btn11.show(430, 300);
  btn12.show(300, 400);

  btn4.show(300, 100);
}

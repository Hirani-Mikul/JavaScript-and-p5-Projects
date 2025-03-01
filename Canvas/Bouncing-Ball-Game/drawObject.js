  // Ball
let drawBall = function () {
  ball.show();
  ball.update();
  ball.checkEdges();

  if (ball.intersect(paddle)) {
      ball.dy = -ball.dy;
  }

  if (ball.y > height + 200) {
    lives--;
    ball.dy = -ball.dy;
    ball.y = 500;
    ball.x = width/2;
    if (score >= 5) {
      score-= 5;
    }
  }
}

  // Paddle
let drawPaddle = function () {
  let dir = 0;
  if (keyIsDown(37)) {
    dir = -7;
  } else if (keyIsDown(39)) {
    dir = 7;
  }

  paddle.show();
  paddle.update(dir);
}

  // Bricks
let drawBricks = function () {
  for (var i = bricks.length-1; i >= 0; i--) {
      bricks[i].show();
      if (ball.intersect(bricks[i])) {
        ball.dy = -ball.dy;
        bricks.splice(i, 1);
        score+=10;
      }
  }
}

// Draw Levels
let buildLevel = function (level) {
  bricks = [];
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (level[i][j] === 1) {
        let x = j * 120 + 60;
        let y = i * 50 + 70;
        bricks.push(new Brick(x, y));
        minScore = bricks.length;
      }
    }
  }
}

// Display Score and lives

var renderScoreAndLive = function () {
  fill(0, 255, 255);
  noStroke();
  textFont("gabriola", 30);
  textAlign(LEFT, CENTER);
  lives = constrain(lives, 0, numOfLives);
  text("Score: " + score, 10, 25);
  text("Lives: " + lives, 450, 25);
}
let calculateWinningAndLosingState = function () {
    if (isOver && score >= minScore * 7 && lives > 0) {
      currentScene = 4;
      Levels[currentLevel].isFinished = true;

    } else if (isOver) {
      currentScene = 5;
    }
}

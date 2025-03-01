let drawShip = function () {
  ship.update();
  ship.checkEdges();
  //checkShipCollision();
  ship.display();
  turnShip();
  thrustShip();
}
let restartGame = function () {
  startGame();
}
let drawBullets = function () {
  for (var i = bullets.length - 1; i >= 0; i--) {
    if (bullets[i].isShot) {
      bullets[i].lives--;
    }
    bullets[i].update();
    bullets[i].checkEdges();
    bullets[i].display();
      if (bullets[i].lives < 0 || bullets[i].hasHit) {
         bullets.splice(i, 1);
      }
  }
}
let thrustShip = function () {
  if (keys[38] || keys[87]) {
    ship.thrust(1);
    ship.thrusting = true;
  } else{
    ship.thrusting = false;
  } if (keys[40] || keys[83]) {
    ship.stop();
  }
  if (keys[16] || keys[90]) {
    ship.boosting = true;
  } else {
    ship.boosting = false;
  }
}
let turnShip = function () {
  if (keys[37] || keys[65]) {
    ship.turn(-1);
    ship.rightThruster = true;
  } else {
    ship.rightThruster = false;
  }
   if (keys[39]  || keys[68]) {
      ship.turn(1);
      ship.leftThruster = true;
    } else {
      ship.leftThruster = false;
    }
}
let createAsteroids = function () {
  for (var i = 0; i < 5; i++) {
    let xPos = random(width);
    let yPos = random(height);
    asteroids[i] = new Asteroid(xPos, yPos, 80, 80, img3, 3);
  }
}
let createBullets = function () {
    bullets.push(new Bullet(ship.pos));
}
let drawAsteroids = function () {
  for (var i = asteroids.length - 1; i >= 0; i--) {
    asteroids[i].update();
    asteroids[i].checkEdges();
    asteroids[i].display();
    checkShipCollision(i);
    manageHealth(i);
    asteroidCollision(i);
    // asteroidCollision goes here
  }
}
let asteroidCollision = function (i) {
  if (!asteroids[i].isHit) {
  for (var j = asteroids.length - 1; j >= 0; j--) {
    if (i != j && asteroids[i].checkCollision(asteroids[j])) {
      asteroids[i].vel.mult(-1);
      asteroids[j].vel.mult(-1);
    }
  }
}
  if (asteroids[i].isHit) {
    splitAsteroids(i);
  }
}
let checkShipCollision = function (i) {
    if (ship.hit(asteroids[i])) {
      ship.isHit = true;
    } else {
      ship.isHit = false;
    }
}
let manageHealth = function (i) {
  if (ship.isHit) {
        if (asteroids[i].health === 3) {
          Health -= 2;
        } else if (asteroids[i].health === 2) {
          Health -= 1;
        } else {
          Health -= 0.5;
        }
    }
    if (Health <= 0) {
      ship.die = true;
    }
}
let splitAsteroids = function (i) {
      let x = asteroids[i].pos.x;
      let y = asteroids[i].pos.y;
      let xOff = random(30, 50);
      let yOff = random(30, 50);
      if (asteroids[i].health === 2) {
        score += inc_Score_Lrg;
        asteroids.push(new Asteroid(x, y, 50, 50, img4, 2));
        asteroids.push(new Asteroid(x + xOff, y + yOff, 50, 50, img4, 2));
      } else if (asteroids[i].health === 1) {
        score += inc_Score_Mid;
        asteroids.push(new Asteroid(x, y, 50, 50, img5, 1));
        asteroids.push(new Asteroid(x + xOff, y + yOff, 50, 50, img5, 1));
      } else {
        score += inc_Score_Sml;
      }
      asteroids.splice(i, 1);
}
let collision = function () {
  for (var i = 0; i < bullets.length; i++) {
    for (var j = 0; j < asteroids.length; j++) {
      if (bullets[i].hit(asteroids[j])) {
        bullets[i].hasHit = true;
        asteroids[j].health -= 1;
        asteroids[j].isHit = true;
      }
    }
  }
}
let triggerShooting = function () {
    if (keys[32]) {
      if (currentBullet < maxBullets) {
        createBullets();
      for (var i = 0; i < bullets.length; i++) {
        if (!bullets[i].isShot) {
          bullets[i].shoot(ship.angle);
        }
          bullets[i].isShot = true;
      }
    }
      currentBullet = constrain(currentBullet, 0, maxBullets);
      currentBullet++;
    }
}

let drawScore = function () {
  textFont("monospace", 20);
  fill(0, 255, 255);
  textAlign(LEFT, CENTER);
  text("Score: " + score, 20, 20);
}
let drawHealth = function () {
  Health = constrain(Health, 0, Health);
  rectMode(CENTER);
  fill(255, 0, 0);
  rect(width/2, 20, MaxBar, 10);
  rectMode(CORNER);
  let health = map(Health, 0, MaxHealth, 0, MaxBar);
  if (Health > (70/100) * MaxHealth) {
    fill(0, 255, 0);
  } else if (Health > (40/100) * MaxHealth) {
    fill(0, 238, 255);
  } else if (Health > 0){
    fill(217, 255, 0);
  } else {
    fill (255, 0, 0);
  }
  rect(width/2 - 100, 15, health, 10);
  let txt = floor(Health);
  textAlign(CENTER, CENTER);
  text(txt, width/2, 40);
}

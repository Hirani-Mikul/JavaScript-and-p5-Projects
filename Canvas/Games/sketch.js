/*
1. Player object: The player to control
2. Sticks object: to collect
3. Rotten Sticks
*/
let img, img2, img3, img4, img5, img6, img7;
let player;
let grassXs = [];
let stars = [];
let rotStars = [];
let score = 0;
let enemy = [];
let weapons = [];
let health = 100;
let angle = 0;
let wx;
let wy;

function preload() {
  img = loadImage("images/ironmanflying223.png");
  img2 = loadImage("images/flying21.png");
  img3 = loadImage("images/grassblock3.png");
  img4 = loadImage("images/image21.png");
  img5 = loadImage("images/ring21.png");
  img6 = loadImage("images/lokismall.png");
  img7 = loadImage("images/axe5.png");
}

function setup() {
  createCanvas(600, 600);
  startGame();

}

function startGame() {
  player = new Player();

  for (var i = 0; i < 1; i++) {
    let ex = random(-300, -200);
    let ey = player.y;
    let enemySpawn = new enemyPlayer (ex, ey);
    enemy.push(enemySpawn);
  }
  //if (random(1) < 0.5){
  // applyMatrix();
  // for (var i = 0; i < 1; i++) {
  //   // wx = enemy[i].x + 50;
  //   // wy = enemy[i].y + 50;
  //   // wx = 300;
  //   // wy = 300;
  //   translate(enemy[i].x + 50, enemy[i].y + 50);
  //   let weaponSpawn = new weapon(0, 0);
  //   weapons.push(weaponSpawn);
  // }
  // resetMatrix();
//}


  for (var i = 0; i < 15; i++) {
    grassXs.push(i * 48);
  }

  for (var i = 0; i < 50; i++) {
    //let x = random(20, 25);
    let x = random(200, 250);
    let y = random(50, 400);
    let star = new Star(i * x + 600, y);
    stars.push(star);
  }

  for (var i = 0; i < 10; i++) {
    let rx = random(200, 500);
    //let rx = random(100, 101);
    let ry = random(50, 400);
    let rotstar = new rotStar(i * rx + 600, ry);
    rotStars.push(rotstar);
  }
}


function draw() {
  background(153, 217, 234);

  for (var i = 0; i < stars.length; i++) {
    stars[i].show();
    stars[i].x-=3;
    if (stars[i].x < -10) {
      //stars.splice(i, 1);
      stars[i].x = -100;
    }
    if (stars.length > 0) {
      if (player.collision(stars[i])) {
        //stars[i].x = -100;
        stars.splice(i, 1);
        console.log("Stars: " + stars.length);
        score++;

      }


    }



    //if (stars.length > 0) {
    //}
  }
  for (var i = 0; i < rotStars.length; i++) {
    rotStars[i].show();
    rotStars[i].x-=3;
    let x2 = random(200, 300);
    if (rotStars[i].x < -10) {
      rotStars[i].x = i * x2 + 600;
    }

    if (player.collision(rotStars[i])) {
      rotStars[i].x = i * x2 + 600;
      console.log("rotStar: " + rotStars.length);
      score--;
    }
  }

  for (var i = 0; i < grassXs.length; i++) {
    imageMode(CENTER);
    image(img3, grassXs[i], height - 50, 50, 50);
    grassXs[i]--;
    if (grassXs[i] < -50) {
      grassXs[i] = width + 50;
    }

  }
  fill(162, 102, 25)
  rect(0, height - 35, width, 50);

  for (let i = 0; i < enemy.length; i++) {
    enemy[i].show();
    enemy[i].x  += 3;
    if (enemy[i].x > player.x + player.width) {
      enemy[i].x = random(-400, -300);
      enemy[i].y = random(50, 400);
    }
    if (player.collision(enemy[i])) {
      health--;
    }
  }
  player.show();

  // applyMatrix();
  // for (var i = 0; i < weapons.length; i++) {
  //   //translate(enemy[i].x, enemy[i].y + 50);
  //
  //
  //   translate(enemy.x, enemy.y);
  //   rotate(angle);
  //   weapons[i].show();
  //   weapons[i].x += 5;
  //   angle+= 0.2;
  //   //wx+= 10;
  //   if (player.hurt(weapons[i])) {
  //     health--;
  //   }
  //   if (random(1) < 0.01) {
  //   if (wx > width) {
  //     wx = enemy[i].x + 50;
  //     wy = enemy[i].y + 50;
  //     //weapons[i].y = 0;
  //     //wx = 300;
  //     //wy = 300;
  //   }
  // }
  // }
  //
  //
  //
  // resetMatrix();

  if (keyIsDown(38)) {
    player.fly(5);
  } else if (keyIsDown(32)) {
    player.fly(15);
  } else if (keyIsDown(40)) {
    player.fall();
  }
  if (keyIsDown(37)) {
    player.move(-5);
  } else if (keyIsDown(39)) {
    player.move(5);
  }

  textSize(25);
  fill(200, 100, 200);
  text("Score: " + score, 10, 25);
  text("Health: " + health, 10, 50);

  if (stars.length === 0 && score > 40) {
    textSize(40);
    fill(255, 0, 0)
    text("Congratulation You WIN!!", 10, 300);
  } else if (stars.length === 0 && score <= 40) {
    textSize(40);
    fill(255, 0, 0)
    text("Oooh!!! You LOSTTTTTTTT", 10, 300);
  }


}

var Player = function() {
  this.x = 100;
  this.y = height - 100;
  this.height = 100;
  this.width = 50;
  this.img = img;
}
Player.prototype.show = function() {
  imageMode(CORNER);
  this.y = constrain(this.y, 0, height - 150);
  image(this.img, this.x, this.y, this.width, this.height);
}
Player.prototype.fly = function(speed) {
  this.speed = speed;
  this.img = img;
  this.y -= this.speed;
}
Player.prototype.move = function(direction) {
  this.img = img;
  this.x = constrain(this.x, 0, width - this.width);
  this.x += direction;
}
Player.prototype.fall = function() {
  this.img = img2;
  this.y += 5;
}
Player.prototype.collision = function(star) {
  return (this.x + this.width - 10 > star.x && this.x + 20 < star.x + star.width && this.y + 10 < star.y + star.height && this.y + this.height - 15 > star.y);
}
Player.prototype.hurt = function (weapon) {
  return(weapon.x + weapon.width - 10 > this.x  + 5 && weapon.x + 10 < this.x + this.width && weapon.y  > this.y - 10 && weapon.y  + weapon.height < this.y + this.height + 20);
}

var Star = function(x, y) {
  this.x = x;
  this.y = y;
  this.width = 40;
  this.height = 40;
  this.img = img4;
}
Star.prototype.show = function() {
  imageMode(CORNER);
  image(this.img, this.x, this.y, this.width, this.height)
}

var rotStar = function(x, y) {
  this.x = x;
  this.y = y;
  this.width = 40;
  this.height = 40;
  this.img = img5;
}
rotStar.prototype.show = function() {
  imageMode(CORNER);
  image(this.img, this.x, this.y, this.width, this.height);
}
var enemyPlayer = function (x, y) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 100;
  this.img = img6;
}
enemyPlayer.prototype.show = function () {
  imageMode(CORNER);
  this.y = constrain(this.y, 0, height - 150);
  image(this.img, this.x, this.y, this.width, this.height);
}
var weapon = function (x, y) {
  this.x = x;
  this.y = y;
  this.width = 15;
  this.height = 30;
  this.img = img7;
}
weapon.prototype.show = function () {
  imageMode(CORNER);
  image(this.img, this.x, this.y, this.width, this.height);
}

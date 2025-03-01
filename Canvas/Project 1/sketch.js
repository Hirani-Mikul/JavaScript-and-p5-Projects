var img;
var isOver = false;


function preload() {
  img = loadImage("images/image4.png");
  // faces = [
  //   loadImage("images/image1.jpg"),
  //   loadImage("images/image2.png"),
  //   loadImage("images/image3.png"),
  //   loadImage("images/image5.jpg"),
  //   loadImage("images/image6.jpg"),
  //   loadImage("images/image7.jpg"),
  //   loadImage("images/image8.jpg"),
  //   loadImage("images/image9.png"),
  //   loadImage("images/image10.jpg"),
  //   loadImage("images/image11.png")
  // ];
}

function Tile(x, y, face) {
  this.x = x;
  this.y = y;
  this.size = 100;
  this.isFaceUp = false;
  this.isMatch = false;
  this.img = img;
  this.face = face;
  this.col = color(100, 255, 150);
  this.col2 = color(100, 100, 255);
}
Tile.prototype.draw = function() {
  if (this.isInside()) {
    fill(this.col2)
  } else {
    fill(this.col)
  }
  rect(this.x, this.y, this.size, this.size, 10);
  image(this.img, this.x, this.y, this.size, this.size);
  if (this.isFaceUp) {
    this.img = this.face;
  } else {
    this.img = img;
  }

}
Tile.prototype.cascade = function () {
  this.y += random(3, 6);
  this.size = constrain(this.size, 10, 100);
  this.x = constrain(this.x, 10, width - 10);
  this.x += random(-4, 4);
  this.size -= 0.3;
  if (this.y > height + 50) {
    this.y = random(-150, -100);
  }
}
Tile.prototype.isInside = function () {
  return (mouseX > this.x && mouseX < this.x + this.size && mouseY > this.y && mouseY < this.y + this.size);
}
var colCount = 5;
var rowCount = 4;
var tiles = [];
var selected = [];
var faces;
var shuffleArray;


function setup() {
  createCanvas(600, 600);
  restartGame();




}

function restartGame () {
  function shuffleArray (array) {
    var counter = array.length;
    while(counter > 0) {
      var ind = Math.floor(Math.random() * counter);
      counter--;
      var temp = array[counter];
      array[counter] = array[ind];
      array[ind] = temp;
    }
  }


  faces = [
    loadImage("images/image1.jpg"),
    loadImage("images/image2.png"),
    loadImage("images/image3.png"),
    loadImage("images/image5.jpg"),
    loadImage("images/image6.jpg"),
    loadImage("images/image7.jpg"),
    loadImage("images/image8.jpg"),
    loadImage("images/image9.png"),
    loadImage("images/image10.jpg"),
    loadImage("images/image11.png")
  ];


  for (var i = 0; i < 10; i++) {
    var randomInd = floor(random(faces.length));
    var face = faces[randomInd];
    selected.push(face);
    selected.push(face);
    faces.splice(randomInd, 1)
  }

  shuffleArray(selected);

  for (var i = 0; i < colCount; i++) {
    for (var j = 0; j < rowCount; j++) {
      var tileX = i * 120 + 10;
      var tileY = j * 120 + 20;
      var tileFace = selected.pop();
      tiles.push(new Tile(tileX, tileY, tileFace));
    }
  }


}

// function keyPressed () {
//   if (keyCode === 32) {
//     isOver = true;
//   }
//   if (keyCode === 82) {
//     restartGame();
//   }
// }
var flippedTiles = [];
delayStart = null;
var numOfMatches = 0;

function mousePressed () {
  for (var i = 0; i < tiles.length; i ++) {
    var tile = tiles[i];
    if (tile.isInside()) {
      if (flippedTiles.length < 2 && !tile.isFaceUp) {
        tile.isFaceUp = true;
        flippedTiles.push(tile);
        if (flippedTiles.length === 2) {
          if (flippedTiles[0].face === flippedTiles[1].face) {
            flippedTiles[0].isMatch = true;
            flippedTiles[1].isMatch = true;
            flippedTiles.length = 0;
            numOfMatches++;
          }
          delayStart = frameCount;
        }
      }
      loop();
    }
  }

}

function draw() {
  background(100);
  if (delayStart && (frameCount - delayStart) > 30) {
    for (var i = 0; i < tiles.length; i++) {
      var tile = tiles[i];
      if (!tile.isMatch) {
      tile.isFaceUp = false;
    }
    }
    flippedTiles = [];
    delayStart = null;
    noLoop();
  }
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].draw();
    if (isOver) {
      tiles[i].cascade();
    }
  }
  if (numOfMatches === tiles.length/2) {
    isOver = true;
  }

  //image(faces[4], 300, 300, 100, 100);
}

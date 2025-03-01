let tiles = [];
let isOver = false;
let selected = [];
let faces;
var colCount = 5;
var rowCount = 4;
let flippedTiles = [];

function setup() {
  createCanvas(600, 600);
  startGame();

}

function startGame() {

  function shuffleArray(array) {
    var counter = array.length;
    while (counter > 0) {
      var ind = Math.floor(Math.random() * counter);
      counter--;
      var temp = array[counter];
      array[counter] = array[ind];
      array[ind] = temp;
    }
  }

  faces = [
    loadImage("images/image1.jpg"),
    loadImage("images/image3.png"),
    loadImage("images/image4.png"),
    loadImage("images/image5.jpg"),
    loadImage("images/image6.jpg"),
    loadImage("images/image7.jpg"),
    loadImage("images/image8.jpg"),
    loadImage("images/image9.png"),
    loadImage("images/image10.jpg"),
    loadImage("images/image11.png")
  ];

  for (var i = 0; i < 10; i++) {
    let randInd = floor(random(faces.length));
    var face = faces[randInd];
    selected.push(face);
    selected.push(face);
    faces.splice(randInd, 1);
  }

  //shuffleArray(selected);

  for (var i = 0; i < colCount; i++) {
    for (var j = 0; j < rowCount; j++) {
      var tileX = i * 120 + 10;
      var tileY = j * 120 + 20;
      var tileFace = selected.pop();
      tiles.push(new Tile(tileX, tileY, tileFace));
    }
  }

};

function keyPressed() {
  if (keyCode === 32) {
    isOver = true;
  }
  if (keyCode === 67) {
    document.location.reload();
    //startGame();
  }
}

function mousePressed() {
  for (var i = 0; i < tiles.length; i++) {
    if (tiles[i].isInside(mouseX, mouseY)) {
      var tile = tiles[i];
      if (flippedTiles.length < 2 && !tile.isFaceUp) {
        tile.isFaceUp = true;
        flippedTiles.push(tile);
        if (flippedTiles.length === 2) {
          if (flippedTiles[0].face === flippedTiles[1].face) {
            flippedTiles[0].isMatch = true;
            flippedTiles[1].isMatch = true;
            flippedTiles.length = 0;
          }
        }
      }
    }
  }
}


function draw() {
  background(100);
  for (var i = 0; i < tiles.length; i++) {
    let tile = tiles[i];
    if (!tile.isMatch) {
      tile.isFaceUp = false;
      //flippedTiles = [];
    }

  }


  for (var i = 0; i < tiles.length; i++) {
    if (tiles[i].isInside(mouseX, mouseY)) {
      tiles[i].changeColor(color(100, 50, 255));
    } else {
      tiles[i].changeColor(color(100, 255, 150));
    }
    tiles[i].show();
    if (isOver) {
      tiles[i].cascade();
    }
  }
}

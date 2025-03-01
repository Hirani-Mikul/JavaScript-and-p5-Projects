var tiles = [];
function setup () {
  createCanvas(600, 600);
  for (var i = 0; i < 10; i++) {
    var x = random(width);
    var y = random(height)
    tiles.push(new Tile(x, y));
  }
}
function draw () {
  background(100);
    for (let tile of tiles) {
      tile.show();
      tile.move();
      tile.checkPos();
      let overLapping = false;
      for (let other of tiles) {
        if (tile !== other && tile.intersect(other)) {
          overLapping = true;
        }
      }
      if (overLapping) {
        tile.changeColor(150);
      } else {
        tile.changeColor(255);
      }
  }
}

class Tile {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
  }
  show () {
    fill(100, 255, this.bright)
    ellipse(this.x, this.y, this.size);
  }
  move () {
    this.x += random(-5, 5)
    this.y += random(-5, 5)
  }
  checkPos () {
    if (this.x > width || this.x < 0) {
      this.x = random(width);
    } else if (this.y > height || this.y < 0) {
      this.y = random(height);
    }
  }
  intersect (other) {
    var d = dist(this.x, this.y, other.x, other.y);
    return d < this.size/2 + other.size/2;
  }
  changeColor (bright) {
    this.bright = bright;
  }

}

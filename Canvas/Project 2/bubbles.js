let img;
function preload () {
  img = loadImage("image2.png");

}

class Tile  {
  constructor (x, y, face) {
    this.x = x;
    this.y = y;
    this.size = 100;
    this.face = face;
    this.isFaceUp = false;
    this.isMatch = false;
    this.img = img;
  }
  changeColor (col) {
    this.col = col;
  }
  show () {
    fill(this.col);
    rect(this.x, this.y, this.size, this.size, 10);
    image(this.img, this.x, this.y, this.size, this.size);
    if (this.isFaceUp) {
    this.img = this.face;
  } else {
    this.img = img;
  }
  }
  cascade () {
    this.y += random(3, 6);
    this.size = constrain(this.size, 10, 100);
    this.x = constrain(this.x, 10, width - 10);
    this.x += random(-4, 4);
    this.size -= random(0.3, 0.5);
    if(this.y > height + 50) {
      this.y = random(-150, -100);
    }
  }
  isInside (mx, my) {
    return (mx > this.x && mx < this.x + this.size && my > this.y && my < this.y + this.size);
  }

}

let Button = function (config) {
  this.x = config.x;
  this.y = config.y;
  this.width = config.width || 150;
  this.height = config.height || 30;
  this.label = config.label || "Click";
  this.txtSize = config.txtSize || 20;
  this.col = config.col || color(0, 255, 255);
  this.txtCol = config.txtCol || color(255, 0, 0);
  this.onClick = config.onClick || function () {};
}
Button.prototype.isInside = function (mx, my) {
  return (mx > this.x - this.width/2 && mx < this.x + this.width/2 && my > this.y - this.height/2 && my < this.y + this.height/2);
}
Button.prototype.onClickHandler = function () {
  if (this.isInside(mouseX, mouseY)) {
    this.onClick();
  }
}
Button.prototype.show = function () {
  fill(this.col);
  rectMode(CENTER);
  rect(this.x, this.y, this.width, this.height, 10);
  fill(this.txtCol);
  textSize(this.txtSize);
  textAlign(CENTER, CENTER);
  text(this.label, this.x, this.y);
}

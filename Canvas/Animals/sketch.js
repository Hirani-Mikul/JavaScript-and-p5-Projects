let fish;
let food;
let lasting = 100;
function setup() {
  createCanvas(1200, 600);
  angleMode(RADIANS);
  fish = new Fish(width/2, height/2);
  food = createVector(random(width), random(height));
}
let updateFood = function () {
  if (lasting < 0) {
    lasting = 100;
    food.x = random(width);
    food.y = random(height);
  }
}
function draw() {
  background(0, 105, 255);
  lasting--;
  updateFood();
  fill(0, 255, 0);
  ellipse(food.x, food.y, 10, 10);
  fish.Food(food);
  fish.update();
  fish.display()
}

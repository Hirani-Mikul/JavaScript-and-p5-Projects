let btn1, btn2, btn3, btn4, btn5;
let img1, img2, img3, img4, img5;

function preload () {
    img1 = loadImage("Images/water.jpg");
    img2 = loadImage("Images/space.jpg");
    img3 = loadImage("Images/LandScape.jpg");
    img4 = loadImage("Images/marine.jpg");
    img5 = loadImage("Images/space3.png");

}
let img;
function setup() {
  createCanvas(600, 600);
  img = img5;
  constructButton();
}
let constructButton = function () {
  btn1 = new Button({
    x: 200,
    y: 200,
    label: "UnderWater",
    width: 200,
    height: 100,
    txtSize: 35,
    onClick: function () {
      img = img1;
    }
  });
  btn2 = new Button({
    x: 450,
    y: 200,
    label: "Space",
    width: 200,
    height: 100,
    col: color(0, 0, 0, 150),
    txtCol: color(0, 255, 0),
    txtSize: 35,
    onClick: function () {
      img = img2;
    }
  });
  btn3 = new Button({
    x: 200,
    y: 350,
    label: "LandScape",
    width: 200,
    height: 100,
    col: color(0, 255, 0),
    txtCol: color(0, 0, 255),
    txtSize: 35,
    onClick: function () {
      img = img3;
    }
  });
  btn4 = new Button({
    x: 450,
    y: 350,
    label: "Marine",
    width: 200,
    height: 100,
    col: color(0, 0, 255, 50),
    txtCol: color(255, 0, 255),
    txtSize: 35,
    onClick: function () {
      img = img4;
    }
  });

  btn5 = new Button({
    x: 300,
    y: 500,
    label: "Reset",
    width: 150,
    height: 50,
    col: color(255, 255, 0, 80),
    txtCol: color(111, 3, 252),
    txtSize: 35,
    onClick: function () {
      img = img5;
    }
  });
}
function backImg () {
  imageMode(CENTER);
  image(img, 300, 300);
}
function draw() {
  backImg();
  //background(100);
  btn1.show();
  btn2.show();
  btn3.show();
  btn4.show();
  btn5.show();

}
function mousePressed () {
  btn1.onClickHandler();
  btn2.onClickHandler();
  btn3.onClickHandler();
  btn4.onClickHandler();
  btn5.onClickHandler();
}

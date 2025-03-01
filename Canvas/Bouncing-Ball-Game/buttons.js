let createButtons = function () {
  // Play Button
  btn1 = new Button ({
    label: "🅿🅻🅰🆈",
    width: 180,
    height: 45,
    txtSize: 30,
    col: color(255, 10, 50, 255),
    col2: color(0, 255, 0, 100),
    onClick: function () {
      isStart = true;
      currentScene = 2;
    }
  });

  // Help Button

  btn2 = new Button ({
    label: "Help",
    width: 150,
    height: 35,
    txtSize: 30,
    col: color(20, 227, 220),
    col2: color(237, 137, 50, 150),
    onClick: function () {
      currentScene = 3;
    }
  });
  // Setting Button
  btn3 = new Button ({
    label: "Settings",
    width: 120,
    height: 35,
    txtSize: 30,
    col: color(20, 41, 227),
    col2: color(18, 143, 196, 100),
    onClick: function () {
      currentScene = 6;
    }
  });
  // Back Button
  btn4 = new Button ({
    label: "Back",
    width: 100,
    height: 25,
    txtSize: 20,
    col: color(20, 41, 227),
    col2: color(18, 143, 196, 100),
    onClick: function () {
      currentScene = 1;
    }
  });
  // Main-Menu
  btn5 = new Button ({
    label: "Main-Menu",
    width: 150,
    height: 35,
    txtSize: 30,
    col: color(200, 20, 20),
    col2: color(0, 100, 0, 5),
    strokeCol: color(0, 0, 0),
    onClick: function () {
      menu();

      //currentScene = 1;
    }
  });
  // Next Level
  btn6 = new Button ({
    label: "Next Level",
    width: 150,
    height: 35,
    txtSize: 30,
    col: color(200, 200, 0),
    col2: color(0, 100, 0, 5),
    strokeCol: color(0, 0, 0),
    onClick: function () {
      //restartLevel();
      nextLevel();
      restartLevel();
    }
  });

  // Restart Button
  btn7 = new Button ({
    label: "Restart",
    width: 150,
    height: 35,
    txtSize: 30,
    col: color(200, 200, 0),
    col2: color(0, 100, 0, 5),
    strokeCol: color(0, 0, 0),
    onClick: function () {
      //console.log("Restart");
      restartLevel();
    }
  });

  btn8 = new Button ({
    label: "Marine",
    width: 200,
    height: 50,
    txtSize: 40,
    col: color(0, 255, 0),
    col2: color(0, 0, 255, 50),
    strokeCol: color(0, 0, 0),
    onClick: function () {
      img = img1;
    }
  });

  btn9 = new Button ({
    label: "Water",
    width: 200,
    height: 50,
    txtSize: 50,
    col: color(20, 0, 255),
    col2: color(0, 200, 255, 100),
    strokeCol: color(255, 0, 255, 10),
    onClick: function () {
      img = img3;
    }
  });

  btn10 = new Button ({
    label: "Space",
    width: 200,
    height: 50,
    txtSize: 40,
    col: color(200, 0, 0),
    col2: color(20, 20, 0),
    strokeCol: color(0, 0, 255),
    onClick: function () {
      img = img2;
    }
  });

  btn11 = new Button ({
    label: "Forest",
    width: 200,
    height: 50,
    txtSize: 40,
    col: color(200, 0, 0),
    col2: color(0, 255, 10, 100),
    strokeCol: color(0, 0, 0),
    onClick: function () {
      img = img4;
    }
  });

  btn12 = new Button ({
    label: "Reset",
    width: 200,
    height: 50,
    txtSize: 40,
    col: color(200, 0, 255),
    col2: color(50, 0, 0),
    strokeCol: color(0, 0, 0),
    onClick: function () {
      img = undefined;
    }
  });
}

// Draw The Buttons

let drawButtons = function () {
  btn1.show(300, 440);
  btn2.show(300, 490);
  btn3.show(300, 540);
}

// Perform Action When User Clicks Inside The Button

let buttonsAction = function () {
  if (currentScene === 1) {
    btn1.onClickHandler();
    btn2.onClickHandler();
    btn3.onClickHandler();
  } else if (currentScene === 2) {
    btn5.onClickHandler();
    btn7.onClickHandler();
  } else if (currentScene === 3) {
    btn4.onClickHandler();
  } else if (currentScene === 4) {
    btn5.onClickHandler();
    if (currentLevel < Levels.length - 1) {
      btn6.onClickHandler();
    }
  } else if (currentScene === 5) {
    btn5.onClickHandler();
    btn7.onClickHandler();
  } else if (currentScene === 6) {
    btn4.onClickHandler();
    btn8.onClickHandler();
    btn9.onClickHandler();
    btn10.onClickHandler();
    btn11.onClickHandler();
    btn12.onClickHandler();
  }
}

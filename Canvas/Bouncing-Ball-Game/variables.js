
let brickImg, ballImg, ballImg2, imglose, imgwin, backgroundImg; // Images
let img, img1, img2, img3, img4, img5; // Background Images
let ball, paddle, bricks; // Variables For The Objects In The Game
let col = 5; // Number Of Columns For Bricks
let row = 4; // Number Of Row For Bricks
let numOfLives = 3;
let lives = numOfLives; // Lives For Player
let score = 0; // Score For Tracking User Performance
let minScore; // For Performing Win Check
let currentScene = 1; // Keeps Track Of The Scenes That Are Currently Displayed
let btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, bnt12; // All Buttons
let angle = 0; // Angle For Spinnig The Ball
let x = 300; // X Position Of The Ball On The HomeScreen
let y = 300; // Y Position Of The Ball On The HomeScreen
let dx = 4; // Velocity Of The Ball Horizonatal Direction
let dy = 6; // Velocity Of The Ball Vertical Direction
let isOver = false; // Check If The Game Is Over.
let isStart = false; // Check If The Game Has Started.
let isPaused = false; // To Pause The Game

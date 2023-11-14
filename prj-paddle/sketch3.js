var ballX = 75;
var ballY = 75;
var ballSpeedX = 5;
var ballSpeedY = 7;

const BRICK_W = 80;
const BRICK_H = 20;
const BRICK_GAP = 2;
const BRICK_COLS = 10;
const BRICK_ROWS = 14;
var brickGrid = new Array(BRICK_COLS * BRICK_ROWS);
var bricksLeft = 0;

const PADDLE_WIDTH = 120;
const PADDLE_THICKNESS = 10;
const PADDLE_DIST_FROM_EDGE = 60;
var paddleX = 400;

function setup(){
    createCanvas(800, 800);

   // brickReset();
    //ballReset();
}
function draw() {
    background(100);
    fill(255,0,0);
    rect(0,0, height,width); // clear screen

    fill(0)
    circle(ballX,ballY, 30); // draw ball

    fill(0);
    rect(paddleX, height-PADDLE_DIST_FROM_EDGE,
        PADDLE_WIDTH, PADDLE_THICKNESS,10);

    //drawBricks();
}
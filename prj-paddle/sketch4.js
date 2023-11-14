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

     brickReset();
     ballReset();
}
function draw() {
    background(100);
    fill(255)
    circle(ballX,ballY, 30); // draw ball
    fill(255);
    rect(paddleX, height-PADDLE_DIST_FROM_EDGE,
        PADDLE_WIDTH, PADDLE_THICKNESS,10);

    text("Total Bricks : "+bricksLeft,100,10);
    drawBricks();
}
function brickReset() {
    bricksLeft = 0;
    var i;
    for(i=0; i< 3*BRICK_COLS; i++) {
        brickGrid[i] = false;
    }
    for(; i<BRICK_COLS * BRICK_ROWS; i++) {
        brickGrid[i] = true;
        bricksLeft++;
    } // end of for each brick
} // end of brickReset func
function ballReset() {
    ballX = width/2;
    ballY = height/2;
}
function drawBricks() {

    for(var eachRow=0; eachRow < BRICK_ROWS; eachRow++) {
        for(var eachCol=0; eachCol < BRICK_COLS; eachCol++) {

            var arrayIndex = rowColToArrayIndex(eachCol, eachRow);

            if(brickGrid[arrayIndex]) {
                fill(0, 0, 255);
                rect(BRICK_W * eachCol, BRICK_H * eachRow, BRICK_W - BRICK_GAP, BRICK_H - BRICK_GAP);
            }// end of is this brick here
        } // end of for each brick
    } // end of for each row

} // end of drawBricks func
function rowColToArrayIndex(col, row) {
    return col + BRICK_COLS * row;
}
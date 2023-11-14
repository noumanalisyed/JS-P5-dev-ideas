let ballRadius = 48;
let ballX = 100;
let ballY = 100;
let ballXSpeed = 2.5;
let ballYSpeed = 2;
let paddleLength = 150;
let paddleWidth = 20;
let paddlePositionX = 400;
let paddlePositionY = 465;
let no;
let colors = [ "Red","Yellow","Green","Blue","Pink","Magenta"];


function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(100,120,221);

  // Add the current speed to the position.
  ballX = ballX + ballXSpeed;
  ballY = ballY + ballYSpeed;

  if ((ballX > width) || (ballX < 0)) {
    ballXSpeed = ballXSpeed * -1;
  }
  if ((ballY > height) || (ballY < 0)) {
    ballYSpeed = ballYSpeed * -1;
  }

  // Display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(ballX, ballY, ballRadius, ballRadius)
  no = random(6);
  paddlePositionX = mouseX;
  for (let i = 50; i < 750; i+=50) {
      createBrick(i,100,50,20,colors[no]);
  }

  createPaddle(paddlePositionX,paddlePositionY,paddleLength,paddleWidth);

  text("ball location (x , y , radius) = ( "+(ballX+" , "+ballY+" , " + ballRadius)+" )",100,20,"Bold");
  text("Paddleb location (x,y,width,height) = ("+(paddlePositionX+","+paddlePositionY+","+paddleWidth+","+paddleLength)+")",350,20);

  checkCollision(ballY,paddlePositionY,paddleLength);
}

function createPaddle(xPos,yPos,length,width){
  rect(xُPos,yPos,length,width,5);
}

function checkCollision(by,pdy,pdl){
  if(((by ) >= (pdy) ) && ((by ) <= (pdy + pdl))){
    ballYSpeed = ballYSpeed * -1;
  }
}

function createBrick(xPos,yPos,length,width,color){
  fill(color);
  rect(xPos,yPos,length,width);
}


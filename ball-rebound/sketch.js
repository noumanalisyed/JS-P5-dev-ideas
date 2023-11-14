

let circleX = 100;
let circleY = 100;
let bgColor = 255;
let xStep = 1;
let yStep = 1;
let xDirection = 1;
let yDirection = 1;

function setup() {
  createCanvas(800, 800);

}
function mousePressed(){
  circleX = 100;
  circleY = 100;
  bgColor = 255;
}

function draw() {

  background(bgColor);
  noStroke();
  fill(255,45,78);
  circle(circleX,circleY,100);
  circleX = circleX + xStep * xDirection;
  circleY = circleY + yStep * yDirection;

  textSize(100);
  text(bgColor, 600, 100);
  if(bgColor > 0){
    bgColor = bgColor - 1;
  }
  else {
    bgColor = 255;
  }
  if(circleX > 800){
    xDirection = -1;
  }else if(circleX < 0){
    xDirection = 1;
  }
  if(circleY > 800){
    yDirection = -1;
  }else if(circleY < 0){
    yDirection = 1;
  }
}

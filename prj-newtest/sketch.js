

let circleX = 100;
let circleY = 100;
let redColor = 0;
let greenColor = 0;
let blueColor = 0;
let xDirection = 1;
let yDirection = 1;
function setup() {
  createCanvas(800, 800);

}

function draw() {
  redColor = mouseX;
  background(51);
  noStroke();
  fill(redColor,greenColor,blueColor);
  // introduction of mouseX and mouseY system variables
  circle(circleX,circleY,100);
  circleX = circleX + 1 * xDirection;
  circleY = circleY + 1 * yDirection;

  if(circleX > width){
    xDirection = -1;
  }
  else if( circleX < 0){
    xDirection = 1;
  }
  if(circleY > height){
    yDirection = -1;
  }
  else if(circleY < 0 ){
    yDirection = 1;
  }

}
function mousePressed(){
  circleY = 100;
  circleX = 100;
}

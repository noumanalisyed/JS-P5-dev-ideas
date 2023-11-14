

let circleX = 100;
let circleY = 100;
let bgColor = 255;
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
  circleX = circleX + 1;
  circleY = circleY + 1;

  textSize(100);
  text(bgColor, 50, 50);
  bgColor = bgColor - 1;
}

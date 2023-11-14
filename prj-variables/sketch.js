
let circleX = 100;
function setup() {
  createCanvas(800, 800);

}
function mousePressed(){
  circleX = 100;
}

function draw() {

  background(51);
  noStroke();
  fill(255);
  circle(circleX,200,100);
  circleX = circleX + 1;
}


function setup() {
  createCanvas(800, 600);
}

function draw() {
  fill(mouseX,mouseY);
  circle(mouseX,mouseY,20);
}

function mousePressed(){
  background(150);
}


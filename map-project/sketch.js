
let redColor =0;
let greenColor =0;
let blueColor =0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  redColor =  map(mouseX,0,width,0,255);
  blueColor =  map(mouseX,0,width,0,255);
  greenColor =  map(mouseY,0,width,0,255);
  background(redColor,greenColor,blueColor);
  ellipse(mouseX, mouseY, 48, 48);
}

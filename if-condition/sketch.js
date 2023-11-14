
let circleX = 100;
let flag = true;
let redColor = 0;
let blueColor = 0;
let greenColor = 0;
function setup() {
    createCanvas(800, 800);
}
function mousePressed(){
    circleX = 100;
    alert("mouse pressed");
    flag = false;
    redColor = 255;
    fill(redColor,greenColor,blueColor);
}

function draw() {
    circleX = mouseX;
    background(255);
    noStroke();
    if(flag == true)
        fill(255)
    let gCol = mouseY;
    redColor = map(mouseX, 0, width, 0, 255);
    greenColor = map(gCol, 0, width, 0, 255);
    blueColor = map(mouseY, 0, width, 0, 255);

    fill(redColor, greenColor, blueColor);
    text("Red Color : "+redColor,100,100);
    text("Green Color : "+greenColor,100,180);
    text("Blue Color : "+blueColor,100,230);
    circle(circleX,400,100);
}



let x = 0;
let y = 400;

function setup() {
    createCanvas(800, 800);
}

function draw() {
    // No trails!
    background(0);
    fill(255, 0, 0);
    stroke(255);
    if(mouseX > 250){
        rect(300,200,80,40);
    }
    else if(mouseX > 150){
        ellipse(300,200,80,40);
    }
    else if(mouseX > 50){
        line(0,0,800,800,);
    }

}
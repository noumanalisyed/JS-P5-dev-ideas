

function setup() {
    createCanvas(600, 300);
} // end setup

function draw() {
    background(159, 189, 237);// rgb  0-255

    // pretty sky
    for(var i=0; i<=200; i+=5){
        strokeWeight(5);
        stroke(255-i,128-i,64);
        line(0,200-i,width,200-i); // x,y,x,y
    }

    // sun
    noStroke();
    fill(250,186, 3);
    ellipse(200,(100+frameCount/10),30,30); 1
    //text(frameCount,200,150);

    // mountains
    fill(77, 61, 18);
    triangle(38,208,102,63,145,200);
    triangle(107,208,142,105,223,200);

    // cloud
    fill(255,255,255,50);
    ellipse(frameCount/4,150,40,20);

    // Green Ground
    noStroke();
    fill(0,100,0);// rgb
    rect(0,200,width,200);

    // tree 1
    fill(67, 51, 8); // tree brown
    rect(320,194,10,20); // trunk
    fill(23, 69, 29);
    ellipse(326,172,20,20);// tree top
    ellipse(324,192,30,20);
    ellipse(330,182,20,20);

    // tree 2
    push();
    translate(-40,-40);
    scale(1.5);
    fill(67, 51, 8); // tree brown
    rect(320,194,10,20); // trunk
    fill(23, 69, 29);
    ellipse(326,192,20,20);// tree top
    ellipse(324,172,30,20);
    ellipse(330,182,20,20);
    pop();

    mouseLocation();
} // end draw

function mouseLocation(){
    fill(255);
    text(("x: " + mouseX),20,10);
    text(("y: " + mouseY),20,20);
} // end mouseLocation

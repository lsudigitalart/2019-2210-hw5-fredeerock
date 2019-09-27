function setup() {
  // Put things you want to run once in here. 
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

}

function draw() {
  // Put things you want to over and over here. 
  // background(100);

  push();
  translate(mouseX, mouseY);
  rotate(mouseX);
  ellipse(0, 0, 100, 50);
  pop();

  scale(5);
  translate(100, 100);
  circle(0, 0, 10);
}
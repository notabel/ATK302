var peppa;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  peppa = loadImage("assets/pepper.jpg");
}

function draw() {
  background("blue");
  rotateZ(radians(rotationZ));
  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
  rect(windowWidth, windowHeight, 300);
  fill("yellow");
  ellipse(20,20);
}

var peppa;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  peppa = loadImage("assets/pepper.jpg");
}

function draw() {
  background("white");
  rotateZ(radians(rotationZ));
  text(RotationZ, width/2, height/2);
  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
}

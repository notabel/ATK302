var peppa;

function setup() {
  createCanvas(100, 100, WEBGL);
  peppa = loadImage("assets/pepper.jpg");
}

function draw() {
  background(peppa);
  rotateZ(radians(rotationZ));
  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
  box(200, 200, 200);
}

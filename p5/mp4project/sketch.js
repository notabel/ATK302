var peppa;
var trochut;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  peppa = loadImage("assets/pepper.jpg");
  myF = loadFont("assets/fontss/Trochut-Regular.ttf");
}

function draw() {
  background("white");
  push();
  rotateZ(radians(rotationZ));
  box(200, 200, 200);

  pop();
  fill("black");
  text(rotationZ, width / 2, height / 2);

  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
}

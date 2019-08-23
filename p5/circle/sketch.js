function setup() {
  // put setup code here
  createCanvas(500, 500);
}

function draw() {
  // put drawing code here

  ellipse(mouseX, mouseY, 99, 17) ;
}

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(820, 900);
  background(0);
  noStroke();

  fill(204);
  triangle(18, 18, 18, 360, 81, 360);

  fill(102);
  rect(81, 81, 63, 63);

  fill(204);
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill(255);
  ellipse(222, 144, 72, 72);

  fill(204);
  triangle(288, 18, 351, 360, 288, 360);

  fill(255);
  arc(400, 500, 20, 290, PI, TWO_PI);
}

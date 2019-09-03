function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  background('#ffe285');
  noStroke();

  fill(204,87,87);
  triangle(18, 18, 18, 360, 81, 360);

  fill(102,99,220);
  rect(81, 81, 63, 63);

  fill(204);
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill('orange');
  ellipse(252, 144, 72, 72);

  fill('green');
  triangle(288, 18, 351, 360, 288, 360);

  fill(255);
  arc(479, 300, 280, 280, PI, TWO_PI);
}

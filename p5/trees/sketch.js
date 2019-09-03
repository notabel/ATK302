function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);

}


function draw() {

  background('#91daff');
  noStroke();

  fill('#fff091');
  ellipse(601, 75, 100, 100);

  fill(255);
  arc(656, 227, 280, 280, PI, TWO_PI);

  fill('white');
  ellipse(679, 120, 100, 100);

  fill('white');
  ellipse(599, 130, 120, 60);

  fill('white');
  ellipse(518, 197, 120, 60);

  fill('white');
  ellipse(547, 174, 140, 60);

  fill('#823800');
  rect(220, 210, 60, 200);

  fill('green');
  triangle(109, 244, 397, 240, 243, 20);
  //
  // fill(204,87,87);
  // triangle(18, 18, 18, 360, 81, 360);
  //
  // fill(102,99,220);
  // rect(81, 81, 63, 63);
  //
  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);
  //
  // fill('orange');
  // ellipse(252, 144, 72, 72);
  //
  // fill('green');
  // triangle(288, 18, 351, 360, 288, 360);
  //
  // fill(255);
  // arc(479, 300, 280, 280, PI, TWO_PI);
  fill(255) ;
  text(mouseX + ',' + mouseY,30,30)
}

function mouseReleased() {
  console.log(text(mouseX + ',' + mouseY,30,30)) ;
}

var score = 0 ;

function setup() {
  // put setup code here
  createCanvas(800,500);
}

function draw() {

    //ellipse(mouseX, mouseY, 50, 50);

}

function mouseReleased() {
  background(100);
  fill(random(255),random(255),0);
  ellipse(mouseX, mouseY, 90, 10)
  textSize(50);
  text(score, 30, 60);
//background(random(255),random(255),random(255));

score++ ;
}

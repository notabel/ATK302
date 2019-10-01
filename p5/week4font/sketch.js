var modak ;
var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800)
  modak = loadFont('assets/Modak-Regular.ttf') ;
}

function draw() {
  // put drawing code here
  background(100) ;
  textFont(modak, 120) ;

  fill('lightblue') ;
  text("help", x, 150) ;
  x += 260;
  if (x > width) {
    x = 0;
  }

  textSize(30) ;
  text("from irene", 20, 250) ;
}

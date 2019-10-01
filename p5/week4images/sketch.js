
var loonaPic;


function setup() {
  // put setup code here
  createCanvas(800, 800)
  loonaPic = loadImage("assets/loonabutterfly.jpeg");
}

function draw() {
  // put drawing code here
  image(loonaPic, 20, 100);
}

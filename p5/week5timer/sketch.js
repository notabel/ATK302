var timer = 200;


function setup() {
  // put setup code here
  createCanvas(800, 800);
  background('black');
}

function draw() {
  // put drawing code here
  timer--; // or timer = timer - 1 ;

  if (timer <= 0) {
    background(random(255), random(255), random(255));
    timer = 200;

  }

}

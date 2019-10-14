var cars = [];
var frogPos ;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  for (var i = 0; i < 100; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width/2, height- 80);
}

function draw() {
  // put drawing code here
  background(100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if(cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }
  // draw the frog
  fill('green') ;
  ellipse(frogPos.x, frogPos.y, 80, 80);
  checkForKeys();
}

function Car() {
  //atttributes
  this.red = random(255);
  this.green = random(255);
  this.blue = random(255);
  this.vel = random(50, 200);
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));

  //methods
  this.display = function() {
    fill(this.red, this.green, this.blue);
    rect(this.pos.x, this.pos.y, 50, 50, 200);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

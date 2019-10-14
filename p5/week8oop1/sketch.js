var myCar1; // declare it
var myCar2;
var myCar3;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  myCar1 = new Car(); // spawn 1 car
  myCar2 = new Car();
  myCar3 = new Car();
}

function draw() {
  // put drawing code here
  background(100);

  fill('#ffcdc9');
  myCar1.display();
  myCar1.drive();

  fill('#fff8c7');
  myCar2.display();
  myCar2.drive();

  fill('#c7d7ff');
  myCar3.display();
  myCar3.drive();
}

function Car() {
  // attributes
  this.x = random(width);
  this.y = random(height);
  this.red = random(255) ;
  this.green = random(255) ;
  this.blue = random(255) ;
  this.vel = random(50, 200);
  //methods
  this.display = function() {
    fill(this.red, this.green, this.blue);
    rect(this.x, this.y, 100, 50, 200);
  }

  this.drive = function() {
    this.x = this.x + this.vel; {
      if (this.x > width)
        this.x = 0;
    }
  }
}

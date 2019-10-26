var playerTwo;
var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaRight, yodaLeft, yodaUp, yodaDown;
var ball;
var balls = [];

function setup() {

  createCanvas(800, 800);

  balls[0] = loadImage("assets/blueballs1.png");
  balls[1] = loadImage("assets/blueballs2.png");
  balls[2] = loadImage("assets/blueballs3.png");
  balls[3] = loadImage("assets/blueballs4.png");

  frameOne = loadImage("assets/frame1mp2.jpg");
  frameTwo = loadImage("assets/frame2mp3.jpg");
  frameFive = loadImage("assets/framethreemp3.png");
  frameThree = loadImage("assets/winframemp3.jpg");
  frameFour = loadImage("assets/loseframemp3.jpg");

  playerTwo = loadFont('assets/PressStart2P-Regular.ttf');

  // spawn cars!!!
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }

  yodaRight = loadImage("assets/yodaRight.gif");
  yodaLeft = loadImage("assets/yodaLeft.gif");
  yodaUp = loadImage("assets/characterup.png");
  yodaDown = loadImage("assets/characterdown.png");
  yoda = yodaRight;

  ball = loadImage("assets/blueballs1.png");

  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {

  switch (myState) {

    case 0: // splash screen
      // welcome to my game, click to start
      background('white');
      image(frameOne, width / 2, height / 2, width, height);
      textFont(playerTwo, 30);
      fill('white');
      text("The Cave", 100, 100);
      text("Click to Proceed", 100, 200);
      break;

    case 1:
      background('white');
      image(frameTwo, width / 2, height / 2, width, height);
      textFont(playerTwo, 11);
      fill('white');
      text("Legend has it that inside the Loonar Cave lies little secrets.", 70, 100);
      text("Little secrets told around the cave.", 70, 150);
      text("And the powerful ones collect together and make little blue flames.", 70, 200);
      text("Waiting to be collected and have their energy harnessed.",70, 250);
      text("Will you help before someone else steals them?", 70, 350);
      fill('red');
      text("Hurry, before they get you first.", 70, 400);
      fill('white');
      text("use the arrow keys to guide the player to catch the flames",70, 500);
      text("before time runs out", 70, 550);
      break;

    case 2: // the game state
      game();
      timer++;
      if (timer > 600) {
        myState = 4;
        timer = 0;
      }
      break;

    case 3: // the win state
      background('white');
      image(frameThree, width / 2, height / 2, width, height);
      textFont(playerTwo, 20);
      fill('white');
      text("You made it. Thank you.", 100, height/2);
      break;

    case 4: // the lose state
      background('white');
      image(frameFour, width / 2, height / 2, width, height);
      textFont(playerTwo, 20);
      fill('red');
      text("You couldn't make it. Try again?", 100, height/2);
      break;
  }
}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 1:
      myState = 2;
      break;

    case 3: // the win state!
      resetTheGame();
      myState = 0;
      break;

    case 4: // the lose myState
      resetTheGame();
      myState = 0;
      break;

  }
}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.ballNum = floor(random(balls.length - 1));
  this.timer = 0;
  this.maxTimer = random(10, 30); // use this for timer code


  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    //    rect(this.pos.x, this.pos.y, 100, 50);
    //    ellipse(this.pos.x - 45, this.pos.y + 25, 50, 50);
    //    ellipse(this.pos.x + 45, this.pos.y + 25, 50, 50);
    //  image(bird, this.pos.x, this.pos.y, 100, 100);
    image(balls[this.ballNum], this.pos.x, this.pos.y, 100, 100);

    this.timer = this.timer + 1;

    if (this.timer > this.maxTimer) {

      this.ballNum = this.ballNum + 1;
      if (this.ballNum > balls.length - 1) this.ballNum = 0;
      this.timer = 0;
    }



  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}


function keyPressed() {
  if (keyCode === LEFT_ARROW) yoda = yodaLeft;
  if (keyCode === RIGHT_ARROW) yoda = yodaRight;
  if (keyCode === UP_ARROW) yoda = yodaUp;
  if (keyCode === DOWN_ARROW) yoda = yodaDown;

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function resetTheGame() {
  cars = [];
  // spawn cars!!!
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  timer = 0;

}


function game() {
  background('white');
  image(frameFive,width / 2, height / 2, width, height);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    // make sure car isn't really close to frog!!!!
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1); // take the car out!!
      // if the car's type is a killer type, myState = 3
    }
  }

  if (cars.length == 0) {
    myState = 3;
  }

  // draw the frog
  fill('green');
  //  ellipse(frogPos.x, frogPos.y, 60, 60);
  image(yoda, frogPos.x, frogPos.y);
  checkForKeys();
}

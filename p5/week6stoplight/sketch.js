let myState = 0 ;
myTimer = 0 ;


function setup() {
  // put setup code here
  createCanvas(800,800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  fill('yellow') ;
  rect(width/2, height/2, 150, 500);

  fill('grey');
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/2, height/2 - 150, 100, 100);
  ellipse(width/2, height/2 + 150, 100, 100);

  switch (myState) {
    case 0:
    fill('green');
    ellipse(width/2, height/2 + 150, 100, 100);

    myTimer++;
    if (myTimer >= 100) {
      myState = 1;
      myTimer = 0;
    }

    break;

    case 1:
    fill('yellow');
    ellipse(width/2, height/2, 100, 100);

    myTimer++;
    if (myTimer >= 100) {
      myState = 2;
      myTimer = 0;
    }
    break;

    case 2:
    fill('red');
    ellipse(width/2, height/2 - 150, 100, 100);

    myTimer++;
    if (myTimer >= 100) {
      myState = 0;
      myTimer = 0;
    }
    break;

  }
}

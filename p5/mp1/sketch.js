function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  background(random(255),random(255),random(255));
  noStroke();
//electric background
if (mouseIsPressed) {


fill(random(255),random(255),random(255));
triangle(288, 18, 351, 360, 288, 360);

fill('yellow');
triangle(400, 50, 351, 360, 288, 360);

fill(random(255),random(255),random(255));
triangle(50, 60, 351, 360, 288, 360);

fill('yellow');
triangle(200, 1, 351, 360, 288, 360);

fill(random(255),random(255),random(255));
triangle(29, 300, 351, 360, 288, 360);

fill('yellow');
triangle(788, 99, 351, 360, 288, 360);

fill(random(255),random(255),random(255));
triangle(600, 300, 351, 360, 288, 360);

fill('yellow');
triangle(455, 700, 351, 360, 288, 360);

fill(random(255),random(255),random(255));
triangle(8, 200, 351, 360, 288, 360);

fill('yellow');
triangle(800, 180, 351, 360, 288, 360);

fill(random(255),random(255),random(255));
triangle(350, 5, 351, 360, 288, 360);

fill('yellow');
triangle(700, 9, 351, 360, 288, 360);

fill(random(255),random(255),random(255));
triangle(590, 12, 351, 360, 288, 360);

fill('yellow');
triangle(500, 20, 351, 360, 288, 360);

fill('yellow');
triangle(60, 400, 351, 370, 288, 360);

fill(random(255),random(255),random(255));
triangle(950, 300, 370, 360, 288, 360);

fill('yellow');
triangle(1000, 600, 370, 360, 400, 360);

fill('yellow');
triangle(1500, 600, 390, 360, 350, 300);

//blue spikes

fill('blue');
triangle(308, 28, 351, 360, 288, 360);

fill(random(255),random(255),random(255));
triangle(550, 70, 351, 360, 288, 360);

fill('blue');
triangle(80, 90, 351, 360, 288, 360);

fill(random(255),random(255),random(255));
triangle(250, 2, 351, 360, 288, 360);

fill('blue');
triangle(49, 400, 351, 360, 288, 360);

fill('blue');
triangle(988, 129, 351, 360, 288, 360);

fill(random(255),random(255),random(255));
triangle(800, 700, 351, 360, 288, 360);

fill('blue');
triangle(655, 900, 351, 360, 288, 360);

fill(random(255),random(255),random(255));
triangle(28, 400, 351, 360, 288, 360);

fill('blue');
triangle(1000, 380, 351, 360, 288, 360);

fill('blue');
triangle(550, 25, 351, 360, 288, 360);

fill(random(255),random(255),random(255));
triangle(900, 29, 351, 360, 288, 360);

fill('blue');
triangle(790, 32, 351, 360, 288, 360);

fill('blue');
triangle(700, 40, 351, 360, 288, 360);

fill('blue');
triangle(80, 600, 351, 370, 288, 360);

fill(random(255),random(255),random(255));
triangle(1150, 500, 370, 360, 288, 360);

fill('blue');
triangle(1200, 300, 370, 360, 450, 370);

fill('blue');
triangle(1700, 800, 300, 330, 350, 300);

//body
  fill('black');
  ellipse(359, 185, 150, 150);

  fill('black');
  arc(360, 350, 280, 280, PI, TWO_PI);
//eyes
  fill('red');
  ellipse(338, 176, 20, 35);

  fill('red');
  ellipse(374, 176, 20, 35);
//pupils
  fill(random(255),random(255),random(255));
  ellipse(374, 176, 10, 15);

  fill(random(255),random(255),random(255));
  ellipse(338, 176, 10, 15);
//body bumps uwu
  fill('black');
  ellipse(268, 352, 96, 35);

  fill('black');
  ellipse(452, 352, 96, 35);

  fill('black');
  ellipse(359, 349, 96, 35);
//angry eyes
  fill('red')
  arc(332, 170, 30, 30, PI, TWO_PI);

  fill('red')
  arc(380, 170, 30, 30, PI, TWO_PI);
//mouth
  fill('red')
  arc(356, 220, 30, 30, PI, TWO_PI);

  
  textAlign(LEFT);
  fill(0);
  text('Late at night when the moon is at its highest point, Dr. Ghostie turns into an evil ghost named Mr. Spook. Mr. Spook terrorizes all in his way, shooting electric bolts at anyone and anything in his way. Wrath is his power and rage is his fuel, all the rage of the seemingly calm Dr. Ghostie is released through his alternate personality. Some say if you look Mr. Spook in the eye, you will cry.', 4, 9);


//Late at night when the moon is at its highest point, Dr. Ghostie turns into an evil ghost named Mr. Spook. Mr. Spook terrorizes all in his way, shooting electric bolts at anyone and anything in his way. Wrath is his power and rage is his fuel, all the rage of the seemingly calm Dr. Ghostie is released through his alternate personality. Some say if you look Mr. Spook in the eye, you will cry.
  } else {
  background('blue');
  noStroke();


// these are the bold outlines of the ghostie uwu
  fill('black');
  ellipse(359, 185, 170, 170);

  fill('black');
  arc(360, 370, 310, 350, PI, TWO_PI);

  fill('black');
  ellipse(268, 360, 96, 35);

  fill('black');
  ellipse(452, 360, 96, 35);

  fill('black');
  ellipse(359, 360, 96, 35);

// these are the actual shapes of the ghostie uwu

  fill('white');
  ellipse(359, 185, 150, 150);

  fill('white');
  arc(360, 350, 280, 280, PI, TWO_PI);

  fill('black');
  ellipse(338, 176, 20, 35);

  fill('black');
  ellipse(374, 176, 20, 35);

  fill('white');
  ellipse(268, 352, 96, 35);

  fill('white');
  ellipse(452, 352, 96, 35);

  fill('white');
  ellipse(359, 349, 96, 35);



  //fill(204);
  //triangle(288, 18, 351, 360, 288, 360);

  //fill(255);
  //arc(376, 299, 280, 280, PI, TWO_PI);
  }
}

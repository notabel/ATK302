let mic;
var myState = 0;
var myTimer = 0;
var scenePic, bioBio, oddeyeCircle, starryMoth;

function setup() {
  // put setup code here
  createCanvas(700, 700);
  mic = new p5.AudioIn();
  mic.start();
  scenePic = loadImage("assets/sceneone.png");
  bioBio = loadImage("assets/allisonbio.png");
  oddeyeCircle = loadImage("assets/oecproject.png");
  starryMoth = loadImage("assets/starrymoth.jpg");
}

function draw() {
  // put drawing code here

let vol = mic.getLevel();

  switch (myState) {
    case 0:

      background(255, 161, 161);
      image(scenePic, 20, 100);

      fill('yellow');
      stroke(0);
      let h = map(vol, 0, .5, height - 50, 0);
      let c = map(vol, 0 , .2, 0, 700);
      fill(c) ;
      ellipse(width /2, h, 100, 100);

      fill('red');
      text("Left click to begin viewing portfolio and to skip ahead. Slides change on their own. Speak to make the circle cheer.", 10, height / 3);
      textSize(13);

      break;

    case 1:
      background('blue');
      image(bioBio, 20, 100);

      fill('yellow');
      stroke(0);


      fill(c) ;
      ellipse(width /2, h, 100, 100);

      fill('black');
      text("character sheet for upcoming mystery webcomic", 50, 50);
      textSize(20);
      myTimer++;
      if (myTimer >= 300) {
        myState = 2;
        myTimer = 0;
      }
      break;


    case 2:
      background('red');
      image(oddeyeCircle, 20, 100);

      fill('yellow');
      stroke(0);

      fill(c) ;
      ellipse(width /2, h, 100, 100);

      fill('white');
      text("Poster idea for supernatural webcomic", 50, 50);
      textSize(20);

      myTimer++;
      if (myTimer >= 300) {
        myState = 3;
        myTimer = 0;
      }
      break;

    case 3:
      background('yellow');
      image(starryMoth, 20, 20);

      fill('yellow');
      stroke(0);

      fill(c) ;
      ellipse(width /2, h, 100, 100);

      fill('yellow');
      text("A Van Gogh take on the famous moth meme", 50, 50);
      textSize(20);
      myTimer++;
      if (myTimer >= 300) {
        myState = 4;
        myTimer = 0;
      }
      break;

    case 4:
      background(189, 223, 255);
      image(scenePic, 20, 100);

      fill('yellow');
      stroke(0);
      
      fill(c) ;
      ellipse(width /2, h, 100, 100);

      fill('red');
      text("A scene taken from my upcoming mystery webcomic. The End.", 50, 50);
      textSize(20);
      myTimer++;
      if (myTimer >= 300) {
        myState = 0;
        myTimer = 0;
      }
      break;


  }

}
  function mouseReleased() {
    myState += 1;
    if (myState > 4) {
      myState = 0;
    }
}

function touchStarted() {
    getAudioContext().resume();
}

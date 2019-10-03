var myState = 0;
var myTimer = 0;
let mic;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  scenePic = loadImage("assets/sceneone.png");
  loonaHi = loadImage("assets/loonahihishowcase.png");
  loonaSelca = loadImage("assets/loonaselca.png");
  favoriteLoona = loadImage("assets/favoriteloonaimage.png");
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  // put drawing code here

  switch (myState) {
    case 0:
      background(255, 161, 161);
      image(scenePic, 20, 100);
      fill('red');
      text("say begin when ready", width / 3, height / 3);
      textSize(20);
      myTimer++;
      if (myTimer >= 300) {
        myState = 1;
        myTimer = 0;

        }

      break;

    case 1:
      background(194, 247, 186);
      image(loonaHi, 20, 100);
      myTimer++;
      if (myTimer >= 300) {
        myState = 2;
        myTimer = 0;
      }
      break;


    case 2:
      background(189, 223, 255);
      image(loonaSelca, 20, 100);
      myTimer++;
      if (myTimer >= 300) {
        myState = 3;
        myTimer = 0;
      }
      break;

    case 3:
      background(189, 223, 255);
      image(favoriteLoona, 20, 100);
      myTimer++;
      if (myTimer >= 300) {
        myState = 4;
        myTimer = 0;
      }
      break;

    case 4:
      background(189, 223, 255);
      image(scenePic, 20, 100);
      myTimer++;
      if (myTimer >= 300) {
        myState = 0;
        myTimer = 0;
      }
      break;


  }

  function touchStarted() {
      getAudioContext().resume();
  }

}

// or myState = (myState + 1) % 3 ;

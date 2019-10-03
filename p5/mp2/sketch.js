var myState = 0;
var myTimer = 0;
let mic;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  scenePic = loadImage("assets/sceneone.png");

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  // put drawing code here

  switch (myState) {
    case 0:
      background(255, 161, 161);
      image(scenePic, 20, 100);
      myTimer++;
      if (myTimer >= 300) {
        myState = 1;
        myTimer = 0;
        let vol = mic.getLevel();
        fill('yellow');
        stroke(0);

        let h = map(vol, 0, .2, height, 0);
          let c = map(vol, 0 , .2, 0, 500);
          fill(c) ;
            background (c, 0 ,0);
        ellipse(width / 2, h - 25, 50, 200);
      }

      break;

    case 1:
      background(194, 247, 186);

      myTimer++;
      if (myTimer >= 600) {
        myState = 2;
        myTimer = 0;
      }
      break;


    case 2:
      background(189, 223, 255);

      myTimer++;
      if (myTimer >= 400) {
        myState = 3;
        myTimer = 0;
      }
      break;

    case 3:
      background(189, 223, 255);

      myTimer++;
      if (myTimer >= 400) {
        myState = 4;
        myTimer = 0;
      }
      break;

    case 4:
      background(189, 223, 255);

      myTimer++;
      if (myTimer >= 300) {
        myState = 5;
        myTimer = 0;
      }
      break;

    case 5:
      background(189, 203, 255);

      myTimer++;
      if (myTimer >= 700) {
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

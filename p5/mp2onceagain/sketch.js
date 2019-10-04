var myState = 0;
var myTimer = 0;
let mic;
var scenePic, bioBio, oddeyeCircle, starryMoth;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  scenePic = loadImage("assets/sceneone.png");
  bioBio = loadImage("assets/allisonbio.png");
  oddeyeCircle = loadImage("assets/oecproject.png");
  starryMoth = loadImage("assets/starrymoth.jpg");
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  // put drawing code here

  switch (myState) {
    case 0:
      


      break;

    case 1:
      background('red');
      image(bioBio, 20, 100);

      myTimer++;
      if (myTimer >= 300) {
        myState = 2;
        myTimer = 0;
      }
      break;


    case 2:
      background('red');
      image(oddeyeCircle, 20, 100);
      myTimer++;
      if (myTimer >= 300) {
        myState = 3;
        myTimer = 0;
      }
      break;

    case 3:
      background('red');
      image(starryMoth, 20, 20);
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

  function mouseReleased() {
    console.log(mouseX + ", " + mouseY);
  }

  function touchStarted() {
    getAudioContext().resume();
  }

}

// or myState = (myState + 1) % 3 ;

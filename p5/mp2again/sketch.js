var myState = 0;
var timer = 0;
let mic;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  // put drawing code here



  switch (myState) {
    case 0:

    let vol = mic.getLevel();
    fill('yellow');
    stroke(0);
    let h = map(vol, 0, .02, height, 0);
      let c = map(vol, 0 , .02, 0, 500);
      fill(c) ;
        background (c, 0 ,0);
    ellipse(width / 2, h - 25, 50, 200);

    vol = mic.getLevel(); // level is between 0 and 1
    vol = vol * 100;

      timer++;
      if (timer > 200) {
        timer = 0;
        myState = 1;

      }
      break;

    case 1:
      timer++;
      if (timer > 200) {
        timer = 0;
        myState = 2;
      }
      break;

    case 2:
      timer++;
      if (timer > 200) {
        timer = 0;
        myState = 3;
      }
      break;

    case 3:
      timer++;
      if (timer > 200) {
        timer = 0;
        myState = 4;
      }
      break;

    case 4:
      timer++;
      if (timer > 200) {
        timer = 0;
        myState = 0;
      }
      break;
  }


}


function mouseReleased() {
  if (myState == 0) {
    myState = 1;
  }

  function touchStarted() {
      getAudioContext().resume();
  }

}

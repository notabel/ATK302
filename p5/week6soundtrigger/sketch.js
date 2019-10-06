let mic;

function setup() {
  createCanvas(710, 200);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  fill('yellow');
  stroke(0);

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, .1, height, 0);
    let c = map(vol, 0 , .1, 0, 500);
    fill(c) ;
      background (c, 0 ,0);
  ellipse(width / 2, h + 25, 20, 20);
}

function touchStarted() {
    getAudioContext().resume();
}

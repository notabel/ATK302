myState = 0;
myTimer = 0;

function setup() {
  // put setup code here
  createCanvas(600, 600);
}

function draw() {
  // put drawing code here

  switch (myState) {

    case 0:
      background(200, 0, 0);
      text("Everybody asks why did the chicken cross the road?", 100, 100);

      myTimer++;
      if (myTimer >= 200) {
        myState = 1;
        myTimer = 0;
      }
      break;

    case 1:
      background('lightblue');
      text("But nobody ever asks how the chicken crossed the road.", 100, 100);

      myTimer++;
      if (myTimer >= 200) {
        myState = 2;
        myTimer = 0;
      }
      break;


  }


}

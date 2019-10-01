var x = 0 ;

function setup() {
  // put setup code here
  createCanvas (200,200);
}

function draw() {
  // put drawing code here
  background(100);
  //rect(x,10,10,10);
  text("ooooooooooooooooooooooooooooooooo", x , 20) ;
  x+= 1 ;

  if (x > 200) {
    x = 0 ;
  }

}

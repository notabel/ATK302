var namesArray = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = 'https://docs.google.com/spreadsheets/d/1ZQEFy01AwOzIP4Jchh183uTKdWkcXtBnPDMyBxXXjY8/edit?usp=sharing'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(1000, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new OneThird(data[i].Name, data[i].Shape));
  }

}


function draw() {
  background('lightblue');

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
  }

}


// my OneThird class
function OneThird(myName, myShape) {
  this.pos = createVector(100, 100);
  this.member = myName;
  this.unit = myShape;

  this.display = function() {

 // put an ellipse here
 if(this.unit== "OneThird") {
 ellipse(this.pos.x, this.pos.y, 100, 100);
}
 text(this.member, this.pos.x, this.pos.y);



  }
}
  function OddEyeCircle(myName, myShape, ) {
    this.pos = createVector(200, 200);
    this.member = myName;
    this.unit = myShape;

    this.display = function() {

  if (this.unit== "OddEyeCircle") {
    rect(this.pos.x, this.pos.y, 100, 100);
  }
  text(this.member, this.pos.x, this.pos.y);
}
}
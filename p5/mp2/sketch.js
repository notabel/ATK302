var myState = 0;
var myTimer = 0;
let mic;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  // put drawing code here

  switch (myState) {
    case 0:
      background(255, 161, 161);
      fill('white');
      textSize(30);
      text("In the small town of Normal, a long time ago, there was a young woman who carried a toad. She loved to heal people with cures from her book, and all would praise her for it. But to all who would ask where she got such a thing, she’d say “Never ask, never look.”", 100, 100);

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
      fill('white');
      textSize(30);
      text("The book was in a language the people have not seen before, and the woman often whispered in tongues. She always spoke to someone not in the room, her laughs often rattled her lungs. But it was not the woman who scared the crowd most, no that was her toad DeLune. The way he stayed perched across from her patients, with eyes boring into their own, they’ve never seen DeLune eat or move, only breathe and never croak.", 100, 100);

      myTimer++;
      if (myTimer >= 600) {
        myState = 2;
        myTimer = 0;
      }
      break;


    case 2:
      background(189, 223, 255);
      fill('white');
      textSize(30);
      text("But there came a day when the woman was out for one of her healing strolls, and a curious boy wandered in. His mother was ill and DeLune kept still, so he searched for a page to make into a scroll. He came upon the book he had seen and heard many rumors of before. With the turn of the lock, the boy couldn’t know, he’d just sealed his fate with the door. His hands flipped the pages, flying past the letters that he could not understand. But the more he tried to read, the more he could hear the people the woman talked to but no one could ever see. They screamed in his head, chanting his name, begging him to give them his life. They wanted the chance to walk Earth again, but the boy could put up a fight. He stumbled through words and past all the screams, only to see DeLune staring at him. Only this time the toad was standing the way a toad never should.", 100, 100);

      myTimer++;
      if (myTimer >= 400) {
        myState = 3;
        myTimer = 0;
      }
      break;

    case 3:
      background(189, 223, 255);
      fill('white');
      textSize(30);
      text("The boy was afraid, for he had never seen such a thing, and that only fed the voices more. DeLune stepped towards him with nothing in his eyes and the boy stumbled back to the floor. The toad bore his teeth as the boy hit the ground and said, “You are not lost, boy, you are found.” The boy screamed in fear when the door broke open and the angry woman appeared. “A witch! You’re a witch! A no good, godless witch!” The boy screamed to her. She froze for a moment and frowned, but it soon turned to a sinister smile. She kneeled down beside him and stared him down, saying. “Why don’t you stay for a while? I will tell you a story, boy, and for you it won’t end well.”", 100, 100);

      myTimer++;
      if (myTimer >= 400) {
        myState = 4;
        myTimer = 0;
      }
      break;

    case 4:
      background(189, 223, 255);
      fill('white');
      textSize(30);
      text("“There once was a book, from the sky it fell, but the text came straight from hell. It fell in my grandmother’s arms, then my mother’s, then mine. It was heavy and dark but contained secret cures, and we used it to heal for a very long time. But to call me a witch, while your mother is sick? I won’t guarantee she’ll be fine. You see the voices are hungry, they want Normals’ souls, but I won’t easily let them. That would come at a cost, a boy who got lost, or to whom someone’s worth more than a gem. So I will give you a choice, little brat, and you must choose wisely. You can stay here and let my friends feed, and the only one lost is a child. Or you can tell all the people what you saw and I will let my friends run wild.” ", 100, 100);

      myTimer++;
      if (myTimer >= 300) {
        myState = 5;
        myTimer = 0;
      }
      break;

    case 5:
      background(189, 203, 255);
      fill('white');
      textSize(30);
      text("And so the town of Normal broke out, because of the fear of a child. The woman did as she promised the boy, letting the demons out and make humans into toys. The people demanded the witch be burned down, in hopes of condemning the ghosts. The darkness puffed back into the house like black smoke, and into the book they came from. But that was exactly what baffled the people, the toad carried the book and emerged from the ashes, reminding the people that things, for now, are just quiet, not done.", 100, 100);

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

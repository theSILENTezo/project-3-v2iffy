var screen = 0;
var font;
//counters
  var score = 0;
  var songTime = 182; //song length = 3min., 2sec. -> 182000 ms -> 182 sec (converter)
  var countDown;    //time limit - amount of time passed (subtraction equation)
//mp3
  var song, intro;
//music note hits
  var right, left, mid; //positions
  var cursor, droplet;  //assets
//music notes spawn
  var spawnTimer = 2000;
  var speed = 10;
  //drop effect
    var x = 200;
    var y = -50;
//backgrounds
  var startup, stage, end;

function preload(){
  //songs/tune
    song = loadSound("sounds/Happy_Little_Clouds.mp3");
    intro = loadSound("sounds/screen_intro.mp3");

  //images
    startup = loadImage("images/bob_ross.jpeg");
    stage = loadImage("images/canvas.jpeg");
    cursor = loadImage("images/bob_ross_head.gif");
    droplet = loadImage("images/cloudy_icon.gif");
    end = loadImage("images/end.jpg");
    counter = loadImage("images/score_counter.gif");

  //text
    font = loadFont("text/CaveatBrush-Regular.ttf");
}

function setup() {
  createCanvas(1200, 630);
  frameRate(60); //sets number of frames displayed
}

function draw() {
  //Screen Switch
    if(screen == 0){
      startScreen();
    } else if(screen == 1){
      playIT();
      //spawnClouds();
    } else if (screen == 2 || countDown < 0){
      countDown = 0;
      song.stop();
      endScreen();
    }
}

function startScreen(){
  background(startup);

  //Title
    fill(237, 198, 24);
    textFont(font);
    textSize(150);
    text('Happy Cloud', 5, 200);
    text('Catcher', 100, 330);

  //"click anywhere" text
    fill(95, 43, 140);
    textFont(font);
    textSize(50);
    text('(Click Anywhere to Begin)', 80, 380);
}

function playIT(){
  background(stage);
  screen = 1;
  
  //spawn beats
    spawnClouds();

   /*
   //Test to see if cloud beats load in
      y+= speed;

      image(droplet, x, y, 50, 30);

      if(y==-50){
        pickRandom();
      }
    */
    //if clouds land in the catcher give points
      if(y>height-50 && x>mouseX-50 && x<mouseX+50){
        y=-50;
        score+= 100;
      }
  
  //score/timer area
    image(counter, width/2 - 190, 10, 400, 200);

  //live score
    textSize(45);
    text("score = " + score, width/2 - 100, 160);
  //Timer
    timer();
    textSize(50);
    fill('red');
    text("Time = " + countDown, width/2 - 90, 100);
  
    //when time reads 0 go to endScreen
      if (screen == 2 || countDown < 0){
      countDown = 0;
      endScreen();
      }
  
  //catcher
    image(cursor, mouseX, height-50, 50, 50); 
}

function endScreen(){
  background(end);
  screen = 2;

  //Text
    textSize(150);
    textAlign(CENTER);
    text('GAME OVER', 570, 180);
    text("Final Score = " + score, 555, height/2 + 25);

  //"click anywhere" text
    fill(237, 198, 24);
    textFont(font);
    textSize(50);
    text('(Click Anywhere to Replay)', 540, 390);
}

function mousePressed(){
  if(screen == 0){
    song.play();
    song.setVolume(0.5);
    screen = 1;
    pickRandom();
  } else if (screen == 2) {
    screen = 0;
  }
}

function scoreBoard(){
  score = 0;
  speed = 2;
  y = -50;
}

function timer(){
    //convert  ms to sec
      var currentTime = int(millis() / 1000);
    //Counts numbers down
      countDown = songTime - currentTime;
}


//spawns the cloud beats into random spots
//from the top then drops them
function pickRandom(){
	x= random(50,width-50)
  print("do it");
}
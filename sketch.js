var screen = 0;
var font;
var button;
//counters
  var score = 0;
  var songTime = 182; //song length = 3min., 2sec. -> 182000 ms -> 182 sec (converter)
  var countDown;    //time limit - amount of time passed (subtraction equation)
//mp3
  var song, intro;
//music note hits
  var right, left, mid; //positions
  var cursor, droplet;  //assets
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
    } else if (screen == 2 || countDown < 0){
      countDown = 0;
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

  //click anywhere text
    fill(95, 43, 140);
    textFont(font);
    textSize(50);
    text('(Click Anywhere to Begin)', 80, 380);
}

function playIT(){
  background(stage);
  screen = 1;
  
  //sound/song settings
    //song.play();

    if (!song.isPlaying()){
      song.play();
    } else {
      song.stop();
    }



  //score/timer area
    image(counter, width/2 - 190, 10, 400, 200);

  //live score
    textSize(75);
    text("score = " + score, width/2 - 100, 160);
  //Timer
    timer();
    textSize(50);
    fill('red');
    text("Time = " + countDown, width/2 - 90, 100);

    //when time read 0 go to endScreen
      if (screen == 2 || countDown < 0){
      countDown = 0;
      endScreen();
      }
    
  //catcher
    image(cursor, mouseX, height-50, 50, 50);  
}

function endScreen(){
  background(end);

  //Text
    textSize(150);
    textAlign(CENTER);
    text('GAME OVER', 570, 180);
    text("Final Score = " + score, 555, height/2 + 25);

  //click anywhere text
    fill(237, 198, 24);
    textFont(font);
    textSize(50);
    text('(Click Anywhere to Replay)', 540, 390);
}

function spawnClouds(){
   //image(droplet, x, y);
}


function mousePressed(){
  if(screen == 0){
    screen = 1;
  } else if (screen == 2) {
    screen = 0;
  }
}

function scoreBoard(){
  score = 0;
  speed = 2;
  y = -20;
}

function timer(){
    //convert  ms to sec
      var currentTime = int(millis() / 5);
    //Counts numbers down
      countDown = songTime - currentTime;
}

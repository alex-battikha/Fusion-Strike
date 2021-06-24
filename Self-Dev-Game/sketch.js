//Self-Developed-Project
//Offical Entry for Silicone Valley Competition
//Developer: Alex Battikha
// @ Copyright: 2021 Alex Battikha

var backgroundImage;

var player, playerImage;

var gameState = 0;
var playerCount = 0;

var database;

//class objects
var playerObject, gameObject, formObject;

//fonts
var csFont;

//audio sounds
var gunShotSound, coinCollectedSound, gameOverSound, backgroundAudio;



function preload() {
  backgroundImage = loadImage("assets/images/background.jpg");

  playerImage = loadImage("assets/images/player-shooting-left.png");

  csFont = loadFont("assets/fonts/cs_regular.ttf");

  gunShotSound = loadSound("assets/audio/gun-shot.wav");
  coinCollectedSound = loadSound("assets/audio/coin-collected.wav");
  gameOverSound = loadSound("assets/audio/game-over.wav");
  backgroundAudio = loadSound("assets/audio/background-audio.mp3");

}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  //console.log(backgroundImage.width);

  database = firebase.database();
  
  gameObject = new Game();
  gameObject.getState();
  gameObject.start();
}

function draw() {
  background(backgroundImage);

  //console.log(gameState);

  //if-statements to initalize the beginning of the game
  if(playerCount === 1) {
    gameObject.update(1);
  }
  if(gameState === 1) {
    //look into clear() function below
    clear();
    gameObject.play();
  }
  if(gameState === 2) {
    gameObject.end();
  }
  
  drawSprites();
}



//TESTING SOUND!
//function keyPressed() {
  //gunShotSound.play();
  //coinCollectedSound.play();
  //gameOverSound.play();
  //backgroundAudio.play();
//}

//Extras!
//spawn enemies function
//hearts
//leaderboard


//Left Off At: Reset Not Showing, Github Icon, Figuring HTML Out & Player Creation
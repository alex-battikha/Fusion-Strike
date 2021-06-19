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
var player, game, form;

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
  backgroundAudio = createSound("assets/audio/background-audio.mp3");

}

function setup() {
  canvas = createCanvas(displayWidth-1, displayHeight-136);
  console.log(backgroundImage.width);

  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);

  //if-statements to initalize the beginning of the game
  if(playerCount === 1) {
    game.update(1);
  }
  if(gameState === 1) {
    //look into function below
    clear();
    game.play();
  }
  if(gameState === 2) {
    game.end();
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


//Left Off At: Playing Background Audio in Form Screen
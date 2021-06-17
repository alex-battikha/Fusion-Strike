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
var gunShotSound, coinCollectedSound, gameOverSound;



function preload() {
  backgroundImage = loadImage("assets/images/background.jpg");

  playerImage = loadImage("assets/images/player-shooting-left.png");

  csFont = loadFont("assets/fonts/cs_regular.ttf");

  gunShotSound = loadSound("assets/audio/gun-shot.wav");
  coinCollectedSound = loadSound("assets/audio/coin-collected.wav");
  gameOverSound = loadSound("assets/audio/game-over.wav");

}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);

  database = firebase.database();
  
  //game = new Game();

  player = createSprite(displayWidth/2, displayHeight/2, 10, 10);
  player.addImage(playerImage);
  player.scale = 0.4;
}

function draw() {
  background(backgroundImage);

  //TODO: integrate line below with player.js
  player.addImage(playerImage);

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
function keyPressed() {
  //gunShotSound.play();
  //coinCollectedSound.play();
  //gameOverSound.play();
}

//Extras!
//spawn enemies function
//hearts
//leaderboard
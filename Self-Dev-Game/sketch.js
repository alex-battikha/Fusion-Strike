//Self-Developed-Project
//Offical Entry for Silicone Valley Competition
//Developer: Alex Battikha
// @ Copyright: 2021 Alex Battikha

var backgroundImage;

//players
var player1, player1Image;
var player2, player2Image;

var player2Game;

//ground
var grassBlock, grassBigBlock;
var grassBlockImage, grassBigBlockImage;

var gameState = 0;
var playerCount = 0;

var database;

//class objects
var playerObject, gameObject, formObject;

//fonts
var csFont;

//audio sounds
var gunShotSound, coinCollectedSound, gameOverSound, backgroundAudio;

var githubIcon, githubIconImage;

var githubLogoGroup;

function preload() {
  backgroundImage = loadImage("assets/images/background.jpg");

  player1Image = loadImage("assets/images/player-shooting-left.png");
  //find an image for p2
  //player2Image = loadImage();

  grassBlockImage = loadImage("assets/images/grass.png");
  grassBigBlockImage = loadImage("assets/images/grass-big.png");
  
  csFont = loadFont("assets/fonts/cs_regular.ttf");

  gunShotSound = loadSound("assets/audio/gun-shot.wav");
  coinCollectedSound = loadSound("assets/audio/coin-collected.wav");
  gameOverSound = loadSound("assets/audio/game-over.wav");
  backgroundAudio = loadSound("assets/audio/background-audio.mp3");

  githubIconImage = loadImage("assets/images/github-transparent.png");

}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  //console.log(backgroundImage.width);

  database = firebase.database();
  
  gameObject = new Game();
  gameObject.getState();
  gameObject.start();

  grassBlock = createSprite();
  grassBlock.addImage(grassBlockImage);

  grassBigBlock = createSprite();
  grassBigBlock.addImage(grassBigBlockImage);

  player2Game = false;

  githubIcon = createSprite(40, 45);
  githubIcon.scale = 0.15;
  githubIcon.addImage(githubIconImage);

  githubLogoGroup = createGroup();
  githubLogoGroup.add(githubIcon);
}

function draw() {
  background(backgroundImage);

  //check if the player's mouse is hovering over githubIcon
  if(mousePressedOver(githubIcon)) {
    window.open("https://github.com/alex-battikha");
  }

  playerObject.getPlayerCount();  
  //console.log(playerCount);

  //console.log(gameState);

  //if-statements to initalize the beginning of the game
  if(playerCount === 2) {
    gameState = 1;
    gameObject.update(1);
  }
  if(gameState === 1) {
    //look into clear() function below
    //clear();
    gameObject.play();
  }
  if(gameState === 2) {
    gameObject.end();
  }
  drawSprites(githubLogoGroup);
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


//Left Off At: 
// 1) Fixing Player DB Issue
// 2) Adding Welcome Tag
// 3) Switching out Play Button for Sprite 
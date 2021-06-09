//Self-Developed-Project
//Offical Entry for Silicone Valley Competition
//Developer: Alex Battikha
// @ Copyright: 2021 Alex Battikha

var backgroundImage;

var player, playerImage;

var gameState;

//class objects
var player, game, form;


function preload() {
  backgroundImage = loadImage("assets/images/background.jpg");

  playerImage = loadImage("assets/images/player-shooting-left.png");
}



function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  
  game = new Game();

  player = createSprite(displayWidth/2, displayHeight/2, 10, 10);
  player.addImage(playerImage);
  player.scale = 0.4;
}

function draw() {
  background(backgroundImage);

  player.addImage(playerImage);

  drawSprites();
}

//spawn enemies function
//hearts
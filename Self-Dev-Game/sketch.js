var backgroundImage;

var player, playerImage;


function preload() {
  backgroundImage = loadImage("assets/images/background.jpg");

  playerImage = loadImage("assets/images/player-shooting-left.png");
}



function setup() {
  createCanvas(displayWidth, displayHeight);

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
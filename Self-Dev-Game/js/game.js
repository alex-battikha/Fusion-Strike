class Game {
    constructor () {}

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data) {
            gameState = data.val();
        });
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        //TODO: fill in code for this function
        if(gameState === 0) {
            playerObject = new Player();

            formObject = new Form();
            formObject.display();
        }

        //Initialization of Player
        player1 = createSprite(displayWidth/2, displayHeight/2);
        player1.addImage(player1Image);
        player1.scale = 0.4;

        player1.visible = true;
        grassBlock.visible = true;
        grassBigBlock.visible = true;

        if(player2Game) {
            player2 = createSprite(displayWidth/2 + 200, displayHeight/2);
            player2.addImage(payer2Image);
            player2.scale = 0.4;
        }
    }


    play() {
        image(backgroundImage, 0, 0, displayWidth, displayHeight);
        drawSprites();
        
        if(keyIsDown(LEFT_ARROW)) {
            player1.x -= 5;
        }
        if(keyDown(RIGHT_ARROW)) {
            player1.x += 5;
        }
        if(keyDown(UP_ARROW)) {
            player1.y -= 5;
        }

        function spawnEnemies() {
            if(gameState==1) {
                for(var i = 0; i < 6; i++)
                if(frameCount % 100 === 0) {
                    var randomNumber = Math.random(1, 2);

                    switch(randomNumber) {
                        case 1: spikeEnemy.addImage(spikeEnemyLeft);
                        break;
                        
                        case 2: spikeEnemy.addImage(spikeEnemyRight);
                        break;
                    }
                }
            }
        }
    }

    end() {
        //TODO: fill in code for this function

    }
}
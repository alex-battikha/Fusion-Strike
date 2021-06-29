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

        if(player2Game) {
            player2 = createSprite(displayWidth/2 + 200, displayHeight/2);
            player2.addImage(payer2Image);
            player2.scale = 0.4;
        }
    }


    play() {
        //TODO: fill in code for this function
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
    }

    end() {
        //TODO: fill in code for this function

    }
}
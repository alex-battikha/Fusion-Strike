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


    start() {
        //TODO: fill in code for this function
        if(gameState === 0) {
            playerObject = new Player();
        }
        
        formObject = new Form();
        formObject.display();

        //Initialization of Player
        player = createSprite(displayWidth/2, displayHeight/2, 10, 10);
        player.addImage(playerImage);
        player.scale = 0.4;
    }


    play() {
        //TODO: fill in code for this function

        if(keyIsDown(LEFT_ARROW)) {
            player.x -= 5;
        }
        if(keyDown(RIGHT_ARROW)) {
            player.x += 5;
        }
        if(keyDown(UP_ARROW)) {
            player.y -= 5;
        }
    }

    end() {
        //TODO: fill in code for this function

    }
}
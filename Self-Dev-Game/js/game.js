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
            player = new Player();
        }
        
        form = new Form();
        form.display();
    }


    play() {
        //TODO: fill in code for this function

        //Initialization of Player
        player = createSprite(displayWidth/2, displayHeight/2, 10, 10);
        player.addImage(playerImage);
        player.scale = 0.4;

        if(keyDown("A") && player.x > 50) {
            player.x -= 10;
        }
        if(keyDown("W") && player.x < displayWidth - 50) {
            player.x += 10;
        }
        if(keyWentDown("32") && player.y > displayHeight-10 && player.y > 50) {
            player.y += 10;
        }

    }

    end() {
        //TODO: fill in code for this function

    }
}
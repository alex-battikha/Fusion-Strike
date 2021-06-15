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

    }


    play() {
        //TODO: fill in code for this function

    }

    end() {
        //TODO: fill in code for this function

    }
}
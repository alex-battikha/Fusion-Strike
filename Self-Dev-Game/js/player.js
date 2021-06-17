class Player {
    constructor() {}

    getPlayerCount() {
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", function(data) {
            playerCount = data.val();
        });
    }

    updatePlayerCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    updatePlayerPosition(positionX, positionY) {
        database.ref('playerPosition').update({
            playerPositionX: positionX,
            playerPositionY: positionY
        });
    }
}
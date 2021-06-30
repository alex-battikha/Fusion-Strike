class Player {
    constructor() {
        this.name = null;
        this.index = null;
        this.zombiesDestroyed = 0;
    }

    //Issue Resolved: calling below method in draw loop to continously retrieve playerCount value
    getPlayerCount() {
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", (data)=> {
            playerCount = data.val();
        });
    }

    updatePlayerCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name: this.name,
          zombiesDestroyed: this.zombiesDestroyed
        });
      }

    updatePlayerPosition(positionX, positionY) {
        database.ref('playerPosition').update({
            playerPositionX: positionX,
            playerPositionY: positionY
        });
    }
}
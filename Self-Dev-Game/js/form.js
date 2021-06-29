class Form {
    constructor () {
        textFont('Helvetica');

        this.name = null;
        this.title = createElement('h1');
        this.input = createInput('Name');
        this.button = createButton("Play!");
        // this.button1P = createButton('1 Player');
        // this.button2P = createButton('2 Player');

        this.reset = createButton('Reset');
    }

    hide() {
        this.title.hide();
        this.input.hide();
        //this.button1P.hide();
        //this.button2P.hide();
    }

    display() {
        this.title.html("Fusion Strike");
        this.title.position(displayWidth/2-50, 20);

        this.input.position(displayWidth/2-55, displayHeight/2-150);
        this.input.size(200);

        //this.button1P.position(displayWidth/2-40, displayHeight/2-75);
        //this.button2P.position(displayWidth/2+65, displayHeight/2-75);

        this.button.position(displayWidth/2+20, displayHeight/2-75);

        this.reset.position(width-80, height-280);
        this.reset.size(60);

        backgroundAudio.play();

        // this.button1P.mousePressed(()=>{
        //     this.input.hide();
        //     this.button1P.hide();
        //     this.button2P.hide();

        //     backgroundAudio.pause();

        //     gameState = 1;
        //     gameObject.update(1);

        //     player2Game = false;
        // });

        this.button.mousePressed(()=>{
            this.name = this.input.value(); 
            console.log(this.name);
            playerObject.getPlayerCount();
            console.log(playerCount);
            playerCount += 1;
            playerObject.index = playerCount;

            playerObject.updatePlayerCount(playerCount);

            playerObject.update();
            
            this.input.hide();

            backgroundAudio.pause();
        });

        this.reset.mousePressed(()=>{
            this.input.hide();
            //this.button1P.hide();
            //this.button2P.hide();

            backgroundAudio.pause();

            gameState = 1;
            gameObject.update(1);
            //player.updatePlayerCount(0);

            player2Game = true;
        });

        // this.button2P.mousePressed(()=>{
        //     this.input.hide();
        //     this.button1P.hide();
        //     this.button2P.hide();

        //     //TODO: finish creating 2 player functionality
        // });
    }
}
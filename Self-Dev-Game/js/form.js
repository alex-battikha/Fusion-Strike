class Form {
    constructor () {
        this.name = null;
        this.title = createElement('h1');
        this.input = createInput('Name');
        this.button = createButton("Play!");
        // this.button1P = createButton('1 Player');
        // this.button2P = createButton('2 Player');
        this.welcomeTag = createElement('h2');

        this.reset = createButton('Reset');
    }

    hide() {
        this.title.hide();
        this.input.hide();
        this.welcomeTag.hide();
        //this.button1P.hide();
        //this.button2P.hide();
    }

    display() {
        //this.title.html("Fusion Strike");
        //this.title.position(displayWidth/2-50, 20);

        this.input.position(displayWidth/2-55, displayHeight/2-150);
        this.input.size(200);

        //this.button1P.position(displayWidth/2-40, displayHeight/2-75);
        //this.button2P.position(displayWidth/2+65, displayHeight/2-75);

        this.button.position(displayWidth/2+20, displayHeight/2-75);

        this.reset.position(width-80, height-280);
        this.reset.size(60);

        backgroundAudio.play();

        this.button.mousePressed(()=>{
            this.name = this.input.value();
            playerObject.name = this.input.value(); 

            playerObject.getPlayerCount();
            playerCount += 1;
            playerObject.updatePlayerCount(playerCount);

            playerObject.index = playerCount;

            playerObject.update();

            this.welcomeTag.html("Hello" + this.input.value());
            this.welcomeTag.position(displayWidth/2-15, displayHeight/2-300);
            
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

        // this.button1P.mousePressed(()=>{
        //     this.input.hide();
        //     this.button1P.hide();
        //     this.button2P.hide();

        //     backgroundAudio.pause();

        //     gameState = 1;
        //     gameObject.update(1);

        //     player2Game = false;
        // });

        // this.button2P.mousePressed(()=>{
        //     this.input.hide();
        //     this.button1P.hide();
        //     this.button2P.hide();
        // });
    }
}
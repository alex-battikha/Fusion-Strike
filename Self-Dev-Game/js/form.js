class Form {
    constructor () {
        textFont(csFont);

        this.title = createElement('h1');
        this.input = createInput('Name');
        this.button1P = createButton('1 Player');
        this.button2P = createButton('2 Player');

        this.reset = createButton('Reset');
    }

    hide() {
        this.title.hide();
        this.input.hide();
        this.button1P.hide();
        this.button2P.hide();
    }

    display() {
        this.title.html("Fusion Strike");
        this.title.position(displayWidth/2-50, 20);

        this.input.position(displayWidth/2-55, displayHeight/2-150);
        this.input.size(200);

        this.button1P.position(displayWidth/2-40, displayHeight/2-75);
        this.button2P.position(displayWidth/2+65, displayHeight/2-75);

        this.reset.position(width-80, height-280);
        this.reset.size(60);

        backgroundAudio.play();

        this.button1P.mousePressed(()=>{
            this.input.hide();
            this.button1P.hide();
            this.button2P.hide();

            backgroundAudio.pause();

            gameState = 1;
            gameObject.update(1);
        });

        this.reset.mousePressed(()=>{
            gameObject.update(0);
            //player.updatePlayerCount(0);
        });

        // this.button2P.mousePressed(()=>{
        //     this.input.hide();
        //     this.button1P.hide();
        //     this.button2P.hide();

        //     //TODO: finish creating 2 player functionality
        // });
    }
}
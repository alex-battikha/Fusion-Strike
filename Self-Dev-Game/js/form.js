class Form {
    constructor () {
        this.title = createElement('h1');
        this.input = createInput('Name');
        this.button1P = createButton('1 Player');
        //this.button2P = createButton('2 Player');

        this.reset = createButton('Reset');
    }

    hide() {
        this.title.hide();
        this.input.hide();
        this.button1P.hide();
        //this.button2P.hide();
    }

    display() {
        this.title.html("Fusion Strike");
        this.title.position(displayWidth/2-25, 20);

        this.input.position(displayWidth/2, displayHeight/2);
        this.button1P.position(displayWidth/2-200, displayHeight/2 + 150);
        //this.button2P.position(displayWidth/2+200, displayHeight/2 + 150)
        this.reset.position(dispalyWidth-100, displayHeight);

        this.button1P.mousePressed(()=>{
            this.input.hide();
            this.button1P.hide();
            this.button2P.hide();
        });

        // this.button2P.mousePressed(()=>{
        //     this.input.hide();
        //     this.button1P.hide();
        //     this.button2P.hide();

        //     //TODO: finish creating 2 player functionality
        // });
    }
}
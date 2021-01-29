class Form{
    constructor(){
        this.input = createInput("Name");
         this.button = createButton('Play');
         this.greeting = createElement('h3');
         this.button1 = createButton('restart');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h2')
        title.html("Car Racing Game");
        title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-50,displayHeight/2-60);
        this.button.position(displayWidth/2,displayHeight/2-30);
        this.button1.position(displayWidth-100,150);
        this.button.mousePressed(()=>{
       // this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name )
            this.greeting.position(displayWidth/2-50,displayHeight/2-60)
        });
        this.button1.mousePressed(()=>{
             player.updateCount(0);
             game.update(0);
         });

}
}
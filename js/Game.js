class Game{
    constructor(){
    }

getState(){
    var gameStateRef= database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState=data.val();
    });
    }

    update(state){
        database.ref('/').update({
          gameState:state  
        })
    }

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
    
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1, car2, car3, car4];
        console.log("cars created");
        car1.addImage("car1",car1_img);
        car2.addImage("car1",car2_img);
        car3.addImage("car1",car3_img);
        car4.addImage("car1",car4_img);
      }
    

    play(){
        form.hide();
        textSize(33);
        text("Game Start",120,100);
        Player.getPlayerInfo();
        if (allPlayers!== undefined){
          background(20);
          image(track_img,0,-displayHeight*3.9,displayWidth,displayHeight*5);
           // var display_position=130; 
           // x and y positions of the car
           var x=220;
           var y;
           //index of the array
           var index=0;
             for (var plr in allPlayers){
                 //add 1 to the index for every loop
                 index= index+1;
                 //place the cars little away from each other in x direction
                 x=x+220;
                 //use data from database to display the cars in y direction
                 y=displayHeight-allPlayers[plr].distance;
                 cars[index-1].x=x;
                 cars[index-1].y=y;
                 if (index===player.index){
                   strokeWeight(5);
                   stroke("yellow");
                   fill("red");
                   ellipse(x,y,60,60);
                  cars[index-1].shapeColor="red";
                  camera.position.x=displayWidth/2;
                  camera.position.y=cars[index-1].y;
                 }
                 console.log(x);
        }
        if (keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=50;
            player.update();
        }

        if (player.distance>4200){
          gameState=2;
        }

        drawSprites();
    }
    }

      end(){
        console.log("GAME ENDED");

      }
}
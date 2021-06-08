class Game 
{
  constructor()
  {}

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state)
  {
    database.ref('/').update({
      gameState: state
    });
  }

  async start()
  {
    if(gameState === 0)
    {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      
      if(playerCountRef.exists())
      {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }

    RedPlayer = createSprite(100, 600);
    RedPlayer.addAnimation("k", redRunning);

    YellowPlayer = createSprite(400, 600);
    YellowPlayer.addAnimation("l", yellowRunning);

    GreenPlayer = createSprite(700, 600);
    GreenPlayer.addAnimation("h", greenRunning);

    BluePlayer = createSprite(1000, 600);
    BluePlayer.addAnimation("j", blueRunning)

    trexs = [RedPlayer, YellowPlayer, GreenPlayer, BluePlayer];

  }

  play()
  {
    //write code here to hide question elements
    

    //write code to change the background color here
    background("black");
    image(road, 0, -displayHeight*4, displayWidth, displayHeight*5);

    //write code to show a heading for showing the result of Quiz
    textSize(30);
    text("Let the games begin!", 420, 80),

    //call getContestantInfo() here
    Player.getPlayerInfo();

    //write condition to check if contestantInfo is not undefined
    if(allPlayers !== undefined)
    {
      
      ground = createSprite(500,800);
      ground.addImage(groundImage);

      var index = 0;

      var x = 175;
      var y;

      for(var plr in allPlayers)
      {
        index = index+1;

        x = x+200;
        y = displayHeight - allPlayers[plr].distance;

        trexs[index-1].x = x;
        trexs[index-1].y = y;

        if(index === player.index)
        {
          trexs[index-1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = trexs[index-1].y;
        }

      }
  
  
    }

    if(keyIsDown(UP_ARROW) && player.index !== null)
    {
      player.distance+=20;
      player.update();
    }

    if(player.distance>3860)
    {
      gameState = 2;
    }

    drawSprites();
    //write code to highlight contest who answered correctly

    
  }

  end()
  {
    
    fill("white");
    textSize(30);
    text("Game has ended.", 400, 400)
  }

}

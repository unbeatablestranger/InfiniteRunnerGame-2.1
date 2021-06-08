class Form
{
  constructor()
  {
    this.heading = createElement('h1');
    this.question = createElement('h3');
    this.input = createInput("Enter your name here...");
    this.submit = createButton("Submit");
  }



  display()
  {
    this.heading.html("T-Rex Runner Game");
    this.heading.position(200, 20);

    this.question.html("Please enter your name which will be used in the game to represent you.");
    this.question.position(100, 90);

    this.input.position(400, 160);

    this.submit.position(500, 270);

    this.submit.mousePressed(()=>{
      this.heading.hide();
      this.question.hide();
      this.input.hide();
      this.submit.hide();

      player.name = this.input.value();

      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
    })
  }
}

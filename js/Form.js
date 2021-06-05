class Form {
  constructor() {
    //'this' means object called the function
    //console.log(this)
    this.input= createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    
    
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      console.log(this);
      this.input.hide();
      this.button.hide();
      
      var name = this.input.value();
      console.log(name)
     
      playerCount=playerCount+1
      player.updateCount(playerCount)
      this.greeting.html("Hello " + name )
      this.greeting.position(130, 160)
    });

  }
}

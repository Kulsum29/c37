class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var PlayerCountRef = await database.ref("PlayerCount").once("value")
      if(PlayerCountRef.exists()){
        playerCount=PlayerCountRef.val();
        player.getCount()
      }
      //player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30)
    text("Game Has Started",100,100)
  }
}

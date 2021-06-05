class Player{
    constructor(){
        
    }
    getCount(){
        
        //read from a database
        // step 1 : make a reference database
        var playerCountRef = database.ref("PlayerCount");
        // step 2 : Use the on function()    // on("value", function which should happen)
        // anonymous function 
        playerCountRef.on("value",function(data){
            playerCount=data.val();
            
        })
    
    }

    updateCount(Num){
        //write to the database
        // step 1 : make a reference database
        //var NumRef=database.ref("PlayerCount")
        // Use the update function()
        //NumRef.update(Num)

        //or

        //database.ref("PlayerCount").update(Num);

        //or

        database.ref("/").update({
            PlayerCount: Num
        })

    }


}

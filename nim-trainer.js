// Nim Trainer by Bram Moreinis
// Initialzations
var count = 0;
var playerInput = 0;
var cpuInput = 0;
var winner=null;
var gameState = "simple"; //Initalize gameState to "Simple" to set default game state to it
// Welcome
gameState=prompt("Choose simple or trainer?");

alert("Welcome to Nim! You go first.");
// Start Play
// Keep looping until someone wins
while (count<21) {
   // Ask for player input and say current count, add to count
   winner="CPU"; 
   count+=playerTurn();
   alert("Current count is "+count);
   // Check if player loses, and prevent CPU from taking turn if so
   if (count<21) {
      // Ask for CPU input and say current count, add to count
      winner="you";
   if (gameState=="trainer"){
      cpuInput=cpuTurnTrainer(count);    
    }
   else(cpuInput=cpuTurn());
   alert("CPU counts "+cpuInput);
   count+=cpuInput;
   alert("Current count is "+count);
   }
}
alert(winner+" won!");
// End

// Define function playerTurn
function playerTurn(){
  playerInput = prompt("Count how many? (1-3)");
  playerInput = parseInt(playerInput);
  return playerInput;
}

// Define function cpuTurn
function cpuTurn(){
  cpuInput=Math.floor(Math.random()*3)+1;
  return cpuInput;
}

function cpuTurnTrainer(count){
   var multi=0;
   for(multi = 4; multi < count; multi += 4) {
      console.log(multi);
   }
   cpuInput = multi - count;     
   return cpuInput;
}

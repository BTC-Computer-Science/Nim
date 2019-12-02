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
   count=playerTurn();
   alert("Current count is "+count);
   // Check if player loses, and prevent CPU from taking turn if so
   if (count<21) {
      // Ask for CPU input and say current count, add to count
      winner="you";
      if (gameState=="trainer"){
         count=cpuTurnTrainer(count);    
      }
      else count=cpuTurn(count);
      alert("Current count is "+count);
   }
}
alert(winner+" won!");
// End

// Define function playerTurn
function playerTurn(){
	var goodTurn=false;
	while(goodTurn == false){
		turn=parseInt(prompt("Pick a number 1-3"));
		if(turn>0 && turn<4 && Math.floor(turn)==turn){
			goodTurn=true;
			alert("You counted "+turn+".");
		}
		else{
			alert("Number is out of range, try again.");
		}
	}
   count+=turn;
   return count;
}

// Define function cpuTurn
function cpuTurn(count){
	let turn=22;
	while(turn!=1 && count+turn>20){
		turn=Math.floor(Math.random()*3)+1;
	}
	alert("cpu counts "+turn);
	count+=turn;
   return count;
}

// Define function cpuTrainer
function cpuTrainer(count){
	if (count%4 != 0) turn=4-(count%4);
	else if (count==20) turn = 1;
	else turn = Math.floor(Math.random()*3)+1;
	alert("cpu counts "+turn);
	count+=turn;
	return count;
}

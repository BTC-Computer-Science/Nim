// Nim Super Duper Simple (no input validation)
var count = 0; var turn = 0; var winner=null;
main(); 
alert(winner+" won!"); 

function main() {	
	while (count<21) {
	   winner="CPU"; 
	   count+=playerTurn();
	   alert("Current count is "+count);
	   if (count<21) {
		  winner="you"; 
		  count+=cpuTurn();
		  alert("Current count is "+count);
	   }
	}
}

function playerTurn(){
  var turn = prompt("Count how many? (1-3)");
  return parseInt(turn);
}

function cpuTurn(){
  var turn=Math.floor(Math.random()*3)+1;
  alert("CPU counts "+turn+".");
  return turn;
}

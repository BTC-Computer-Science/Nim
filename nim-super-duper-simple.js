// Nim Super Duper Simple (no input validation, no separate functions)
var count = 0; var playerInput = 0; var cpuInput = 0; var winner=null;
while (count<21) {
	turn=Math.floor(Math.random()*3)+1;
	count+=turn;
	alert("CPU counts "+turn+". Current count is "+count+".");
	winner="you";
	if (count<21) {
		var turn = parseInt(prompt("Count how many? (1-3)"));
		count+=turn;
		alert("Current count is "+count);
		winner="CPU";
	}
}
alert("Game over. "+winner+" won!");

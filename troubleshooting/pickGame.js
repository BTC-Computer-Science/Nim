/* Nim-Trainer by XXXX */

var games = 0;
var again = true;
var gameType = null;
while(again == true){
	var count = 0;
	var turn = 0;
	var next = games%2;
	while (count < 21){
		if(next == 0){
			var gameType = prompt("do you want simple");
			if(gameType == "simple"){
				cpuTurn(count);
			}
			else{
				userTurn(count);
			}
			alert("count is now "+count);
		}
		if (count < 21) next=nextSwitch(next);
	}
	again = declareWinner(next);
}
alert("thanks for playing");



/*Function*/

function cpuTurn(count) {
turn = 22;	
while(turn == 1 || turn+count<21){
	alert("cpu counts "+turn);
}
	 else{
		turn = Math.random(Math.floor()*3)+1;
	}
  	count +=turn;
	return count;
}

function nextSwitch(next){
	if (next==0) next = 1;
	else next = 0;
	return next;
}

function cpuTrainer(count){
	while(count%4==0){
		if(count == 20){
			turn = 1;
		}
		else{
			turn = Math.Random(Math.floor()*3)+1;
		}
	}
	else{
		turn = 4-(count%4);
	}
	alert("cpu counts "+turn);
	count += turn;
	return count;
}

function declareWinner(next){
     if (next==0){
	alert("youn win");
   }
     else{
     alert("I Win");
   }
	games++;
	again = confirm("Press OK to play, Cancel to quit.");
	return again;
}

function userTurn(){
var turn = prompt("pick a number (1-3)");
while( turn == 1 || turn == 2 || turn == 3){
	count += turn;
	return count;
}
}

/* Nim Simple By Hasan*/

//initalize variables
var winner="";
const turnsParam=3;
main(); 

//start game
function main(){
  alert("welcome to NIM, you're first");
  let count=0;
   while(count<21){
     count = playerTurn(count);
     alert("Current count is "+count);
     if (count<21) {
       cpuTurn();
       alert("Current count is "+count);
     }
   }
  alert(winner+" won!");
}
//console.log(playerTurn(count));
function playerTurn(count){
  let playerInput=0;
  while (playerInput<1 || playerInput>turnsParam) {
    playerInput=parseInt(prompt("count how many? (1-"+turnsParam+")"));
  }
  count+=playerInput;
  winner="CPU";
  return count; 
}
/* passed testing */
//console.log(cpuTurn());
function cpuTurn(){
  let cpuInput=Math.floor(Math.random()*turnsParam+1);
  if (count+cpuInput >= 21) {
    cpuInput=1;
  }
  alert("CPU counts "+cpuInput);
  count+=cpuInput;
  winner="you";
  return count;
}

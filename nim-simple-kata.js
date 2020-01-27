/* Nim Simple Kata */

/* Initialize global variables */
// games = 0, again = 0, count = 0, turns = 0, next = 0

/* Main */
// while again is equal to true 
	// variable count equal to 0 
	// variable turns equal to 0
	// variable next to the remainder of games divided by 2 (modulus)

	// while count is not greater than or equal to 21, 
		// if next is equal to 0, call cpuTurn
		// else if next is not equal to 0, call userTurn
		// after a cpuTurn or userTurn, add turn int to variable count
		// add 1 to turns
	 	// call nextSwitch
	// -- loop back into next = 0 --

	// after while loop, since count is greater than or equal to 21
		// call function declare winner
		// add 1 to games
		// set again equal to call playAgain
	// -- loop back into again equal to true --


/* Functions */

/* 
function userTurn() 
* prompts user for turn amount and validates user's input as 1, 2 or 3
* Param none
* Return boolean
*/

/* 
function cpuTurn() 
* creates turn for cpu; generate random number between 1 and 3 (alert int to player)
* if cpu turn is greater than 1 and counts OVER 21, try again
* Param none
* Return boolean
*/

/* 
function playAgain() 
* prompts user on if they want to play again after finishing a game
* Param none
* Return boolean
*/

/* 
function declareWinner(next) 
* Checks next value and with that information declares winner
* Param next
* Return none
*/

/* 
function nextSwitch(next) 
* Checks next value and with that information determines who goes first in next game
* Param next
* Return int 
*/

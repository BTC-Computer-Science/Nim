// Nim Trainer by Bram Moreinis
// NOTE: This requires three functions;  playerTurn, cpuTurn (random) and cpuTurnTrainer (calculated)
// Initializations
// count, playerInput, cpuInput, winner(string), gameState(simple || trainer)

// Welcome

// Prompt user to select gameState

// Start Play

// Keep looping while nobody counted 21

	// PLAYER TURN
	// Set winner as CPU

	// State current count

	// Ask for player input

	// Add player input to count

	// Check if player loses, and prevent CPU from taking turn if so

		// Set winner as Player

		// Check if gameState is simple

		// If simple, Obtain cpuInput from cpuTurn

		// Otherwise, pass count to cpuTurnTrainer and get cpuInput

		// Add CPU Input to count

		// State Current Count
	
	// End Loop

// Say who won

// End

// Define function cpuTurn (get random number, return it)
	// get random number

	// return cpuInput

// Define function cpuTurnTrainer (send count, determine return count)
// Remember that computer always counts up to the next multiple of four after current count	
	// Set a loop that starts 4, keeps going while less than count, and steps 4

	// return cpuInput
	

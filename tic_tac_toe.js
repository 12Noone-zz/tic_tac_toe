var playerOneObject = { 
	Name: "player",
	piece: "X",
	wins: 0,
	$scoreBoard: $('#p1score') //but I dont know what it is.
}

var playerTwoObject = {
	Name: "playertwo",
	piece: "O",
	wins: 0,
	$scoreBoard: $('#p2score') //this is doing something shitty with the scores in html
}
var turn = playerOneObject; 
var tie = false;
var winner = false;

var $startButton = $('#start-button'); 
$startButton.on('click', function() { 
	var playerOne = prompt("Enter your name, Player One");
	playerOneObject.Name = playerOne; 
	var playerTwo = prompt("Enter your name, Player Two"); 
	playerTwoObject.Name = playerTwo;

	var $player1View = $('#player-one').text(playerOneObject.Name); 
	var $player2View = $('#player-two').text(playerTwoObject.Name);
});

var ticTacToeArray = [[null, null, null],

				  	 [null, null, null],    
				  
				  	 [null, null, null]];     

var $gameBoard = $('.tic-tac-toe'); 
var $player1View = $('#player-one'); 
var $player2View = $('#player-two');

$gameBoard.on('mouseenter', 'td', function(eventObject) {
	var $currentSquare = $(this);
	$currentSquare.addClass('outline-hover ' + turn.piece);
	//addClass that'll indicated it's hovered. that'd dotted faded red line.
	//addClass to indicate what player turn it is.
}); 

$gameBoard.on('mouseleave', 'td', function(eventObject) {
	var $currentSquare = $(this);
	$currentSquare.removeClass('outline-hover ' + turn.piece);
	//remove hover
	//remove which player
	//remove text decoration
	console.log("mouse left");
});

$gameBoard.on('click', 'td', function(eventObject) {
	if (winner) {
		return;
	}
	var $currentSquare = $(this); 
	var cellIndex = $currentSquare.index();  
	var rowIndex = $currentSquare.parents('tr').index(); 
	if (ticTacToeArray[rowIndex][cellIndex] === null) { 
		$currentSquare.text(turn.piece).addClass('piece-style'); 
		ticTacToeArray[rowIndex][cellIndex] = turn; 
		determineWinner(); 
		changePlayer(); 
	}
	else { 
		return;
	}
});

var changePlayer = function() { 
	if (turn == playerOneObject) { 
		turn = playerTwoObject; 
			
	}
	else {
		turn = playerOneObject; 
		
	}
}


var determineWinner = function() { 
	var count = 0; 

	if ((ticTacToeArray[0][0] === turn) && (ticTacToeArray[1][1] === turn) && (ticTacToeArray[2][2] === turn)) {
			turn.$scoreBoard.text(turn.wins);
			winner = true;
		}
		else if ((ticTacToeArray[0][2] === turn) && (ticTacToeArray[1][1] === turn) && (ticTacToeArray[2][0] === turn)) {	
			turn.$scoreBoard.text(turn.wins);
			winner = true;
		}
	for (i = 0; i < ticTacToeArray.length; i++) {  
		for (j = 0; j < ticTacToeArray[i].length; j++) {  
			if (ticTacToeArray[i][j] === turn) {  
				count += 1;
			}
		}
		if (count === ticTacToeArray[i].length) {   
			winner = true; 	
		}
		count = 0;
	}

	for (i = 0; i < ticTacToeArray.length; i++) { 
		for ( j = 0; j < ticTacToeArray[i].length; j++) {
			if (ticTacToeArray[j][i] === turn) {
				count += 1;
			}
		}
		if (count === ticTacToeArray[i].length) { 
			winner = true;
		}
		count = 0; 
	}
	if (winner) {
		alert(turn.Name + " is the winner! second block");
		turn.wins = turn.wins + 1;
		turn.$scoreBoard.text(turn.wins);
	}
	else {
		tie();
	}
}
var tie = function() {
	var fullBoard = true;
	for (i = 0; i < ticTacToeArray.length; i++) {  
		for (j = 0; j < ticTacToeArray[i].length; j++) {
			 if (ticTacToeArray[j][i] === null) {
			 	fullBoard = false;
			}
		} 
	}	
	if (fullBoard && !winner) {
		alert("it's a tie");
	}
}
/*
it can't go in the for loop or it endlessly calls it a tie
it can't go outside the for loop but in the if statement
determing winner or it skips the if's entirely on the first try.
*/

var $resetButton = $('#reset-button'); 
$resetButton.on('click', function() { 
	var $player1Score = $('#p1score');
	var $player2Score = $('#p2score'); 
	$gameBoard.find('td').text(''); 
	$player1View.text(''); 
	$player2View.text('');
	$player1Score.text('');
	$player2Score.text('');
	ticTacToeArray = [[null, null, null], 

				  	 [null, null, null],    
				  
				  	 [null, null, null]];
	playerOneObject.wins = 0;
	playerTwoObject.wins = 0;
	winner = false;
});
var $td = $('td');

var $newGame = $('#new-game'); 
	$newGame.on('click', function() { 
	$gameBoard.find('td').text(''); 
	ticTacToeArray = [[null, null, null],  

				  	 [null, null, null],    
				  
				  	 [null, null, null]];
	winner = false;
	changePlayer();  
});

//problems to fix 
/*

1) the game will let you continue to add X's or O's after the game's been won.
2) the game isn't logging wins on the diagonal
3) need to end game with a tie. 
4) need to set the player object win back to zero but doing so somehow fucks up the reset button.

things I've tried and what went wrong 
1) tie: an else statement setting winner to false if none of the conditions are met 
	I've tried in in the loop, out of the loop, at the end of the function 
	no matter where it is, it automatically sets winner to false 
	if it's in the loop, it sets winner to false until I want to throw my computer across the room

2) scoreboard problem: the data from the score board isn't resetting with the display scoreboard
	this means that while the number may disappear from the screen, playerObjectOne.wins is still set to 
	the original score. thus it just picks up where it left off.

	I've tried setting playerOneObjects.wins back to zero in the reset button function 
	and it says either that playerOneObject.wins isnt' defined (which is horse shit it's totally 
	there in the global scope as an object) OR it breaks my game completely. cool.

	status: resolved. I'm a fucking idiot.

3) logging wins on the diagonal. tried
	status: I don't know when. I don't know why. but apparently I solved this at some point today.

4) stopping user input after a win (or tie I suppose) has been determined.
	really just not sure on this one.




*/


	




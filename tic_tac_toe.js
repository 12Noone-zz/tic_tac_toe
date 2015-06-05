var playerOneObject = {
	Name: "player",
	piece: "X",
	wins: 0
}

var playerTwoObject = {
	Name: "playertwo",
	piece: "O",
	wins: 0
}

var $startButton = $('#start-button');
$startButton.on('click', function() {
	var playerOne = prompt("Enter your name, Player One");
	playerOneObject.Name = playerOne;
	var playerTwo = prompt("Enter your name, Player Two");
	playerTwoObject.Name = playerTwo;

	var $player1View = $('#player-one').addClass('playerh1').text(playerOneObject.Name);
	var $player2View = $('#player-two').addClass('playerh1').text(playerTwoObject.Name);

});

var ticTacToeArray = [[null, null, null],

				  	[null, null, null],
				  
				  	[null, null, null]];

var $rowOne = $('.row1');
var $rowTwo = $('.row2');
var $rowThree = $('.row3');


var $gameBoard = $('.tic-tac-toe');
var turn = playerOneObject;

$gameBoard.on('click', 'td', function(eventObject) {
	var $currentSquare = $(this);
	var cellIndex = $currentSquare.index();
	var rowIndex = $currentSquare.parents('tr').index();
	ticTacToeArray[rowIndex][cellIndex] = turn;
	if (turn == playerOneObject) {
		ticTacToeArray[rowIndex][cellIndex] == playerOneObject.piece;
		console.log(ticTacToeArray[rowIndex][cellIndex])
	}
	else {
		ticTacToeArray[rowIndex][cellIndex] == playerTwoObject.piece;
		console.log(ticTacToeArray[rowIndex][cellIndex])
	}
	changePlayer();
});


var changePlayer = function() {
	if (turn == playerOneObject) {
		turn = playerTwoObject;	
	}
	else {
		turn = playerOneObject;
		
	}
}


var clearBoard = function() {
	for (i = 0; i < ticTacToeArray.length; i++) {
		ticTacToeArray[i] = null;
		console.log(ticTacToeArray);
	}
}  



/*
need a function that will determine the winner. how can we do that? how many different ways are there to win?

need a reset function that will clear the game board.
*/

/*
var $topLeft = $('#top-left');
var $topCenter = $('#top-center');
var $topRight = $('#top-right');
var $centerLeft = $('#center-left');
var $deadCenter = ('#dead-center');
var $centerRight = $('#center-right');
var $bottomLeft = $('#bottom-left');
var $bottomCenter = $('#bottom-center');
var $bottomRight = $('#bottom-right');

*/
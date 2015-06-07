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

var $body = $('<body>');

var $startButton = $('#start-button');
$startButton.on('click', function() {
	var playerOne = prompt("Enter your name, Player One");
	playerOneObject.Name = playerOne;
	var playerTwo = prompt("Enter your name, Player Two");
	playerTwoObject.Name = playerTwo;

	var $player1View = $('#player-one').addClass('.piece-style').text(playerOneObject.Name);
	var $player2View = $('#player-two').addClass('.piece-style').text(playerTwoObject.Name);

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
	if (ticTacToeArray[rowIndex][cellIndex] === null) {
		$currentSquare.text(turn.piece).addClass('piece-style');
		ticTacToeArray[rowIndex][cellIndex] = turn;
		console.log(ticTacToeArray[rowIndex][cellIndex]);
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
	var $p1h4 = $('#p1score');
	var $p2h4 = $('#p2score');
	var count = 0;
	var winner = false;
	if ((ticTacToeArray[0][0] === turn) && (ticTacToeArray[1][1] === turn) && (ticTacToeArray[2][2] === turn)) {
			alert(turn.Name + " wins on the diagonal!");
		}
		else if ((ticTacToeArray[0][2] === turn) && (ticTacToeArray[1][1] === turn) && (ticTacToeArray[2][0] === turn)) {
			alert(turn.Name + " wins on the diagonal!");
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
		alert(turn.Name + " is the winner!");
	}
	if (turn === playerOneObject) {
		playerOneObject.win += 1;
		$p1h4.text(playerOneObject.wins);
}
}
var playerOneObject = {
	Name: "player",
	piece: "X",
	wins: 0,
	$scoreBoard: $('#p1score')
}

var playerTwoObject = {
	Name: "playertwo",
	piece: "O",
	wins: 0,
	$scoreBoard: $('#p2score')
}

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

var defaultTicTacToeArray = [[null, null, null], 

				  			[null, null, null],    
				  
				  			[null, null, null]];   

var $gameBoard = $('.tic-tac-toe');
var $player1View = $('#player-one');
var $player2View = $('#player-two');

$gameBoard.on('click', 'td', function(eventObject) {
	var $currentSquare = $(this);
	var cellIndex = $currentSquare.index(); 
	var rowIndex = $currentSquare.parents('tr').index();
	if (ticTacToeArray[rowIndex][cellIndex] === null) {
		$currentSquare.text(turn.piece);
		ticTacToeArray[rowIndex][cellIndex] = turn;
		determineWinner();
		changePlayer();
	}
	else {
		return;
	}
});

var turn = playerOneObject;

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
		turn.wins = turn.wins + 1;
		turn.$scoreBoard.text(turn.wins);
	}
}

	var $resetButton = $('#reset-button');
	$resetButton.on('click', function() {
		var $player1Score = $('#p1score');
		var $player2Score = $('#p2score');
		ticTacToeArray = defaultTicTacToeArray;
		$gameBoard.find('td').text('');
		$player1View.text('');
		$player2View.text('');
		$player1Score.text('');
		$player2Score.text('');
	});

	var $newGame = $('#new-game');
	$newGame.on('click', function() {
		ticTacToeArray = defaultTicTacToeArray;
		$gameBoard.find('td').text('');
	})




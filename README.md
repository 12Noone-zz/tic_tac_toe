# Tic Tac Toe 
### By Jill Noone 

A pretty simple game of classic Tic-Tac-Toe.

* [Imgur](http://i.imgur.com/ilg2kJO.jpg)
* [Tic-Tac-Toe](http://12noone.github.io/tic_tac_toe/)

## Technologies used:

1. HTML
* The working skeleton the browser renders
* set up in columns for easy css selecting
2. CSS
* The styling aspect of the game
3. Javascript
* A series of functions testing for empty spaces, spaces occuring in certain orders, removing and adding appropriate classes, and declaring winners or a tie. It also updates the score board and assigns names to the player board slots.
Jquery
..* similar to javascript. Handles alot of the dom manipulation elements

## User Stories 

* A player should be prompted first for first player and then for second. The names should display correctly on the browser. 

* Player one always has the first move. Life's rough, get a helmet. 

* Filling any row or column or diagonal with the same piece will result in a tic-tac-toe win, the end of the game, the update of the score board.

* Players can choose to either reset the game and set the board, player, score board, back to it's original state OR choose a new game which will only reset the board.



## Problems I had along the way 

Determining the tie was really tricky. I understood what I wanted, to test for != null and !winner but finding the right place for it and implementing it was tough.


I also struggled with finding a way to stop the play after a winner's been declared. Again, understanding what I wanted but not sure where the code should go in the bigger picture. 

## Things I'd Change 

* The javascript and jquery are a bit a mess. Things work but I'd love to go in and refactor it to a cleaner and neater format. I'd also like to play around with animation in the css more.
* a classAdd to the winner that will highlight those player pieces that won red so it's easy to separate the men from the boys.


## Unsolved Problems 

I got part way through coding a hover preview of the letter selected and I'd love to finish that as I think it's a sharp addition.



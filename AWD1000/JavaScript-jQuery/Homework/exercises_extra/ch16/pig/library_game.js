"use strict";
const game = {
    player1: new Pig(),  
    player2: new Pig(), 
    currentPlayer: null, 
    get isValid() {
        if ( this.player1.name === "" || this.player2.name === "" ) {
            return false;
        } else { 
            return true; 
        }
    },
	start(name1, name2) {
        this.player1.name = name1;
        this.player2.name = name2;
        this.currentPlayer = this.player1;
        return this;
    },
    reset() {
        // call the reset() method on each of the player Pig objects
        
    },
    changePlayer() {
        // determine whether player1 or player2 is the current player, then
        // update the currentPlayer property to hold the other player.
        
    },
    hold( score1, score2 ) {
        // call the hold() method of the current player
        
        
        // determine whether player1 or player2 is the current player, then
        // update that player's score with the current total
        
    },
    checkWinner() {
        // check the players' totals to see if either is at or above 100
        // points. If so, return that player's name. Otherwise, return 
        // the string "none".
        
    }
};
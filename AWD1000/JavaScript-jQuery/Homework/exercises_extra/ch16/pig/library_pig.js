"use strict";
class Pig {
	constructor() {
		this.die = new Die();
		this.name = "";
		this.total = 0;
		this.turn = 0;
		this.roll = 0;
	}
	get isBust() {
        return (this.roll == 1) ? true: false;
    }
	takeTurn() {
		this.roll = this.die.rollDie(); 
		
		// update or reset the turn property based on result of die roll
		this.turn = (this.roll === 1) ? 0 : this.turn + this.roll;
	}
	hold() {
		// update the game total
		this.total = this.total + this.turn; 
		// reset other properties for next turn
		this.roll = 0;
		this.turn = 0; 
	}
	reset() {
		// reset all properties
		this.total = 0;
		this.roll = 0;
		this.turn = 0;
	}
}
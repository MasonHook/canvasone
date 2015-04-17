function Dice ( sides ){
	this.sides = sides;
	
	this.roll = function roll(){
		return Math.floor( Math.random() * this.sides) + 1
	     }//endroll
	
	
}//end Dice
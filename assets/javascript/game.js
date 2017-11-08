	//I need the user to make a choice
	//If the choice is within the word the blanks will fill in
	//If the choice is not within the word the choice will go under the LETTERS GUESSED section
	//If a choice goes under the LETTERS GUESSED section the number of guess counter will go down
	//If the word is guessed within the alloted number of guesses the user will move on to the next word. If they don't they will go to the next word, but they will not get a 'win'
	//Need to get a list of TV shows and Movies

	//document.onkeyup = function(){
	//	var userguess = String.fromCharCode(event.keyCode).
	//	toLowerCase();

	//	console.log(userguess);
	//}


 

    // Array holds all of the drinks available
    //var tvMovieList = [
      //"Stranger Things",
      //"FRIENDS",
      //"American Horror Story",
      //"Glee",
      //"Bones",
      //"Fight Club",
      //"Breakfast at Tiffany's",
      //"Zorro",
      //"Keeping up with the Kardashians"
    //];

//List of Words
   const word = ['emily','sookie','richard','paris','rory','kirk','luke','lane','april','jason','christopher']

//Choose Random Word   
   let randWord = Math.floor(Math.random() * word.length);
   let chosenLetter = word[randWord];
   let underScore = [];
   let rightGuess = [];
   let wrongGuess = [];
   console.log(chosenLetter);

   let blanks = document.getElementsByClassName('underscore');

//Create the underscores based on the length of the word
	let underScoreCount = () => {
		for(let i = 0; i < chosenLetter.length; i++) {
			underScore.push('_');	
		}
		return underScore;
	}

//retrieving the user's guess
	document.onkeyup = function(){
		var userguess = String.fromCharCode(event.keyCode).
		toLowerCase();
	//if the user's guess is correct	
		if(chosenLetter.indexOf(userguess) > -1){
			rightGuess.push(userguess);
			blanks[0].innerHTML = underScore.join(' '); 
			//replaces the underscore with the letter if it is in the word
			underScore[chosenLetter.indexOf(userguess)] = userguess;
			if(underScore.join('') == chosenLetter){
				alert('Oy with the Poodles Already!')
			}
			console.log(underScore);
		}
		else{
			wrongGuess.push(userguess);
			
		}
		
}
	blanks[0].innerHTML = underScoreCount().join('  ');





	//document.addEventListener('keypress',(event) =>) {
		//console.log(event);
	//}
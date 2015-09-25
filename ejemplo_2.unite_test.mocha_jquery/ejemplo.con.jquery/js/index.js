var initCounter = function(){
	var fnCountCharacters = function(){
		var message = $('.description');
		var counter = $('#counter');
		var charactersLeft = 0;
		charactersLeft = objCounter.getCharactersLeft(message);
		objCounter.showAlert(charactersLeft, counter, 'warning');
		counter.html(charactersLeft);
	}
	
	$('.description').on('keypress', fnCountCharacters);
	$('.description').on('keyup', fnCountCharacters);
	$('.description').on('paste', fnCountCharacters);
}

$(document).ready(initCounter);

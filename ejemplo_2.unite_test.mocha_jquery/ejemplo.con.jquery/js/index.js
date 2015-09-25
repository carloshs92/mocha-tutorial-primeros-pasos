var initCounter = function(){
	var fnCountCharacters = function(){
		var message = $('.description');
		var counter = $('#counter');
		var charactersLeft = 0;
		var text = message.val();
		var limit = 500;

		charactersLeft = objCounter.getCharactersLeft(message, limit);
		objCounter.showAlert(charactersLeft, counter, 'warning');
		message.val(text.substring(0, limit))
		counter.html(charactersLeft);
	}
	
	$('.description').on('keyup', fnCountCharacters);
	$('.description').on('keypress', fnCountCharacters);
	$('.description').on('paste', fnCountCharacters);
}

$(document).ready(initCounter);

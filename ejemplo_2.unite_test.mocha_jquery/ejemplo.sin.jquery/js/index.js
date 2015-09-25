var initCounter = function(){
	var fnCountCharacters = function(){
		var message = $('.description');
		var counter = $('#counter');
		var text_length = message.val().trim().length
		var limit = 500;
		var charactersLeft = 0;
		var text = message.val();

		charactersLeft = objCounter.getCharactersLeft(text_length, limit);
		
		if(charactersLeft<100){
			counter.addClass('warning')
		}else{
			counter.removeClass('warning')
		}

		message.val(text.substring(0, limit))
		counter.html(charactersLeft);
	}

	$('.description').on('keypress', fnCountCharacters);
	$('.description').on('keyup', fnCountCharacters);
	$('.description').on('paste', fnCountCharacters);
}

$(document).ready(initCounter);

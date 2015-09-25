var initCounter = function(){
	var fnCountCharacters = function(){
		var message = $('.description');
		var counter = $('#counter');
		var text_length = message.val().trim().length
		var limit = message.attr('maxlength')
		var charactersLeft = 0;
		charactersLeft = objCounter.getCharactersLeft(text_length, limit);
		if(charactersLeft<100){
			counter.addClass('warning')
		}else{
			counter.removeClass('warning')
		}
		counter.html(charactersLeft);
	}

	$('.description').on('keypress', fnCountCharacters);
	$('.description').on('keyup', fnCountCharacters);
	$('.description').on('paste', fnCountCharacters);
}

$(document).ready(initCounter);

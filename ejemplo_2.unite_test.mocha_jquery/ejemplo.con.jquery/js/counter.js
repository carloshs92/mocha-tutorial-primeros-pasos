objCounter = {

	getCharactersLeft: function(mensaje, limit){
		var text = $.trim(mensaje.val());
		var charactersLeft = limit - text.length;
		if(charactersLeft<0){
			charactersLeft = 0;
		}
		return charactersLeft;
	},

	showAlert: function(charactersLeft, counter, alertClass){
		if(charactersLeft<100){
			counter.addClass(alertClass)
		}else{
			counter.removeClass(alertClass)
		}
		return counter
	},


}

// Para poder importar el código y asi usarlo en nuestras pruebas
if ( typeof module != 'undefined' && module.exports ) {
	module.exports = objCounter;
}

objCounter = {
	getCharactersLeft: function(text_length, limit){
		var charactersLeft = limit - text_length;
		if(charactersLeft<0){
			charactersLeft = 0;
		}
		return charactersLeft;
	}
}

// Para poder importar el código y asi usarlo en nuestras pruebas
if ( typeof module != 'undefined' && module.exports ) {
	module.exports = objCounter;
}

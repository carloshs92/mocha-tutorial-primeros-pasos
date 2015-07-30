calculator = {
	addNumber: function(a, b){
		return a + b;
	},

	substractNumber: function(a, b){
		return a - b;
	},

	multiplyNumber: function(a, b){
		return a * b;
	},

	divideNumber: function(a, b){
		return a / b;
	}
}

// Para poder importar el código y asi usarlo en nuestras pruebas
if ( typeof module != 'undefined' && module.exports ) {
	module.exports = calculator;
}

function ready(suscribeEvents) {
  if (document.readyState != 'loading'){
    suscribeEvents();
  } else {
    document.addEventListener('DOMContentLoaded', suscribeEvents);
  }
}

suscribeEvents = function(){
	var btnOperator = document.querySelectorAll('.btnOperator');
	for(var i=0;i<btnOperator.length;i++){
		btnOperator[i].addEventListener('click', events.calculateNumber);
	}
}

events = {
	calculateNumber : function(){
		var operator = this.getAttribute('operator');
		var number_1 = document.getElementById('number_1').value;
		var number_2 = document.getElementById('number_2').value;
		var result = ''
		switch(operator) {
		    case 'add':
		        result = calculator.addNumber(number_1, number_2)
		        break;
		    case 'substract':
		        result = calculator.substractNumber(number_1, number_2)
		        break;
		    case 'multiply':
		        result = calculator.multiplyNumber(number_1, number_2)
		        break;
		    case 'divide':
		        result = calculator.divideNumber(number_1, number_2)
		        break;
		}
		document.getElementById('result').value = result;
	}
}

ready(suscribeEvents);

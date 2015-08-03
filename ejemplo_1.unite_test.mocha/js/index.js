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
		var number_1 = parseInt(document.getElementById('number_1').value);
		var number_2 = parseInt(document.getElementById('number_2').value);
		var result = ''
		switch(operator) {
		    case 'add':
		        result = objCalculator.addNumber(number_1, number_2)
		        break;
		    case 'substract':
		        result = objCalculator.substractNumber(number_1, number_2)
		        break;
		    case 'multiply':
		        result = objCalculator.multiplyNumber(number_1, number_2)
		        break;
		    case 'divide':
		        result = objCalculator.divideNumber(number_1, number_2)
		        break;
		}
		document.getElementById('result').value = result;
	}
}

ready(suscribeEvents);

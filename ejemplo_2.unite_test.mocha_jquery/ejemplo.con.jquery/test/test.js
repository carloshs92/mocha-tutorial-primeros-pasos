var assert = require("assert");
var counter = require('../js/counter');
var jsdom = require("jsdom").jsdom;
var Faker = require('Faker');

global.$ = require('jquery')(jsdom().parentWindow);

describe('Counter', function() {

    beforeEach(function(){
    	$('body').html('<textarea class="description" maxlength="500"></textarea><label>Palabras restantes: <span id="counter">500</span></label>');
    });

	it('should calculate the number of characters left', function () {
		var message = $('.description');
		message.val('este texto tiene 30 caracteres')
		assert.equal(470, counter.getCharactersLeft(message));
	});

	it('should be 0 the word counter when it gets to the possible limit writing', function () {
		var sentence = Faker.Lorem.sentences(20);
		var message = $('.description');
		message.val(sentence)
		assert.equal(0, counter.getCharactersLeft(message));
	});

	it('should give me the alert message with 98 characters', function () {
		var spanCounter = $('#counter');
		counter.showAlert(98, spanCounter, 'warning')
		assert.equal(true, spanCounter.hasClass('warning'));
	});

	it('should not give me the alert message with 100 characters', function () {
		var spanCounter = $('#counter');
		counter.showAlert(100, spanCounter, 'warning')
		assert.equal(false, spanCounter.hasClass('warning'));
	});

	it('should give me the alert message with 0 characters', function () {
		var spanCounter = $('#counter');
		counter.showAlert(0, spanCounter, 'warning')
		assert.equal(true, spanCounter.hasClass('warning'));
	});

	it('should not give me the alert message with 300 characters', function () {
		var spanCounter = $('#counter');
		counter.showAlert(300, spanCounter, 'warning')
		assert.equal(false, spanCounter.hasClass('warning'));
	});
});

//npm install jsdom@3 --save-dev 
//npm install jquery --save-dev
//npm install Faker --save-dev
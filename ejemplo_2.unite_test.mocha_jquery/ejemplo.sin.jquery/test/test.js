var assert = require("assert");
var counter = require('../js/counter');

describe('Counter', function() {

	it('should calculate the number of characters left', function () {
		assert.equal(470, counter.getCharactersLeft(30, 500));
	});

	it('should be 0 the word counter when it gets to the possible limit writing', function () {
		assert.equal(0, counter.getCharactersLeft(550, 500));
	});

});

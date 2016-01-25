var sum_numbers = require('../sum_numbers');
var assert = require('assert');

describe("sum_numbers", function(){

    it("should return  14 when called with 5", function(){
        var result = sum_numbers(5);
        assert.equal(result, 14)
    });

    it("should return 0 when caled with 0", function(){
        var result = sum_numbers(0);
        assert.equal(result, 0);
    });

});

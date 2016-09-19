var number_list = require('../number_list');
var assert = require('assert');

describe("number_list", function(){

    it("should return [1, 2, 3, 4, 5] when number_list called with 5", function(){
        var result = number_list(5);
        assert.deepEqual(result, [1,2,3,4,5])
    });

});

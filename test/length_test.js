var length = require('../length');
var assert = require('assert');

describe("length", function(){

    it("should return 16 for the string 'zebras are cool!'", function(){
        assert.equal(length("zebras are cool!"), 16)
    });

    it("should return 0 for the string ''", function(){
        assert.equal(length(""), 0);
    });

});

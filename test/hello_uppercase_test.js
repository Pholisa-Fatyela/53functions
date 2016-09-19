var hello_uppercase = require('../hello_uppercase');
var assert = require('assert');

describe("hello_uppercase", function(){

    it("should return uppercase name  - 'Hello, XOLANI!'", function(){
        var result = hello_uppercase("Xolani");
        assert.equal(result, "Hello, XOLANI!")
    });

    it("should return uppercase hello if no parameter supplied  - 'HELLO!'", function(){
        var result = hello_uppercase();
        assert.equal(result, "HELLO!");
    });

});

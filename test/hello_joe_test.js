var hello_joe = require('../hello_joe');
var assert = require('assert');

describe("hello_joe", function(){

    it("should return  - 'Hello, XOLANI!'", function(){
        var result = hello_joe("Xolani");
        assert.equal(result, "Hello, XOLANI!")
    });

    it("should return 'Hello!' hello for Joe", function(){
        var result = hello_joe("Joe");
        assert.equal(result, "Hello!");
    });

    it("should return 'Hello!' hello for Bob", function(){
        var result = hello_joe("Bob");
        assert.equal(result, "Hello!");
    });

});

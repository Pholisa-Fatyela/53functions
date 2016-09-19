var hello = require('../hello');
var assert = require('assert');

describe('test for hello function', function(){

    it('it should say hello', function(){
        assert.equal(hello(), "hello world!");
    });

});

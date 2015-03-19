TestMyCode.run("testing hello uppercase function", function(assert){
    var result = hello_uppercase();
    // is the result as we expected?
    assert.equals("Hello, " + username + "!", result);
});

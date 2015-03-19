TestMyCode.run("testing hello function", function(assert){
    var result = hello();
    // is the result as we expected?
    assert.equals("hello world", result, "testing the hello function ");
});

TestMyCode.run("testing hello joe function", function(assert){
    var result = hello_joe("joe");
    // is the result as we expected?
    assert.equals("Hello", result, "testing the hello joe function ");
});

TestMyCode.run("testing hello uppercase function", function(assert){
    var result = hello_uppercase("bob");
    // is the result as we expected?
    assert.equals("Hello, BOB!", result, "testing the hello_uppercase function ");
});

TestMyCode.run("testing number list function", function(assert){
    var result = number_list(5);
    var newArray = [1,2,3,4,5];
    // is the result as we expected?
    assert.equals(newArray.toString(), result.toString(), "testing the number list function ");
});

TestMyCode.run("testing sum numbers function", function(assert){
    var result = sum_numbers(5);
    // is the result as we expected?
    assert.equals(15, result, "testing the sum numbers function ");
});

results();
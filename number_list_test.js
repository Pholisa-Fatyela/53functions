TestMyCode.run("testing number list function", function(assert){
    var result = number_list();
    // is the result as we expected?
    assert.equals("hello world!", result);
});

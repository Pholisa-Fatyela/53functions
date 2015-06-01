QUnit.test("hello()", function(assert) {
	var value = hello();
	assert.equal(value,"hello world")
})

QUnit.test("hello_uppercase()", function(assert) {
	var value1 =hello_uppercase("pholisa");
	var value2 =hello_uppercase("lisa");
	assert.equal(value1,"Hello, PHOLISA!")
	assert.equal(value2,"Hello, LISA!")
})

QUnit.test("hello_joe()", function(assert) {
	var value = hello_joe("bob");
	var value1 = hello_joe("joe");
	var value2 = hello_joe("pholisa");
	assert.equal(value,"Hello")
	assert.equal(value1, "Hello")
	assert.equal(value2,"Hello, pholisa!")
})

QUnit.test("number_list()", function(assert) {
	var value1 = number_list(5);
	var value2 = number_list(10);
	assert.deepEqual(value1,[1,2,3,4,5])
	assert.deepEqual(value2,[1,2,3,4,5,6,7,8,9,10])
})

QUnit.test("sum_numbers()", function(assert) {
	assert.deepEqual(sum_numbers(5),15)
	assert.deepEqual(sum_numbers(10),55)
})

QUnit.test("length()", function() {
	var result1 =length("pholisa");
	var result2 =length("sbu");
	var result3 =length("ntombomuziwasekhaya");
	equal(result1,7)
	equal(result2,3)
	equal(result3,19)
})

QUnit.test("upper()", function() {
	var result1 =upper("pholisa");
	var result2 =upper("xhantilomzi");
	equal(result1,"PHOLISA")
	equal(result2, "XHANTILOMZI")
})

QUnit.test("Reverse()", function() {
	var result = Reverse("pholisa");
	var result1 = Reverse("xhantilomzi");
	equal(result,"asilohp")
	equal(result1, "izmolitnahx")
})

QUnit.test("hello_list()", function(assert) {
	var result = hello_list(2);
	assert.deepEqual(result,["Hello world","Hello world"])
})

QUnit.test("high_low()", function(assert) {
	var result = high_low([10,2013,3,0.2,555,69,52,-5.6]);
	assert.deepEqual(result,"min = -5.6 , max = 2013" )
})

QUnit.test("count_words()", function(assert) {
	var result = count_words("hello my name is pholisa fatyela");
	assert.equal(result,6)
})

QUnit.test("sum_word_len()", function(assert) {
	var result = sum_word_len("hello my name is pholisa fatyela");
	assert.equal(result,27)
})

<<<<<<< HEAD
QUnit.test("longest_word()", function(assert) {
    var result = longest_word("hello my name is pholisa");
    assert.equal(result,"pholisa")
=======
QUnit.test("longestWord()", function(assert) {
	var result = longestWord("hello my name is pholisasss fatyela");
	assert.equal(result,"pholisasss" ,10 )
>>>>>>> d0468fc185157c18d1a982338a56e2ff07904742
})
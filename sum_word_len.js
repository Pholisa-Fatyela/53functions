function sum_word_len(str) {
	//var str = "hello my name is pholisa fatyela";
    var splitStr = str.split(" ");
    var joinStr = splitStr.join("");
    var strLen = joinStr.length;

    return strLen;
}
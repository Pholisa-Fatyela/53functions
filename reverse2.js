function reverse(str) {
	var i = str.length, 
	newStr = "";

	while(i > 0) {
		newStr += str.substring(i-1,i);
		i--;
	}
	return newStr;
}
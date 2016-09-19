function Reverse(str) {
	var i = str.length;
	var newStr = "";

	while(i > 0) {
		newStr += str.substring(i-1, i);
		i--;
	} 
	return newStr;
}
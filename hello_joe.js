module.exports = function(){
	if(username === "Bob" || username === "bob"  || username === "Joe" || username === "joe") {
		return "Hello";
	}
	else{
		return "Hello, " + username + "!";
	}
};

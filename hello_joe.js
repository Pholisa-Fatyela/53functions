function hello_joe(username) {
	if(username === "Bob" || username === "bob"  || username === "Joe" || username === "joe") {
		return "Hello";
	}
	else{
		return "Hello, " + username + "!";
	}
}
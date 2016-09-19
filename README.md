---
unitstandard: 115362-SO2-AC1, 115362-SO2-AC2, 115362-SO2-AC3
---

# 53functions

You can think of 53 functions as small bite size programming challenges which aim to prepare coders to do Code Katas. Each coder will have to clone this repository and start to commit their implementation of the functions. A central CI instance will run their functions and give them a score for each function based on how many tests are passing. These functions are not to be completed in one sitting, but are to be completed in the coders' own time.

> Fifty-three is the 16th prime number. It is also an Eisenstein prime, and a Sophie Germain prime. The sum of the first 53 primes is 5830, which is divisible by 53, a property shared by few other numbers.

## Requirements:

For these exercises it's assumed that:

* node is installed
* npm is installed

Basic knowledge required:

* basic understanding of node modules
* JavaScript knowledge

## What to do:

You should:

* Fork this repo.
* Use TDD.
	* Write tests using [Mocha](https://mochajs.org/)
	* Always write the test code first: this will help you to understand what needs doing and get you into the habit of doing TDD.
	* You need mocha installed. Install it global use `sudo npm install -g mocha`
	* Run `npm install`
	* Register on [Travis](https://travis-ci.org) and configure your fork of this project in Travis. See the travis specific for this project in `.travis.yml`

**Commit to Git regularly**

## These things count:

* regular commits;
* testable code;
* passing tests.

## The functions

The function name and the file name should be the same

For example, the `hello` function should be in the `hello.js` should look like this:

```javascript
module.exports = function (){
	// your code goes hello
	return "hello world!";
};
```

The function is written as a Node.JS module. Read more about modules [here](http://openmymind.net/2012/2/3/Node-Require-and-Exports/),
[here](http://eloquentjavascript.net/10_modules.html),
[here](http://www.sitepoint.com/understanding-module-exports-exports-node-js/) or [here](http://www.hacksparrow.com/node-js-exports-vs-module-exports.html) :-)


## The tests

Each function should have a test file called `functionname_test.js`. For example, the test file for ```hello.js``` should be called ```hello_test.js``` in the `./test` folder.

The test for `hello.js` that's in `test.js` looks like this:

```javascript

var hello = require('./hello');
var assert = require('assert');

describe('test for hello', function(){

	it('it should say hello', function(){
		assert.equal(hello(), "hello world!");
	});

});

```

<!--codex ignore mocha-->
To run the tests type: `mocha`

If you run Mocha `1` test will pass, and `6` will fail.

Go ahead and fix the failing tests by adding function implementations. There are stub implementations for the first 7 functions, note that there are more than one test for some of the functions.

After that add tests and implementations for all remaining functions.

## The functions:

`Note: If any of these function specifications don't make sense, let's discuss, clarify, and change it where necessary.`

Create a function that:

 #| File name & function name | Function behaviour
---|---|---
1| hello.js | returns "hello world"
2| hello_uppercase.js| takes a username as a parameter and returns "Hello, USERNAME!". If no username is supplied it should return "HELLO!".
3| hello_joe.js | takes a username as a parameter and returns "Hello, USERNAME!". If the username is Joe or Bob only say "Hello!"
4| number_list.js |takes a number as a parameter (n) and returns a list of numbers from 1 to n
5| sum_numbers.js| takes a number as a parameter (n) and returns the sum of numbers from 1 to n
6| length.js|takes a string parameter and returns the length of it
7| upper.js |takes a string parameter and returns it in uppercase
8 |reverse.js|takes a string parameter and returns it reversed
9 |hello_list.js| takes a number as parameter and returns a list of "hello world" entries equal to the number supplied
10 |high_low.js| takes a list of numbers as a parameter and returns the highest and lowest numbers in the list
11 | count_words.js|takes a sentence as a parameter and returns the number of words in the sentence
12 | sum_word_len.js |takes a sentence as a parameter and returns the sum of the length of words in it
13 | longest_word.js | takes a sentence as a parameter and returns the longest word in it, and the length of the word
14|shortest_word.js|takes a sentence as a parameter and returns the shortest word in it, and the length of the word
15|word_length.js|takes a sentence as a parameter and returns the average word length rounded up and rounded down
16|avg.js|takes a sentence as a parameter and returns the average word length rounded up
17| letter_map.js | Write a function that takes a sentence as a parameter.The function should return a map. The keys of the map should be the first letters from the words in the sentence. The values should be an array of any words in the sentence that start with the key of the map. `"Let's do this today"` should  return `{"L" : ["Let's"], d : ["do"], "t" : ["this", "today"]}`.
18|start.js|takes a sentence as a parameter and returns the letter most words starts with
19|ends.js|takes a sentence as a parameter and returns the letter most words end with
20|occurs_most.js|takes a sentence as a parameter and returns the letter that occurs the most
21|occurs_least.js|takes a sentence as a parameter and returns the letter that occurs the least
22|uppercase_letters.js| takes a string as a parameter and returns all the uppercase letters in it
23|lowercase_letters.js| takes a string as a parameter and returns all the lowercase letters in it
24|draw.js | takes a list of strings as a parameter and prints each entry in the list to the screen
25|square_stars.js| can draw a 4x4 square using the `*` character. Use the `draw` function you created above to display the results of the function on the screen. All subsequent functions that need to draw something on the screen should use the `draw` function. Why do you think we need the `draw` function?
26|square.js| takes a character as a parameter and draws a 4x4 square using it. Remember to use the `draw` function.
27|square_param.js| takes a character and dimensions as parameters, and can draw a square using them. Remember the `draw` function.
28|tri.js|can draw a triangle with a base of 4 using `*`.
29|tri_char.js| takes a character as a parameter, and can draw a triangle with a base of 4 using it.
30|square_param_base.js| takes a character and a base size as parameters, and can draw a square using them.
31|diamond.js| can draw a diamond shape using `*`. The center of the diamond should be 5 characters wide.
32|diamond_base.js| takes a character as a parameter, and can draw a diamond shape using it. The base of the diamond should be 5.
33|diamond_char_base.js| takes a character and a base size as parameters, and can draw a diamond shape using them.
34|add.js|takes two numbers as parameters, and can add them
35|divide|takes two numbers as parameters, and can divide them
36|calc_all.js|takes two numbers and a symobl as parameters, and can add, subtract, multiply, or divide the numbers, based on the symbol.
37|calc_chain.js|has add, subtract, multiply and divide methods - methods should be chainable. For example `Calculator.add(1,2).multiply(9).value()` should equal 27.
38|paper_rock.js|allows one to play rock paper scissors `* = rock, # = paper, x = scissors`, it should be a constructor function that takes in the number of games to be played. `var game1 = new RockPaperScissors(3)` should have a `play` and a `score` method. The `play` method should generate a turn for each of the two players and return the result like this:  `{result : '* - x', winner : 'Player1', status : 'busy' }` until a game is done, in which case it should return a status of done whenever the `play` method is called. The `score` method should return a score like this : `{ Player1 : 1, Player2 : 2, winner : 'Player1' }`. The winner property should only be returned if a game has been won by a player.
39|factors2.js| takes a number as a parameter, and finds all the factors of 2 that are less than it.
40|factors_2_or_7.js| takes a number as a parameter, and finds all the factors of 2 or 7 that are less than it.
41|factors_2_and_7.js| takes a number as a parameter, and finds all the factors of both 2 and 7 that are less than it.
42|factorial.js| takes a number as a parameter, and can calculate the factorial of it.
43|fibonacci.js| takes a number as a parameter, and can calculate a fibonacci sequence less than that number.
44|ascii_upper.js | can find the sum of all the capital letter ASCII codes
45|ascii_params.js  | takes a word as a parameter, and returns the sum of all the ASCII codes for it.
46| mondays.js| takes a year as an parameter, and finds the number of Mondays in that year
47| anyday.js| takes a year and a day of the week as a parameter, and finds the number of occurences of that day in that year
48|dice_rolls.js| takes a number as a parameter. Can simulate dice rolls for that number of times, and returns the result of the dice rolls.
49|lower_ascii_sum.js| takes a string as a parameter, and returns the sum of all the lower case letter ASCII codes in it.
50|multiples.js| that can count in multiples, it takes a parameter of the multiple to count in and have a .count() method to give the next number and a list function to return all the numbers that were already counted.
51|cricket.js| that solves the following riddle. The common field cricket chirps in direct proportion to the current tem­perature. Adding 40 to the number of times a cricket chirps in a minute, then dividing by 4, gives us the temperature (in Fahrenheit degrees). Write a program that takes the number of cricket chirps in fifteen seconds as a parameter, then outputs the current temperature to the nearest half degree. Read more about this at [Homework Programs](http://users.csc.calpoly.edu/~jdalbey/101/HomeworkProblems.html).
52|filter.js| takes a list of values and a filter function that can filter the list of values - the filtered result should be returned by the function. This function should be able to filter any kind of data: it shouldn't care about the data.
53 |tbd| ?

// Print Hello World to console 

console.log('Hello World');

//Variables 

var buddy = 'my friend';
var lightSwitch = true;
var books = 9;
var sentence = 'the chicken crossed the road';

// Print variables 
console.log (buddy);
console.log ('buddy');
console.log (lightSwitch);

// Declare Variables
var dog = 'Wolf';
var date = 51019;
console.log (dog);
console.log (date);

// Decalre equation
var equation1 = 10 + 5;
var equation2 = 10 - 5;
var equation3 = 10 * 5;
var equation4 = 10 / 5;

var equation5 = equation1 * 4;

// Array List 
var groceryList = ['Milk', 'Cereal', 'Tea Cookies', 'Tea'];

var equationList = [equation1, equation2, equation3, equation4];
 
//Print variable values
console.log  (books, sentence);
console.log (equationList);

// Declare Family variable Birthdates
var bdatem = 10;
var bdaten = 25;
var bdatemm = 26;

var bdatefamily = [bdatem,bdatemm,bdaten];

var familynumbers = [10,25,26];

// Adding variables to an Array using the Push function
familynumbers.push(12);
familynumbers.push(24);

//Print new added value from Array List
console.log (familynumbers);

// Splicing the array for example this would be 10,25. (1st position = start, 2nd position = stop at)
// For example if index (0,5) it will collect 10,25,26,12 (which is position 0,1,2,3). If index (0,6) it 
// will collect 10,25,26,12,24 (5 numbers) of position 0,1,2,3,4. 

// NOTE - if you have more than one splice the results will change
console.log(familynumbers.splice(0,5));

var answer = ['yes', 'no', 'ok', 'bye'];
console.log(answer.splice(2));

console.log(groceryList);

// Use reverse function to change order in the list
groceryList.reverse();
console.log(groceryList);

//A way to find out what the datatype is of the variable: Typeof function is good to use
console.log(typeof lightSwitch);

console.log(typeof books);

var num1 = 21;

//Create an interpelated string
var agesentence = `Your age is ${num1}`;
console.log(num1);






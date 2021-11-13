const prompt = require ("prompt-sync") (); //imports the library and assigns it to a variable called prompt

console.log(`\n`);

//prompt and capture the first number 
const num1 = parseInt (prompt ("Please enter the first number: "));

//prompt and capture the second number
const num2 = parseInt (prompt ("Please enter the second number:  "));

// add the two numbers entered
const sum = num1 + num2;

//print the sum of the two numbers
console.log (`\nThe sum of ${num1} and ${num2} is ${sum}`); 
const prompt = require("prompt-sync")();


console.log ("\n");

const AGE_DEDUCTION = 5; 

const name = prompt("Hi, what's your name? ");
console.log(`\nWelcome to our show ${name}`);

const age = parseInt(prompt("How old are you? "));
const new_age = age - AGE_DEDUCTION;
console.log(`Hmmmmm, you don't look like a day over ${new_age}`);

console.log("\n");
const location = prompt(`Tell me, ${name}, where you live? `);
console.log(`\n Oh, I've heard ${location} is a lovely place`);
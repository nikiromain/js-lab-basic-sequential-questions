const prompt = require("prompt-sync")();


const KILOGRAMS_CONVERT = 2.2;
const name = prompt("Please enter your name: ");
const weight = parseFloat (prompt("Enter your weight in pounds: "));

const weightKg = weight * KILOGRAMS_CONVERT; 

console.log(`\n${name} your weight in kilograms: ${weightKg}`);
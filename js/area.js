const prompt = require("prompt-sync")();

const pi = 22/7;

//prompt and ask the user for the radius of the circle
const radius = parseFloat (prompt("Please ennter the radius of the circle: "));

//calculate the area of the circle
const areaOfCircle = pi * radius ** 2;

//calculate circumference of circle
const circumferenceOfCircle = 2 * pi * radius;

//output area of the circle
console.log(`\nThe area of the circle with ${radius} is  ${areaOfCircle.toFixed(2)}`);

//output circumference of the circle
console.log(`The circumference of a circle with ${radius} is ${circumferenceOfCircle.toFixed(2)}`);

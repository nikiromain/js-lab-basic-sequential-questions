const prompt = require ("prompt-sync")();

//prompt and capture the price of an item
const price = parseFloat (prompt("Enter the price of the item: "));

//prompt and capture item number
const itemNumber = parseInt (prompt("Enter the item number: "));

//prompt and capture item title
const itemTitle = prompt("Enter the item title: ");

//prompt and capture the discount percentage
const discountPercentage = parseFloat (prompt("Enter discount percent: "));

//calculate discount amt
const discount =  (discountPercentage/100) * price;

//calculate discounted price
const discountPrice = price - discount;

//Display product item no
console.log (`\nProduct Item Number: ${itemNumber}`);

//Display product title
console.log (`\nProduct Title: `);

//Display original price
console.log(`\nOriginal price: $${price}`);

//display discounted amount
console.log(`\nDiscount amount: $${discount}`);

//display discounted price
console.log(`Your discount price is $${discountPrice}`);


const prompt = require ("prompt-sync")();

console.log ("\n");

const TAX_RATE = 0.25;

const employeeName = prompt("Please enten the employee's Name: ");
const payRate = parseFloat (prompt(`${employeeName} rate of Pay: `));
const hoursWorked = parseFloat (prompt("Enter the number of hours Worked: "));

const grossPay = payRate * hoursWorked; 

const deductions = TAX_RATE * grossPay;

const netPay = grossPay - deductions;

console.log("\n\n");
console.log("**********EMPLOYEE PAY SLIP**********");
console.log(`Employees Name: ${employeeName}`);
console.log(`Gross Pay: $${grossPay.toFixed(2)}`);
console.log(`Total Deductions: $${deductions}`);
console.log(`Net Pay: $${netPay}`);


const num1 = Number(prompt("Please enter the first number :"));
const operator = prompt("Enter one of the 4 math operations to calculate (+ , - , * , /) :");
const num2 = Number(prompt("Please enter the second number :"));

let result;

if (operator == "+") result = num1 + num2;
else if (operator == "-") result = num1 - num2;
else if (operator == "*") result = num1 * num2;
else if (operator == "/") result = num1 / num2;
else console.log("Please follow the instructions carefully to process with your calculation.")

console.log(result);
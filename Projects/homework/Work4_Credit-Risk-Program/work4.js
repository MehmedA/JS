const salary = Number(prompt("Please enter your salary to view your credit risk."));
const spending = Number(prompt("Please enter your monthly spending amount :"));
const minWage = 5500;

const credit = salary - spending < minWage ? "No Credits Granted 🥺" : "Credit Granted 🤑"
console.log(credit)
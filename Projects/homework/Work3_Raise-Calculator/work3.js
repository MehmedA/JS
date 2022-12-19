const salary = Number(prompt("Enter your current salary:"));
const minWage = 5500;

if (salary <= minWage) {
  console.log(`Your salary will be ${salary * 1.5} TL.`);
} else if (salary > minWage) {
  console.log(`Your salary will be ${Math.trunc(salary * 1.1)} TL.`);
} else {
  console.log("Please enter your salary correcly.");
}
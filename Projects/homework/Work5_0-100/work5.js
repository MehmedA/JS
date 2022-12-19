var number = Number(prompt("Please enter a number between 0 to 100."))   
    do {
        number = Number(prompt("Please enter a number between 0 to 100."))
    } while ((number < 0) || (number > 100));
console.log(number)
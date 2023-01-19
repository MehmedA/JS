const check = document.querySelector(".check");
const result = document.querySelector(".result");

check.addEventListener("click", function(e) {
    e.preventDefault();
    let inp = Number(document.querySelector(".inp").value);
    if (!inp) {
        alert("Please enter a number to proceed.");
    }
    else if (inp < 0 || inp > 3000){
        alert("Please enter a number between 0 to 3000.")
    }
    else {
        result.textContent = convertToRoman(inp);
    }
});

function convertToRoman(inp) {
    let roman = "";
    const romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
    for (let i = 0; i < numbers.length; i++) {
      while (inp >= numbers[i]) {
        roman += romanNumeral[i];
        inp -= numbers[i];
      }
    }
    return roman;
  }


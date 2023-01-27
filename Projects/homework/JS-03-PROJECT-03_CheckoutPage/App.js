"use script";

// Buttons
let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let remove = document.querySelectorAll(".remove");

// Amount
let quantity = document.querySelectorAll("#quantity");
let stotal = document.querySelectorAll(".stotal");

// Totals
let subt = document.querySelector(".subt");
let tax = document.querySelector(".tax");
let ship = document.querySelector(".ship");
let total = document.querySelector(".total");

plus.forEach(p =>{
    p.addEventListener("click", (e) =>{
        e.preventDefault();
        ++p.previousElementSibling.innerText;
    })
})

minus.forEach(p =>{
    p.addEventListener("click", (e) =>{
        if (p.nextElementSibling.textContent > 1) {
        e.preventDefault();
        --p.nextElementSibling.innerText;
    }})
})

(".stotal").innerText = "1"
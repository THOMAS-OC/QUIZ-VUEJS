const Q4 = document.querySelector(".Q4")
const btn = document.querySelector("button")
const radioButtons = document.querySelectorAll('input');
let selectedSize = []

const goodResponses = ["Guido van Rossum", "Filtrer", "os", "pyweb"]

btn.addEventListener("click", (e) => {
    
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedSize.push(radioButton.value);
        }
    }
    console.log(selectedSize);
})

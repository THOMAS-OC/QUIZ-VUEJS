const btn = document.querySelector("button")
const radioButtons = document.querySelectorAll('input');
const boxResult = document.querySelector(".score")
const result = document.querySelector(".score__result")
const articles = document.querySelectorAll("article")

let selectedResponses = []

const correctionResponses = ["Guido van Rossum", "Modifier", "os", "Pyweb", "add"]

let goodResponses = []

let index = 0

btn.addEventListener("click", (e) => {
    // Récupération des réponses utilisateur
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedResponses.push(radioButton.value);
        }
    }

    // Correction des réponses
    for (const userResponse of selectedResponses) {
        index ++

        if (correctionResponses.includes(userResponse)) {
            goodResponses.push(userResponse)
            document.querySelector(`.Q${index}`).className = "article-green"
        }

        else {
            document.querySelector(`.Q${index}`).className = "article-red"
        }
    }

    console.log(goodResponses);

    boxResult.className = "score show"
    result.innerText = `${goodResponses.length}/5`

    articles.forEach()
    
})

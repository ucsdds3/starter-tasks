
// Clicker JS
let counter = document.getElementById("counter-num")
let counterButton = document.getElementById("count-button")

counterButton.addEventListener("click", () => {
    var count = counter.innerHTML
    counter.innerHTML = Number(count) + 1
})


// List JS
let textInput = document.getElementById("text-input")
let listButton = document.getElementById("list-button")
let listArea = document.getElementById("list-area")

listButton.addEventListener("click", () => {
    var inputText = textInput.value
    if (inputText === "") {
        return
    } else {
        listArea.innerHTML += `<li>${inputText}</li>`
    }
})
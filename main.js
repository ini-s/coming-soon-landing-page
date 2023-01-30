const message = document.querySelector(".error-message")
const icon = document.querySelector(".error-icon")
const input = document.querySelector("input")
const btn = document.querySelector(".submit-btn")
const inputText = document.querySelector("input")
const form = document.querySelector("form")

btn.addEventListener("click", (e) => {
    console.log(inputText.value)
    if (validator.isEmail(inputText.value)) {
        console.log("successful")
    }
    else {
        message.classList.add("active")
        icon.classList.add("active")
        input.classList.add("active")
    }
})

form.addEventListener("submit", (e)=>{
    e.preventDefault()
})
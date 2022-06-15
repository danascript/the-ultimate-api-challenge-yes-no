// API
const API_ENDPOINT = 'https://yesno.wtf/api';
const button = document.getElementById("button")

function clearAnswer() {
    document.getElementById("answer").innerText = ""
}

function renderAnswer(data){
const answer = data.answer
document.getElementById("answer").innerText = answer
setTimeout(clearAnswer,3000)
}

function fetchAnswer (){
    fetch(API_ENDPOINT)
    .then (res => {
        return res.json()
    })
    .then (res => {
        console.log(res)
        renderAnswer(res)
    })
    .catch(err => {
        console.log(err)
    })
}

button.addEventListener('click',fetchAnswer)
/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

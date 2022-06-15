// API
const API_ENDPOINT = 'https://yesno.wtf/api';

function fetchAnswer (){
    fetch(API_ENDPOINT)
    .then (res => {
        return res.json()
    })
    .then (res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}
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

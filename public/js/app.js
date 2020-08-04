const weatherForm =  document.querySelector('button')
const searchedLocation = document.querySelector('input')
const messageTwo = document.querySelector('#message-1')
const forecastParagraph = document.querySelector('#message-2')

weatherForm.addEventListener('click', (e) => {
    e.preventDefault()
    const location = searchedLocation.value

    messageTwo.textContent = 'Loading forecast...'
    forecastParagraph.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) =>{
        response.json().then((data) => {
            if (data.error) {
                messageTwo.textContent = data.error
            } else {
                messageTwo.textContent = data.location
                forecastParagraph.textContent = data.forecast
            }
        })
    })
})






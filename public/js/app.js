console.log('Welcome to app.js')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('.p1')
const messageTwo = document.querySelector('.p2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = ""
    messageTwo.textContent = ""

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error)
            messageOne.textContent = data.error
        }
        else {
            console.log(data.location)
            messageOne.textContent = data.location
            console.log(data.forecast)
            messageTwo.textContent = data.forecast
        }
    })
})
})
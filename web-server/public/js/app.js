const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    message1.textContent = "Loading..."
    const location = search.value
    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            message1.textContent = data.error
        } else {
            message1.textContent = data.address
            message2.textContent = data.forecast
            }
        
        })
    })
})
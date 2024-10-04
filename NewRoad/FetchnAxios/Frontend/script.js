//fetch function
const sendData = '';
async function getData() {
    const url = 'https://localhost:8003/'
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error(`Response Status: ${response.status}`)
        }
        const json = await response.json()
        console.log(json)
        sendData = json
    } catch(error) {
        console.log(error.message)
    }
}

//display function
let data = document.getElementById('show')
data.innerText = sendData
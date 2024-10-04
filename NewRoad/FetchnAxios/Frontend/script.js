//fetch function
const sendData = '';
async function getData() {
    axios.get('https://localhost:8003')
    .then(response=>{
        sendData = response
        console.log(response)
    })
    .catch(error=>{
        console.log("Error Occured")
    })
    .finally(()=> console.log("Request Happened"))
}

//display function
let data = document.getElementById('show')
data.innerText = sendData
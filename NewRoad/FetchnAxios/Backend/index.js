const express = require('express')
const axios = require('axios').default
const cors = require('cors')
const app = express()
app.use(cors())

app.get('/', async ()=>{
    axios
    .post('http://127.0.0.1:3000/Frontend/index.html', 
        {username: Tanmay})
    .then(res => console.log(res))
    .catch(e => console.log("Error"))
})

app.listen(8003, ()=> console.log("App is running on port: 8003"))

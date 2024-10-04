const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.get('/', async ()=>{
    const myheaders = new Headers()
    myheaders.append("Content-Type", "application/json")

    const response = await fetch("http://127.0.0.1:3000/Frontend", {
        method: "POST",
        body: JSON.stringify({username: "example"}),
        headers: myheaders
    })
})

app.listen(8003, ()=> console.log("App is running on port: 8003"))

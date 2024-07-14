const express = require('express')
const userModel = require('./userModel')
const app = express()

app.get('/', (req, res)=>{
    res.send("Hiyaahh!!")
})

app.get('/create', async (req, res)=>{
    const created = await userModel.create({
        tweet: "My name is Tanmay"
    })
    res.send(created)
})

app.listen(3000)
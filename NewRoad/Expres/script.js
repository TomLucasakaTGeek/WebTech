const express=require('express')
const app=express()



app.use( function(req, res, next) {
    next()
})

app.get('/' , (req,res)=>{
    res.send("Hello World")
})

app.get('/profile', (req,res)=>{
    res.send("Hello from Profile")
})

app.get("/profile/:username", (req,res)=>{
    res.send(`Hello from ${req.params.username}`)
})

app.listen(3000)
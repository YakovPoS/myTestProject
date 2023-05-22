const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))//переход на основную страницу
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'login.html'))// переход на страницу login
})

app.post('/', urlencodedParser, (req,res)=>{
    const dataName = JSON.stringify(req.body.name)
    console.log(req.body)
    const dataPass =(req.body.pass)
    const dataForFile =  JSON.stringify(req.body)
    
    fs.appendFile(path.join(__dirname, 'data', 'someData.json' ), (dataForFile)+ '\n', err=>{
        if (err) throw err
        console.log('File changed')
    })
    res.redirect('/login')
})

app.post('/login', urlencodedParser,(req,res)=>{
    fs.readFile(path.join(__dirname, 'data', 'someData.json' ), 'utf-8', (err,data)=>{

        const dataName = JSON.stringify(req.body.nameLog)
        const dataPass = JSON.stringify(req.body.passLog)
        var verifiableData = data.split(' "')
        console.log(verifiableData)
    })
    res.redirect('/welcome')
})




const port = 3000
app.listen(port, ()=>{
     console.log(`Server is running on port ${port} !`)    
})
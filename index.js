const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/views'));

app.get('/',(req,res)=>{
    res.render('index.ejs')//переход на основную страницу
})

app.get('/login',(req,res)=>{
    res.render('login.ejs')// переход на страницу login
})

app.get('/welcome',(req,res)=>{
    res.render('welcome.ejs')// переход на страницу welcome
})

app.get('/error',(req,res)=>{
    res.render('error.ejs')// переход на страницу error
})

app.post('/', urlencodedParser, (req,res)=>{
        const dataForFile = JSON.stringify(req.body)
        
        fs.appendFile(path.join(__dirname, 'someData.txt' ), (dataForFile)+ '\n', err=>{
            if (err) throw err
            console.log('File changed')
        })
        res.redirect('/login')
        flag = false
    }
)

app.post('/login', urlencodedParser,(req,res)=>{
    fs.readFile(path.join(__dirname, 'someData.txt' ), 'utf-8', (err,data)=>{
        if (err) throw err
        const dataName = JSON.stringify(req.body.nameLog)
        const dataPass = JSON.stringify(req.body.passLog)
        var verifiableData = data.toString().split(/(?={")/).map(x => JSON.parse(x))
        let f = true
        verifiableData.forEach(element => {
            if (element.name==JSON.parse(dataName) && element.pass==JSON.parse(dataPass)){
                res.render('welcome.ejs', {data:element})
                f = false
                return
            }
        })
        if(f){
            res.render('error.ejs')
        }
    })
})


const port = 3000
app.listen(port, ()=>{
     console.log(`Server is running on port ${port} !`)    
})
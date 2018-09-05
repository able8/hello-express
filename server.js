var express = require('express')
var bodyParser = require('body-parser')

var app = express()
// create application/json parser
var jsonParser = bodyParser.json()
// 使用中间件，在请求和响应中间处理 create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {
    console.dir(req.query)
    res.send('home page: ' + req.query.find)
})

app.get('/profile/:id/user/:name', function (req, res) {
    console.dir(req.params)
    res.send("You requested " + req.params.id + req.params.name)
})

app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
})

app.post('/', urlencodedParser, function (req, res) {
    console.dir(req.body)
    res.send('ok')
})

app.post('/upload', jsonParser, function (req, res) {
    console.dir(req.body)
    res.send('ok')
})

app.listen(3000)
console.log('listening to port 3000')
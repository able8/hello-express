var express = require('express')

var app = express()

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

app.listen(3000)
console.log('listening to port 3000')
var express = require('express')

var app = express()

app.get('/', function (req, res) {
    var responseObject = req.ip
    res.send(responseObject)
})

app.listen(3000)
console.log('listening to port 3000')
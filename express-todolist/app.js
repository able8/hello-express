var express = require('express')
var todoController = require('./controllers/todoController')

var app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

todoController(app)

app.listen(3000)

console.log('listening to port 3000')
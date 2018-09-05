var bodyParser = require('body-parser')
var urlencodeParser = bodyParser.urlencoded({ extended: false})
var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'coding a'}]

module.exports = function (app) {
    app.get('/todo', function (req, res) {
        res.render('todo', { todos: data })
    })

    app.post('/todo', urlencodeParser, function (req, res) {
        data.push(req.body)
        res.json(data) // 回复结束响应，可以回复其它的
    })

    app.delete('/todo/:item', function (req, res) {
        data = data.filter(function (todo) { // 返回为true的内容
           return todo.item.replace(/ /g, "-") !== req.params.item
        })
        res.json(data)
        console.log(data)
    })
}
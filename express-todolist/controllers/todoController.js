var bodyParser = require('body-parser')
var urlencodeParser = bodyParser.urlencoded({ extended: false})
// var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'coding a'}]

const mongoose = require('mongoose')
mongoose.connect('mongodb://able8:able@ds020208.mlab.com:20208/todos')

// Schema 模式，规定数据类型
var todoSchema = new mongoose.Schema({
    item: String // 字段名，字符串
})
//对应数据库中的表
var Todo = mongoose.model('Todo', todoSchema)
// 添加一条数据
// var itemOne = Todo({ item: 'buy flowers'}).save(function (err) {
//     if (err) throw err
//     console.log('item saved')
// })

module.exports = function (app) {
    app.get('/todo', function (req, res) {
        Todo.find({}, function (err, data) {
            if (err) throw err
            res.render('todo', { todos: data })
        })
    })

    app.post('/todo', urlencodeParser, function (req, res) {
        var itemOne = Todo(req.body).save(function (err, data) {
            if (err) throw err
            res.json(data)
        })
    })

    app.delete('/todo/:item', function (req, res) {
        // data = data.filter(function (todo) { // 返回为true的内容
        //    return todo.item.replace(/ /g, "-") !== req.params.item
        // })
        Todo.find({item: req.params.item.replace(/ /g, '-')}).remove(function (err, data) {
            if (err) throw err
            res.json(data)
        })
    })
}
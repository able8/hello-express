var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')

var multer = require('multer')
//var upload = multer({ dest: 'uploads/'}) // 创建上传目录

var app = express()

app.set('view engine', 'ejs')

// create application/json parser
var jsonParser = bodyParser.json()
// 使用中间件，在请求和响应中间处理 create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// 创建目录，上传文件，保留
var createFolder = function (folder) {
    try {
        fs.accessSync(folder);
    } catch (e) {
        fs.mkdirSync(folder);
    }
};

var uploadFolder = './upload/';

createFolder(uploadFolder);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });


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

app.get('/form/:name', function (req, res) {
    var person = req.params.name
    res.render('form', { person: person })
})

app.post('/upload', upload.single('logo'), function (req, res) {
    console.dir(req.file);
    res.send({ 'ret_code': 0 })
})


app.listen(3000)
console.log('listening to port 3000')
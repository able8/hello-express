# hello-express

Node.js + Express + MongoDB 实战 TodoList 基础入门

视频地址

- [https://www.rails365.net](https://www.rails365.net/movies/nodejs-express-mongodb-ji-chu-pian-1-jie-shao)
- [b站](https://www.bilibili.com/video/av20196752?t=62)

常用链接

- [express 官网](http://expressjs.com/)
- [express github](https://github.com/expressjs/express)

看视频整理要点笔记:

----

- [hello-express](#hello-express)
    - [1.介绍](#1%E4%BB%8B%E7%BB%8D)
    - [2.请求与响应](#2%E8%AF%B7%E6%B1%82%E4%B8%8E%E5%93%8D%E5%BA%94)
    - [3.路由参数](#3%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0)
    - [4.查询字符串](#4%E6%9F%A5%E8%AF%A2%E5%AD%97%E7%AC%A6%E4%B8%B2)
    - [5.POST请求和postman工具](#5post%E8%AF%B7%E6%B1%82%E5%92%8Cpostman%E5%B7%A5%E5%85%B7)

----

## 1.介绍

- express
    - 基于 Node.js 的 web 框架
    - 用于快速搭建网站和应用，如博客、商场、聊天室、为前端提供 API
    - 热门、健全、简单、少走弯路
    - 简单路由系统
    - 集成模版引擎
    - 中间件系统

- 快速开始
    - `npm init -y` 默认模式生成 `package.json`
    - `npm install --save express` 安装框架
    - `npm install -g nodemon` 方便调试，`nodemon xxx` 启动应用


```js
var express = require('express')

var app = express()

app.get('/', function (req, res) {
    res.send('this is homepage')
})

app.listen(3000)
```

## 2.请求与响应

- 学会查看 [官网 API 文档](http://expressjs.com/en/4x/api.html)，最快最全，这个文档太清晰易懂了
- [res.send([body])](http://expressjs.com/en/4x/api.html#res.send)
- [req.ip](http://expressjs.com/en/4x/api.html#req.ip)

```js
res.send(new Buffer('whoop'));
res.send({ some: 'json' });
res.send('<p>some html</p>');
res.status(404).send('Sorry, we cannot find that!');
res.status(500).send({ error: 'something blew up' });

res.json({ user: 'tobi' });
res.status(500).json({ error: 'message' });

req.ip
// => "127.0.0.1"

// GET /search?q=tobi+ferret
req.query.q
// => "tobi ferret"

// example.com/users?sort=desc
req.path
// => "/users"
```

## 3.路由参数

- 路由参数是动态的

```js
// http://127.0.0.1:3000/profile/1/user/able
app.get('/profile/:id/user/:name', function (req, res) {
    console.dir(req.params) // 显示属性  { id: '1', name: 'able' }
    res.send("You requested " + req.params.id + req.params.name)
})
```

- 路由参数支持正则表达式

```js
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
})
```

## 4.查询字符串

- 文档 [req.query](http://expressjs.com/en/4x/api.html#app.use)

```js
// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
req.query.order
// => "desc"

req.query.shoe.color
// => "blue"

req.query.shoe.type
// => "converse"
```

```js
// http://127.0.0.1:3000/?find=hot
app.get('/', function (req, res) {
    console.dir(req.query) // => { find: 'hot' }
    res.send('home page: ' + req.query.find)
})
```

## 5.POST请求和postman工具

- 使用 body-parser 包，处理 post 请求
    - [body-parser 文档](https://www.npmjs.com/package/body-parser)
    - `npm install body-parser --save` 安装
    - 查看文档，使用例子

- postman 工具，用来图形化模拟浏览器发送各种请求
- [POST 提交数据方式](https://imququ.com/post/four-ways-to-post-data-in-http.html)
    - HTTP/1.1 协议规定的 HTTP 请求方法有 OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE、CONNECT 这几种
    - POST 一般用来向服务端提交数据
    - application/x-www-form-urlencoded 普通表单提交
    - multipart/form-data 可以上传文件的表单，必须让 <form> 表单的 nctype 等于 multipart/form-data

```js
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()
// 使用中间件，在请求和响应中间处理 create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/', urlencodedParser, function (req, res) {
    console.dir(req.body)
    res.send('ok')
})

app.post('/upload', jsonParser, function (req, res) {
    console.dir(req.body)
    res.send('ok')
})
```

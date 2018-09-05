# hello-express

Node.js + Express + MongoDB 实战 TodoList 基础入门

视频地址

- [https://www.rails365.net](https://www.rails365.net/movies/nodejs-express-mongodb-ji-chu-pian-1-jie-shao)
- [b站](https://www.bilibili.com/video/av20196752?t=62)

常用链接

- [express 官网](http://expressjs.com/)
- [express github](https://github.com/expressjs/express)

看视频整理要点笔记:

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

- 学会查看 [官网 API 文档](http://expressjs.com/en/4x/api.html)，最快最全
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



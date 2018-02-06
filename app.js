
const express = require('express');

const app = express();

const {checkLogin} = require('./middlewares/auth');
// const router = require("./router");
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const topicRouter = require('./routes/topic')

const bodyParser = require('body-parser');

const session = require('express-session')

//配置解析表单请求配置body-parser解析请求体
// 配置 body-parser 解析表单请求体
app.use(bodyParser.urlencoded({ extended: true }))
//该插件为req请求对象添加一个成员,req.session默认是一个对象
app.use(session({
    //配置加密字符串,他会在原有的加密基础上和这个字符串拼起来去加密
    //目的为了增加安全性,防止客户伪造
    secret: 'itcast',
    resave: false,
    saveUninitialised: true //无论你是否使用session 默认直接给你一把钥匙
}))
//配置模板引擎
app.engine('html', require('express-art-template'));
//开放静态资源
app.use('/node_modules', express.static('./node_modules/'));
app.use('/public', express.static('./public/'));
//挂在路由容器到 app应用程序中是路由生效
// app.use(router);
// 配置session中间件一定要配置在路由之前
app.use((req,res,next) => {
	app.local.user = req,session,user
	next()
})
// 
app.use(indexRouter);
app.use(userRouter);
app.use('/topic',checkLogin,topicRouter);
// 错误处理中间件
// 它需要显示的接收 4 个参数
//    err 错误对象
//    req 请求对象
//    res 响应对象
//    next 下一个匹配的中间件
// 如何使用：
//  
app.use(function(err, req, res, next) {
    res.status(500).send({
        error: err.message
    })
})

app.listen(3000, () => console.log('running 3000'));

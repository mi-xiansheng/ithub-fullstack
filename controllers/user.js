const user = require('../models/user.js');
const md5 = require('blueimp-md5')
exports.showSignin = (req, res,next) => {
    res.render('signin.html')
}
exports.showSignup = (req, res,next) => {
    res.render('signup.html');
}

exports.signin = (req,res,next) =>{
    // res.render('signup.html')
//接收表单提交的数据,配置body-parser中间件解析表单post数据
//2验证数据的有效性
//业务性数据的验证普通数据的验证
//验证通过持久化保存到数据库中
//发送响应
//console.log(req.body)
//校验邮箱校验昵称
//插入数据
const body = req.body;
user.findByEmail(body.email, (err, ret) => {
    if (err) {
        // return res.status(500).json({
        //     error: err.message // err 错误对象有一个 message 属性是具体的错误消息
        // })
    return next(err)
    }
    // 如果用户不存在
    if (!ret) {
        return res.status(200).json({
            code: 1,
            message: 'user not exists'
        })
    }
    // 校验密码是否正确
    if (md5(body.password) !== ret.password) {
        return res.status(200).json({
            code: 2,
            message: 'password invalid'
        })
    }
    // 使用 Session 存储用户登陆状态
    // 使用session储存用户登录状态
    req.session.user = ret

    res.status(200).json({
        code: 0,
        message: 'success'
    })
})
}
exports.signup = (req, res,next) => {
    const body = req.body;

    user.findByEmail(body.email, (err, ret) => {
        if (err) {
            // return res.status(500), json({
            //     error: err.message //
            // })
            return next(err);
        }
        if (ret) {
            return res.status(200).json({
                code: 1,
                message: 'email exists'
            })
        }
        user.findByNickname(body.nickname, (err, ret) => {
            if (err) {
                // return res.status(500).json({
                //     error: err.message
                // })
                return next(err);
            }
            if (ret) {
                return res.status(200).json({
                    code: 2,
                    message: 'nickname exists'
                })
            }

            body.password = md5(body.password);

            user.save(body, (err, results) => {
                if (err) {
                    // return res.status(500).json({
                    //     error: err.message
                    // })
                    return next(err);
                }
                //注册及登陆,使用session保存登录状态
                req.session.user = {
                    ...body,
                    id: results.insertId
                }
            
                res.status(200).json({
                    code: 0,
                    message: 'success',
                })
            })
        })
    })


}
exports.signout = (req, res,next) => {
    delete req.session.user;
    res.redirect('/signin');
}
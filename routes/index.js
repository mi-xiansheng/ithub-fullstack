const express = require('express')

const indexController = require('../controllers/index');

//路由创建
const router = express.Router();

//配置路由表
router.get('/',indexController.showIndex);
//导出路由容器
//app.js
//加载路由模块到路由容器
//app.use(touter)
module.exports = router;
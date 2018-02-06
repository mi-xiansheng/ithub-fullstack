const express = require('express');

const userController = require('./controllers/user');

const topicController = require('./controllers/topic');

const indexController = require('./controllers/index');

const commentController = require('./controllers/comment');
//1创建路由
const router = express.Router();
//2配置路由表
//首页相关的路由配置
router.get('/', indexController.showIndex);
//用户相关的
router.get('/signin',userController.showSignin)
	  .post('/signin',userController.signin)
      .get('/signup',userController.showSignup)
	  .post('/signup',userController.signup)
	  .get('/signout',userController.signout);
//话题相关的
router.get('/topic/create', topicController.showCreate)
  	  .post('/topic/create', topicController.create)
   	  .get('/topic/:topicId', topicController.showDetail)
  	  .get('/topic/:topicID/edit', topicController.showEdit)
      .post('/topic/:topicID/edit', topicController.edit)
      .post('/topic/:topicID/delete', topicController.delete)
 //评论相关
//导出路由模块得到路由容器
module.exports = router;

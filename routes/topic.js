const express = require('express');

const topicController = require('../controllers/topic');

const router = express.Router();

router
   .get('/create', topicController.showCreate)
   .post('/create', topicController.create)
   .get('/:topicId', topicController.showDetail)
   .get('/:topicID/edit', topicController.showEdit)
   .post('/:topicID/edit', topicController.edit)
   .post('/:topicID/delete', topicController.delete)

module.exports = router
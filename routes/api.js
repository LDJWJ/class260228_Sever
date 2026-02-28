const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const todoController = require('../controllers/todoController');

// 서버 상태 확인
router.get('/health', mainController.healthCheck);

// Todo API
router.get('/todos', todoController.getAll);
router.post('/todos', todoController.create);
router.put('/todos/:id', todoController.update);
router.delete('/todos/:id', todoController.remove);

module.exports = router;

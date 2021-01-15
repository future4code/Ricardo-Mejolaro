import express from 'express';
const router = express.Router();

//Controller
const UsersController = require('../controllers/UsersController');
const TasksController = require('../controllers/TasksController');

//Rotas usuários
router.put("/user", UsersController.createUser);
router.get("/user/:id", UsersController.getUserById);
router.put("/user/edit/:id", UsersController.updateUser);
router.get("/users/all", UsersController.getAllUsers);

//Rotas Tarefas
router.put("/task", TasksController.createTask);
router.get("/task/:id", TasksController.getTaskById);

module.exports = router;
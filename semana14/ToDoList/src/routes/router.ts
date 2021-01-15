import express from 'express';
const router = express.Router();

//Controller
const UsersController = require('../controllers/UsersController');
const TasksController = require('../controllers/TasksController');

//Rotas usuários
router.get("/user/:id", UsersController.getUserById);
router.get("/users/all", UsersController.getAllUsers);
router.put("/user", UsersController.createUser);
router.put("/user/edit/:id", UsersController.updateUser);

//Rotas Tarefas
router.get("/task/:id", TasksController.getTaskById);
router.get("/task", TasksController.getTasksByUser);
router.put("/task", TasksController.createTask);

module.exports = router;
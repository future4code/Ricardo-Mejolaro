import express from 'express';
const router = express.Router();

//Controller
const UsersController = require('../controllers/UsersController');
const TasksController = require('../controllers/TasksController');

//Rotas usuários
router.get("/user/:id", UsersController.getUserById);
router.get("/users/all", UsersController.getAllUsers);
router.get("/user-search", UsersController.searchUser);
router.post("/user", UsersController.createUser);
router.put("/user/edit/:id", UsersController.updateUser);

//Rotas Tarefas
router.get("/task/:id", TasksController.getTaskById);
router.get("/task", TasksController.getTasksByUser);
router.post("/task", TasksController.createTask);

module.exports = router;
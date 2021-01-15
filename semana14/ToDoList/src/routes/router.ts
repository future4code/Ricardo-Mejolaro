import express from 'express';
const router = express.Router();

//Controller
const ToDoListController = require('../controllers/ToDoListControler');


//Rotas
router.put("/user", ToDoListController.createUser);
router.get("/user/:id", ToDoListController.getUserById);
router.put("/user/edit/:id", ToDoListController.updateUser);
router.put("/task", ToDoListController.createTask);
router.get("/task/:id", ToDoListController.getTaskById);

module.exports = router;
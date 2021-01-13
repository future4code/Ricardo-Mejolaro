import express from 'express';
const router = express.Router();

//Controller
const ToDoListControler = require('../controllers/ToDoListControler');


//Rotas
router.put("/user", ToDoListControler.createUser);

module.exports = router;
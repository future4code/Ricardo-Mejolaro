import express from 'express';
const router = express.Router();

//Controller
import { getAllUsers, getUsersByName, getUsersByType, getUsersOrderedByNameOrType } from '../controllers/UsersController';

//Rotas usuários
router.get("/user", getAllUsers);
router.get("/user/:name", getUsersByName);
router.get("/users/:type", getUsersByType);
router.get("/users-order", getUsersOrderedByNameOrType);

export default router;
import express from "express";
import { ValidateJWT } from "../controller/authMiddleware.js";
import {
   authUser,
   registerUser
} from "../controller/userController.js"; //add .js at last for es6 module type

const router = express.Router();

router.post('/register', registerUser);
router.post('/auth', authUser);

export default router;
import express from 'express'
import { RegisterUser,LoginUser } from '../controllers/user.controller.js';
import { CheckLoginUser,CheckRegisterUser } from '../middlewares/user.valid.js'
const UserRoute = express.Router();


UserRoute.post('/register',CheckRegisterUser,RegisterUser);
UserRoute.post('/login',CheckLoginUser,LoginUser);


export default UserRoute;
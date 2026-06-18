import express from 'express'
import { RegisterUser,LoginUser } from '../controllers/user.controller.js';
import { CheckLoginUser,CheckRegisterUser} from '../middlewares/user.valid.js'
import { GoogleLogin,VerifyUser,VerifyProfile} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/user.schemes.js";


const UserRoute = express.Router();


UserRoute.post('/register',CheckRegisterUser,RegisterUser);
UserRoute.post('/login',CheckLoginUser,LoginUser);
UserRoute.get("/check-auth",verifyJWT,VerifyUser);
UserRoute.get("/me",verifyJWT,VerifyProfile);
UserRoute.post("/google",GoogleLogin);


export default UserRoute;
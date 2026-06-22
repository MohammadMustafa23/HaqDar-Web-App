import express from 'express'
import { RegisterUser,LoginUser } from '../controllers/user.controller.js';
import { CheckLoginUser,CheckRegisterUser} from '../middlewares/user.valid.js'
import { GoogleLogin,VerifyUser,VerifyProfile} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/user.schemes.js";
import { authLimiter } from '../middlewares/rateLimit.js';

const UserRoute = express.Router();


UserRoute.post('/register',authLimiter,CheckRegisterUser,RegisterUser);
UserRoute.post('/login',authLimiter,CheckLoginUser,LoginUser);
UserRoute.get("/check-auth",verifyJWT,VerifyUser);
UserRoute.get("/me",verifyJWT,VerifyProfile);
UserRoute.post("/google",authLimiter,GoogleLogin);


export default UserRoute;
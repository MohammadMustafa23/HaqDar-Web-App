import express from 'express'
import { RegisterUser,LoginUser } from '../controllers/user.controller.js';
import { CheckLoginUser,CheckRegisterUser} from '../middlewares/user.valid.js'
import { GoogleLogin,VerifyUser,VerifyProfile,userLogout} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/user.schemes.js";
import { authLimiter,writeLimiter } from '../middlewares/rateLimit.js';
import { requestProfileEdit } from '../controllers/edit.profile.controller.js';
const UserRoute = express.Router();


UserRoute.post('/register',authLimiter,CheckRegisterUser,RegisterUser);
UserRoute.post('/login',authLimiter,CheckLoginUser,LoginUser);
UserRoute.post("/logout",verifyJWT,userLogout);
UserRoute.get("/check-auth",verifyJWT,VerifyUser);
UserRoute.get("/me",verifyJWT,VerifyProfile);
UserRoute.post("/google",authLimiter,GoogleLogin);
UserRoute.post("/request-profile-edit",writeLimiter,verifyJWT,requestProfileEdit);


export default UserRoute;
import express from "express";
import { AdminLogin,Logout,VerifyAdmin as VerifyAdminController } from "./admin.controller.js";
import { validateAdminLogin } from "./middleware/validateAdminLogin.js";
import { verifyAdminJWT,VerifyAdmin  } from "./middleware/verifyAdminJWT.js";
import { refreshToken } from "../../common/Refresh.Controller.js";

const AdminAuth = express.Router();



AdminAuth.post("/login",validateAdminLogin,AdminLogin);
AdminAuth.post("/logout",verifyAdminJWT,Logout);
AdminAuth.get("/verify",verifyAdminJWT,VerifyAdmin,VerifyAdminController);
AdminAuth.post("/refresh-token",refreshToken);


export default AdminAuth;
import express from "express";
import { AdminLogin,Logout,VerifyAdmin as VerifyAdminController } from "./admin.controller.js";
import { validateAdminLogin } from "./middleware/validateAdminLogin.js";
import { verifyAdminJWT,VerifyAdmin  } from "./middleware/verifyAdminJWT.js";
const AdminAuth = express.Router();



AdminAuth.post("/login",validateAdminLogin,AdminLogin);
AdminAuth.post("/logout",Logout);
AdminAuth.get("/verify",verifyAdminJWT,VerifyAdmin,VerifyAdminController);



export default AdminAuth;
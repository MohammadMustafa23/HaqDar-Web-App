import express from "express";
import { AdminLogin } from "./admin.controller.js";
import { validateAdminLogin } from "./middleware/validateAdminLogin.js";
const AdminAuth = express.Router();

AdminAuth.post("/login", validateAdminLogin,AdminLogin);
export default AdminAuth;
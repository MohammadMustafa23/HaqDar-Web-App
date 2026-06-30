import express from "express";
import { verifyAdminJWT } from "../../Admin_Auth/middleware/verifyAdminJWT.js";
import { addScheme,getAllSchemes,getSchemeById,updateScheme,deleteScheme,updateSchemeStatus } from "../controllers/scheme.controller.js";
import { validateScheme } from '../middlewares/scheme.validator.js'
const schemeMangment = express.Router();

schemeMangment.post("/add-scheme",verifyAdminJWT,validateScheme,addScheme);
schemeMangment.get("/schemes",verifyAdminJWT,getAllSchemes);
schemeMangment.get("/schemes/:id",verifyAdminJWT,getSchemeById);
schemeMangment.put("/schemes/:id",verifyAdminJWT,validateScheme,updateScheme);
schemeMangment.delete("/schemes/:id",verifyAdminJWT,deleteScheme);
schemeMangment.patch("/schemes/:id/status",verifyAdminJWT,updateSchemeStatus);

export default schemeMangment;
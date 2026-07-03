import express from "express";
import { verifyAdminJWT } from "../../Admin_Auth/middleware/verifyAdminJWT.js";
import { addScheme,getAllSchemes,getSchemeById,updateScheme,deleteScheme,updateSchemeStatus,bulkUploadSchemes,searchSchemeByMessage } from "../controllers/scheme.controller.js";
import { validateScheme } from '../middlewares/scheme.validator.js'
import upload from "../middlewares/upload.middleware.js";
import {parseSchemeCasting} from '../middlewares/parseSchemeCasting.middleware.js'
import { getDashboard } from "../controllers/dashboard.controller.js";
const schemeMangment = express.Router();

schemeMangment.post("/add-scheme",verifyAdminJWT,parseSchemeCasting,validateScheme,addScheme);
schemeMangment.get("/schemes",verifyAdminJWT,getAllSchemes);
schemeMangment.get("/schemes/:id",verifyAdminJWT,getSchemeById);
schemeMangment.put("/schemes/:id",verifyAdminJWT,validateScheme,updateScheme);
schemeMangment.delete("/schemes/:id",verifyAdminJWT,deleteScheme);
schemeMangment.patch("/schemes/:id/status",verifyAdminJWT,updateSchemeStatus);
schemeMangment.post("/upload-schemes",verifyAdminJWT,upload.single("file"),bulkUploadSchemes);
schemeMangment.get('/dashboard',verifyAdminJWT,getDashboard);

export default schemeMangment;
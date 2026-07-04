import express from "express";
import { verifyAdminJWT } from "../../Admin_Auth/middleware/verifyAdminJWT.js";
import { addScheme,getAllSchemes,getSchemeById,updateScheme,deleteScheme,updateSchemeStatus,bulkUploadSchemes,searchSchemeByMessage } from "../controllers/scheme.controller.js";
import { validateScheme } from '../middlewares/scheme.validator.js'
import upload from "../middlewares/upload.middleware.js";
import {parseSchemeCasting} from '../middlewares/parseSchemeCasting.middleware.js'
import { getDashboard } from "../controllers/dashboard.controller.js";
import {adminRateLimiter} from '../middlewares/adminRateLimiter.js'
const schemeMangment = express.Router();

schemeMangment.post("/add-scheme",adminRateLimiter,verifyAdminJWT,parseSchemeCasting,validateScheme,addScheme);
schemeMangment.get("/schemes",adminRateLimiter,verifyAdminJWT,getAllSchemes);
schemeMangment.get("/schemes/:id",adminRateLimiter,verifyAdminJWT,getSchemeById);
schemeMangment.put("/schemes/:id",adminRateLimiter,verifyAdminJWT,validateScheme,updateScheme);
schemeMangment.delete("/schemes/:id",adminRateLimiter,verifyAdminJWT,deleteScheme);
schemeMangment.patch("/schemes/:id/status",adminRateLimiter,verifyAdminJWT,updateSchemeStatus);
schemeMangment.post("/upload-schemes",adminRateLimiter,verifyAdminJWT,upload.single("file"),bulkUploadSchemes);
schemeMangment.get('/dashboard',adminRateLimiter,verifyAdminJWT,getDashboard);

export default schemeMangment;
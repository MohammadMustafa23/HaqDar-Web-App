import express from "express";
import { downloadSchemePdf } from "../controllers/Scheme.Controller.js";
import { verifyJWT } from "../middlewares/user.schemes.js";
const GeneratePDF = express.Router();

GeneratePDF.get("/download/:schemeId",verifyJWT,downloadSchemePdf);

export default GeneratePDF;
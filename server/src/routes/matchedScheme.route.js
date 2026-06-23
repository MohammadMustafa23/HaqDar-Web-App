import express from "express";
import { verifyJWT } from "../middlewares/user.schemes.js";

import { getMatchedSchemes,GetSpecifiScheme } from "../controllers/matchedScheme.controller.js";

const GetSchems = express.Router();

GetSchems.get("/my-schemes", verifyJWT, getMatchedSchemes);
GetSchems.get("/all/schemes", verifyJWT, getMatchedSchemes);
GetSchems.get('/scheme/:id',verifyJWT,GetSpecifiScheme);


export default GetSchems;

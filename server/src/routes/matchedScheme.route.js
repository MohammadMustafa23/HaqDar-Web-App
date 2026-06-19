import express from "express";
import { verifyJWT } from "../middlewares/user.schemes.js";

import { getMatchedSchemes } from "../controllers/matchedScheme.controller.js";

const GetSchems = express.Router();

GetSchems.get("/my-schemes", verifyJWT, getMatchedSchemes);

export default GetSchems;

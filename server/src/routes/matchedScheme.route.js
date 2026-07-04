import express from "express";
import { verifyJWT } from "../middlewares/user.schemes.js";
import { readLimiter } from "../middlewares/rateLimit.js";
import {
  getMatchedSchemes,
  GetSpecifiScheme,
} from "../controllers/matchedScheme.controller.js";

const GetSchems = express.Router();

GetSchems.get("/my-schemes", readLimiter, verifyJWT, getMatchedSchemes);
GetSchems.get("/all/schemes", readLimiter, verifyJWT, getMatchedSchemes);
GetSchems.get("/scheme/:id", readLimiter, verifyJWT, GetSpecifiScheme);

export default GetSchems;

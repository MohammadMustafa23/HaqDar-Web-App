import { FindSchemes } from '../controllers/recommendations.controller.js';
import express from 'express'
import { verifyJWT,validateProfile } from '../middlewares/user.schemes.js'
const GenerateRoute = express.Router();


GenerateRoute.post('/recommendations/generate',verifyJWT,validateProfile,FindSchemes);

export default GenerateRoute;

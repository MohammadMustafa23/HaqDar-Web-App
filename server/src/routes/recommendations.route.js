import { FindSchemes } from '../controllers/recommendations.controller.js';
import express from 'express'
import { verifyJWT,validateProfile } from '../middlewares/user.schemes.js'
const GenerateRoute = express.Router();
import { recommendationLimiter } from '../middlewares/rateLimit.js';


GenerateRoute.post('/recommendations/generate',recommendationLimiter,verifyJWT,validateProfile,FindSchemes);

export default GenerateRoute;

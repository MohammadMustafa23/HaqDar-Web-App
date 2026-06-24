import { FindSchemes } from '../controllers/recommendations.controller.js';
import express from 'express'
import { verifyJWT,validateProfile } from '../middlewares/user.schemes.js'
const GenerateRoute = express.Router();
import { recommendationLimiter } from '../middlewares/rateLimit.js';
import { requestProfileEdit,canEditProfile } from '../controllers/edit.profile.controller.js';

GenerateRoute.post('/recommendations/generate',recommendationLimiter,verifyJWT,validateProfile,FindSchemes);
GenerateRoute.post("/request-profile-edit",verifyJWT,requestProfileEdit);
GenerateRoute.get("/can-edit-profile",verifyJWT,canEditProfile);

export default GenerateRoute;

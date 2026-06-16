import express from 'express'
import UserRoute from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import GenerateRoute from './routes/recommendations.route.js';

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use('/api/auth',UserRoute);
app.use('/api/schemes',GenerateRoute);


export default app;

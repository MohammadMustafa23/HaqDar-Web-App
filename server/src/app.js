import express from 'express'
import UserRoute from './routes/user.routes.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
app.use(express.json());


app.use('/api/auth',UserRoute);


export default app;

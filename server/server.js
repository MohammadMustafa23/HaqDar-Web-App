import { configDotenv } from 'dotenv';
import app from './src/app.js'
import ConectDB from './src/config/config.db.js';

// Env Load
configDotenv();

// DB Connection
ConectDB();

app.listen(3000,()=>{
    console.log("Server Started Sucessfully");
})


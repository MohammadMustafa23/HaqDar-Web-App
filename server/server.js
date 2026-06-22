import { configDotenv } from 'dotenv';
import app from './src/app.js'
import ConectDB from './src/config/config.db.js';
import { connectRedis } from './src/config/redis.js';
// Env Load
configDotenv();

// DB Connection
ConectDB();

// Redis Connectioo
connectRedis();

app.listen(3000,()=>{
    console.log("Server Started Sucessfully");
})


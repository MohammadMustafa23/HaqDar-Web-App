import { configDotenv } from "dotenv";
import app from "./src/app.js";
import ConectDB from "./src/config/config.db.js";
import { connectRedis } from "./src/config/redis.js";
// Env Load
configDotenv();

// DB Connection
ConectDB();

// Redis Connectioo
connectRedis();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server are runing on port : ${PORT}`);
});

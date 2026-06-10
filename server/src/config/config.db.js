import mongoose from "mongoose";


async function ConectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Data Base Connection Done");
    } catch(err) {
        console.log("Error To Connect To DB");
    }
}

export default ConectDB;
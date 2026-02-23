import mongoose from "mongoose";
import { MONGO_URI } from "./constants";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected")
    } catch (error) {
        console.log ('Could not connect to database', error);
        process.exit(1);
    }
}

export default connectDB;
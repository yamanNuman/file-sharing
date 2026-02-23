import express from "express";
import cors from 'cors';
import { PORT } from "./config/constants";
import connectDB from "./config/db";

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`);
        });
        
    } catch (error) {
        console.error('Failed to start server', error);
        process.exit(1);
    }
}

startServer();
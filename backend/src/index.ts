import express, { urlencoded } from "express";
import cors from 'cors';
import { APP_ORIGIN, PORT } from "./config/constants";
import connectDB from "./config/db";
import fileRoute from "./routes/file.route";
import mailRoute from "./routes/mail.route";
import errorHandler from "./middleware/error.middleware";

const app = express();

//Middleware
app.use(express.json());
app.use(cors({
    origin: APP_ORIGIN,
    methods: ["GET","POST"],
    credentials: true
}));
app.use(urlencoded({
    extended:true
}));
app.use("/files", fileRoute);
app.use("/mail", mailRoute);
app.use(errorHandler);

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
import express from "express";
import "dotenv/config";
import cors from 'cors';

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log(`Server is running ${PORT}`);
});
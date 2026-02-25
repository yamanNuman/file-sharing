import { Router } from "express";
import { sendMail } from "../controller/mail.controller";

const mailRoute = Router();

mailRoute.post("/send", sendMail);

export default mailRoute;
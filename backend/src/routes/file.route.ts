import { Router } from "express";
import { upload } from "../middleware/upload.middleware";
import { uploadFile } from "../controller/file.controller";

const fileRouter = Router();

fileRouter.post("/upload", upload.single("file"), uploadFile);

export default fileRouter;
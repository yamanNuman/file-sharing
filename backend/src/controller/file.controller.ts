import { Request, Response } from "express";
import { FileModel } from "../models/file.model";
import { uploadToCloudinary } from "../services/file.service";
import catchErrors from "../utils/catchError";
import appAssert from "../utils/appAssert";
import { HttpStatusCode } from "../config/http";
import AppErrorCode from "../config/appErrorCode";

export const uploadFile = catchErrors(async(req: Request, res: Response) => {
    
        appAssert(req.file, HttpStatusCode.BAD_REQUEST, "File missing", AppErrorCode.FILE_MISSING);

        const result: any = await uploadToCloudinary(req.file.buffer);

        const file = await FileModel.create({
            filename: req.file.originalname,
            secure_url: result.secure_url,
            format: result.format,
            sizeInBytes: req.file.size.toString(),
            sender: req.body.sender,
            receiver: req.body.receiver
        });

        res.status(HttpStatusCode.CREATED).json(file);

});
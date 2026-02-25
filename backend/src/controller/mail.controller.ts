import { Request, Response } from "express";
import { FileModel } from "../models/file.model";
import { sendFileMail } from "../services/mail.service";
import catchErrors from "../utils/catchError";
import appAssert from "../utils/appAssert";
import { HttpStatusCode } from "../config/http";
import AppErrorCode from "../config/appErrorCode";

export const sendMail = catchErrors(async (req: Request, res: Response) => {

  const { fileId } = req.body;

  appAssert(fileId, HttpStatusCode.BAD_REQUEST, "File Id Missing", AppErrorCode.VALIDATION_ERROR);

  const file = await FileModel.findById(fileId);

  appAssert(file, HttpStatusCode.NOT_FOUND, "File not found", AppErrorCode.VALIDATION_ERROR);

  appAssert(file.sender && file.receiver, HttpStatusCode.BAD_REQUEST, "Sender or receiver missing", AppErrorCode.VALIDATION_ERROR);

  await sendFileMail(file.sender, file.receiver, file.secure_url);

  res.status(HttpStatusCode.OK).json({
    message: "Mail sent successfully."
  });
});
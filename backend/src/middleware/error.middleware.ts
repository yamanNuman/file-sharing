import { ErrorRequestHandler } from "express";
import AppError from "../utils/AppError";
import { HttpStatusCode } from "../config/http";

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    if(error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message,
            errorCode: error.errorCode
        });
    }

    console.error("UNEXPECTED ERROR", error);

    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
        message: "Internal server error"
    });
};

export default errorHandler;
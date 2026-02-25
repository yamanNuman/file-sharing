import { HttpStatusCode } from "../config/http";
import AppErrorCode from "../config/appErrorCode";

class AppError extends Error {
    public isOperational = true;

    constructor(public statusCode: HttpStatusCode, message: string, public errorCode?: AppErrorCode) {
        super(message);
        Object.setPrototypeOf(this, AppError.prototype)
    }
}

export default AppError;
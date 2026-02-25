import assert from "node:assert";
import AppError from "./AppError";
import { HttpStatusCode } from "../config/http";
import AppErrorCode from "../config/appErrorCode";

type AppAssert = (
    condition: any,
    HttpStatusCode: HttpStatusCode,
    message: string,
    appErrorCode?: AppErrorCode
) => asserts condition;

const appAssert: AppAssert = (
    condition,
    httpStatusCode,
    message,
    appErrorCode
) => assert(condition, new AppError(httpStatusCode, message, appErrorCode));

export default appAssert;
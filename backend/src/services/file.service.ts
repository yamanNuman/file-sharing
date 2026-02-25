import cloudinary from "../config/cloudinary";
import { Readable } from "stream";

export const uploadToCloudinary = (buffer: Buffer, folder= "files") => {
    return new Promise<any>((resolve,reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder },
            (error,result) => {
                if(error) return reject(error);
                resolve(result);
            }
        );

        const readable = new Readable();
        readable.push(buffer);
        readable.push(null);
        readable.pipe(stream);
    });
};
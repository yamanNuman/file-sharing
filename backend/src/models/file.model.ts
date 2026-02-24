import { HydratedDocument, InferSchemaType, model, Schema } from "mongoose";

const fileSchema = new Schema(
    {
        filename: {
            type: String,
            required: true,
        },
        secure_url: {
            type: String,
            required: true,
        },
        format: {
            type: String,
            required: true
        },
        sizeInBytes: {
            type: String,
            required: true,
        },
        sender: {
            type: String,
        },
        receiver: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

export type File = InferSchemaType<typeof fileSchema>;
export type FileDocument = HydratedDocument<File>;

export const FileModel = model<File>("File", fileSchema);
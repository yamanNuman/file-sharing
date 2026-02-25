import {z} from "zod";

export const uploadFileSchema = z.object({
    sender: z.string().email("Invalid sender email"),
    receiver: z.string().email("Invalid receiver email")
});
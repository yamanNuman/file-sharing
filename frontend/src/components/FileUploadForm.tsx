import React, { useState } from "react"
import { api } from "../services/api";

export const FileUploadForm = () => {
    const [file, setFile] =  useState<File | null>(null);
    const [sender, setSender] =  useState("");
    const [receiver, setReceiver] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");

        if(!file || !sender || !receiver) {
            setMessage("Please fill all fields");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("sender", sender);
        formData.append("receiver", receiver);

        try {
            //Upload file
            const uploadRes = await api.post('/files/upload', formData, {
                headers: {"Content-Type":"multipart/form-data"},
            });

            const fileId = uploadRes.data._id;

            //Send mail
            await api.post("/mail/send", { fileId });
            setMessage("File uploaded and mail sent successfully!");
        } catch (error) {
            console.error(error);
            setMessage("Error uploading file or sending mail");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>File : </label>
                <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            </div>
            <div>
                <label>Sender Email : </label>
                <input type="email" value={sender} onChange={(e) => setSender(e.target.value)}/>
            </div>
            <div>
                <label>Receiver Email : </label>
                <input type="email" value={receiver} onChange={(e) => setReceiver(e.target.value)}/>
            </div>
            <button type="submit">Upload & Send Mail</button>
            {message && <p>{message}</p>}
        </form>
    );
};
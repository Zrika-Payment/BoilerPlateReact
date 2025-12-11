import { useState } from "react"
import Button from "../common/Button";
import { createChunks } from "../../utils/helpers";
export function FileUploader() {
    const [file, setFile] = useState(null);
    const UPLOADSTATUS = 'idle' | 'uploading' | 'Success' | 'Error';
    const [status, useStatus] = useState('idle');
    function handleFileChange(e) {
        if (e.target.files) {
            setFile(e.target.files[0]);

        }

    }

    async function handleFileUpload() {
        //send find chunk file
        const chunks = createChunks(file);
        console.log(chunks);
        // get the length of the file
        const totalChunks = chunks.length;
        // create a random id
        const fileId = crypto.randomUUID();

        //create a loop
        for (let index = 0; index < totalChunks; index++) {

            //check if file is present or not
            if (!file) return;
            //setStatus to uploading
            useStatus('uploading');
            const chunk = chunks[index];
            //intiatiate formdata
            const formData = new FormData();
            //append formindex
            formData.append('fileId', fileId);
            formData.append('file', chunk);
            formData.append('chunksIndex', index)
            //append chunks
            formData.append('totalChunks', totalChunks);

            // make this function and async function and  make and post call to backend server to upload file
            try {
                await fetch('https://api.escuelajs.co/api/v1/files/upload', {
                    method: 'post',
                    body: formData,
                })
                useStatus("Success");

            } catch (error) {
                useStatus("Error");
            }
            console.log(`Uploaded chunk ${index + 1} / ${totalChunks}`);

        }





    }

    return (
        <div className="space-y-2">
            <input type="file" onChange={handleFileChange} />
            {
                file && (
                    <div className="mb-4 text-sm">
                        <p>File Name:{file.name}</p>
                        <p>File Size:{(file.size / 1024).toFixed(2)} KB</p>
                        <p>Type : {file.type}</p>
                    </div>
                )
            }
            {
                file && status !== 'uploading' && <Button onClick={handleFileUpload}>UpLoad</Button>
            }
            {
                status === 'Success' && <h1>"File uploaded sucessfully"</h1>
            }
            {
                status === 'Error' && <h1>"File not uploaded"</h1>
            }
        </div>
    )
}
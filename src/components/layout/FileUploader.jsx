import { useState } from "react"
import Button from "../common/Button";

export function FileUploader(){
    const [file,setFile] = useState(null);
    const UPLOADSTATUS = 'idle'|'uploading'|'Success'|'Error';
    const [status,useStatus] = useState()
    function handleFileChange(e){
        if(e.target.files){
            setFile(e.target.files[0]);

        }

    }

    return (
        <div className="space-y-2">
            <input type="file" onChange={handleFileChange} />
            {
               file&&(
                <div className="mb-4 text-sm">
                    <p>File Name:{file.name}</p>
                    <p>File Size:{(file.size/1024).toFixed(2)} KB</p>
                    <p>Type : {file.type}</p>
                </div>
               ) 
            }
            {
               file && status!=='uploading' && <Button>UpLoad</Button> 
            }
        </div>
    )
}
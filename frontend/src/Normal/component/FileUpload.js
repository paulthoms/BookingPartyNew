import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

export default function FileUpload() {

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState("Choose File");
    const [uploadedFile, setUploadedFile] = useState({});

    function handleOnChange(e) {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('/dish', formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'authorization': "Bearer " + localStorage.getItem('token')
                }
            });

            const {fileName, filePath} = res.data;

            setUploadedFile({
                fileName,
                filePath
            })

        } catch (err) {
            if(err){
                if(err.response.status === 500){
                    console.log('There was a problem with the server');
                }
                else{
                    console.log(err.response.data.msg);
                }
            }
        }

    }


    return (
        <div>
            <form onSubmit={handleOnSubmit} >
                <input id="customFile" type="file" className="custom-file-input" onChange={handleOnChange} />
                <label className="custom-filelabel" for="customFile">
                    {filename}
                </label>

                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />

            </form>
            Hello
        </div>
    )
}

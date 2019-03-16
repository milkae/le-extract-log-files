import React from "react"

const FileInput = () => {
    let fileReader;

    const handleFileRead = (e) => {
        const content = fileReader.result;
        console.log(content);
    };

    const handleFile = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };

    return <div>
        <input type='file'
            id='file'
            className='input-file'
            accept='.txt'
            onChange={e => handleFile(e.target.files[0])}
        />
    </div>;
};

export default FileInput
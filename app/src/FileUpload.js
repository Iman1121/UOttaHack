import React, { useState, useRef } from 'react';
import axios from 'axios';
import './App.css'; 
const executePythonScript = async (file, prompt) => {

    try {
  
      const reader = new FileReader(); // Create a FileReader object
      reader.readAsDataURL(file); // Read the file as a data URL
      reader.onloadend = async () => { // When reading is complete
      const base64Data = reader.result.split(',')[1]; // Get the Base64-encoded data
      const formData = new FormData(); // Create FormData object
      formData.append('file', base64Data); // Append the Base64 image data
      formData.append('prompt', prompt); // Append other data as needed
            
      const response = await fetch('http://127.0.0.1:5000/run-python-script', {
          method: 'POST',
          body: formData
      });

      const data = await response.json();
      console.log(data); // Handle the response from the backend
        };
    } catch (error) {
      console.error('Error:', error);
    }
};

async function uploadImage(file) { // file from <input type="file"> 
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", 'criqkqlz');

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/dgmplm2mm/image/upload`,
    {
      method: "POST",
      body: data,
    }
  );
  console.log(res)
  const img = await res.json();
  console.log(img);
  return img.secure_url;
  // Post `img.secure_url` to your server and save to MongoDB
}

const FileUpload = ({setUrl, onUpload}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileChosen, setFileChosen] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileChosen(true); // Set fileChosen to true when a file has been selected
  };
  

  
  const handleUpload = async () => {
    // Here you can implement logic to upload the selected file
    // For example, you can send the file to a server using fetch or axios
    // You can also perform validation or any other necessary processing

    const uploadedUrl = await uploadImage(selectedFile);
    setUrl(uploadedUrl);
    onUpload(uploadedUrl); // Pass the uploaded URL to the parent component
    // executePythonScript(selectedFile, "Can you summarize these notes");
    // console.log('Selected file:', selectedFile);
    // setFileChosen(false); // Reset fileChosen after upload
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button
        onClick={openFileDialog}
        style={{
          backgroundColor: 'rgb(204,113,120)',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '8px 16px',
          cursor: 'pointer',
        }}
      >
        Choose File
      </button>
      {fileChosen && <p>File Chosen: {selectedFile.name}</p>} {/* Confirmation message */}
      <button
        onClick={handleUpload}
        style={{
          backgroundColor: 'rgb(204,113,120)',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '8px 16px',
          marginLeft: '10px',
        }}
      >
        Upload
      </button>



    </div>

  );
};

export default FileUpload;

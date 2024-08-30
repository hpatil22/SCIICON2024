// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useSidebar } from '../contextapi/SidebarProvider';
// import { Button } from '@mui/material';

// const Loaddata3 = () => {
//     const navigate =useNavigate();
//     const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context

//     const handleButtonClick = () => {
//       setSelectedSubButton('dataindex3'); // Set the active sidebar button
//       navigate('/dataindex3'); // Navigate to the route
//     };
//   return (
//     <>
//     <div className='containerr' style={{height:"80vh", width:"100%"}}>
//     {/* <img src='/img/feature.png' /> */}
// </div>
// <div style={{ position: "relative" }}>
//       <Button
//         variant="contained"
//         sx={{ margin: "20px", position: "absolute", right: 100 }}
//         onClick={handleButtonClick}
//       >
//         Train Model
//       </Button>
//     </div>
//     </>
//   )
// }

// export default Loaddata3

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../contextapi/SidebarProvider';
import { Button, LinearProgress, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const Loaddata3 = () => {
  const navigate = useNavigate();
  const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context

  const [progress, setProgress] = useState(0); // State to track upload progress
  const [isUploading, setIsUploading] = useState(false); // State to track if upload is in progress
  const [success, setSuccess] = useState(false); // State to show success message
  const [file, setFile] = useState(null); // State to hold the selected file

  const handleButtonClick = () => {
    setSelectedSubButton('dataindex3'); // Set the active sidebar button
    navigate('/dataindex3'); // Navigate to the route
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Set the file when a user selects one
  };

  const handleFileUpload = async () => {
    if (!file) return; // Exit if no file is selected

    setIsUploading(true);
    setProgress(0);

    const formData = new FormData();
    formData.append('file', file); // Append the file to the form data

    try {
      await axios.post('http://192.168.1.12:8000/load-data', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      });

      setIsUploading(false);
      setSuccess(true);
    } catch (error) {
      console.error('Error uploading file:', error);
      setIsUploading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
  };

  return (
    <>
      <div className='containerr' style={{ height: "80vh", width: "100%" }}>
        {/* Your image or other content here */}
      {/* File input */}
      <div style={{ margin: '20px', textAlign: 'center' }}>
        <input
          type="file"
          onChange={handleFileChange}
          style={{ marginBottom: '10px' }}
          disabled={isUploading}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleFileUpload}
          disabled={isUploading || !file}
        >
          {isUploading ? 'Uploading...' : 'Upload File'}
        </Button>
      </div>

      {/* Progress Bar */}
      {isUploading && (
        <div style={{ width: '50%', margin: '20px auto' }}>
          <LinearProgress variant="determinate" value={progress} />
          <p>{progress}%</p>
        </div>
      )}

      {/* Success Message */}
      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Data successfully sent!
        </Alert>
      </Snackbar>
      </div>


      <div style={{ position: "relative" }}>
        <Button
          variant="contained"
          sx={{ margin: "20px", position: "absolute", right: 100 }}
          onClick={handleButtonClick}
        >
          Train Model
        </Button>
      </div>
    </>
  );
};

export default Loaddata3;

// import React, { useState } from 'react';

// const Loaddata3 = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageSelect = (url) => {
//     setSelectedImage(url);
//   };

//   return (
//     <div>
//       <h2>Select an Image from Google Drive</h2>
//       <div>
//         {/* Embed the Google Drive folder */}
//         <iframe
//           src="https://drive.google.com/embeddedfolderview?id=1-uHvbNhvEdIu45Qj4N9rkfz6ojj8v2-k#grid"
//           width="600"
//           height="400"
//           frameBorder="0"
//           title="Google Drive Folder"
//         ></iframe>
//       </div>
//       <div>
//         {/* Instructions for users to copy and paste the image URL */}
//         <p>To select an image, copy its URL from the Google Drive folder and paste it here:</p>
//         <input
//           type="text"
//           placeholder="Paste image URL here"
//           onChange={(e) => handleImageSelect(e.target.value)}
//         />
//       </div>
//       {selectedImage && (
//         <div>
//           <h3>Selected Image:</h3>
//           <img src={selectedImage} alt="Selected" style={{ width: '300px', height: 'auto' }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Loaddata3;

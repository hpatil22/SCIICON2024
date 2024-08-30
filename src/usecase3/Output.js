// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useSidebar } from '../contextapi/SidebarProvider';
// import { Button } from '@mui/material';

// const Output = () => {
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

//     </>
//   )
// }

// export default Output

import React, { useState } from 'react';
import { Button } from '@mui/material';
import '../App.css'; // Import the CSS file with the spinner styles

const Output = () => {
  const [imageSrc, setImageSrc] = useState(''); // State to hold the image URL
  const [loading, setLoading] = useState(false); // State to manage loading state

  const fetchImage = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      // Simulate fetching image and introduce a delay
      setImageSrc('/img/u3Out.png'); // Set the image source
      setLoading(false); // End loading
    }, 2000); // 2-second delay (2000 milliseconds)
  };

  return (
    <div className='containerr' style={{ height: "80vh", width: "100%" }}>
      <Button variant="contained" onClick={fetchImage} sx={{ width: "20%" }}>
        Fetch Image
      </Button>
      
      {loading && (
        <div className="spinner"></div> // Show spinner while loading
      )}
      
      {imageSrc && !loading && (
        <div>
          <img
            src={imageSrc}
            alt="Fetched content"
            style={{ marginTop: '120px', marginLeft: "100px", maxHeight: '70vh', width: '80%' }}
          />
        </div>
      )}
    </div>
  );
};

export default Output;



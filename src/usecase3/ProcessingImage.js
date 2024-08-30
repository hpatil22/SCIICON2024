// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useSidebar } from '../contextapi/SidebarProvider';
// import { Button } from '@mui/material';
// const ProcessingImage = () => {
//   const navigate =useNavigate();
//   const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context

//   const handleButtonClick = () => {
//     setSelectedSubButton('denoising3'); // Set the active sidebar button
//     navigate('/denoising3'); // Navigate to the route
//   };
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
//         Next
//       </Button>
//     </div>
//     </>
//   )
// }

// export default ProcessingImage

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../contextapi/SidebarProvider';
import { Button, MenuItem, Select, CircularProgress, InputLabel, FormControl, Typography } from '@mui/material';

const ProcessingImage = () => {
  const navigate = useNavigate();
  const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context
  
  const [selectedSize, setSelectedSize] = useState('');
  const [processing, setProcessing] = useState(false);
  const [processingDone, setProcessingDone] = useState(false); // State to track processing completion

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleRescale = () => {
    setProcessing(true);
    setProcessingDone(false); // Reset processing done state
    // Simulate image processing with a timeout
    setTimeout(() => {
      setProcessing(false);
      setProcessingDone(true); // Set processing done state
    }, 3000); // Simulate a 3-second processing time
  };

  const handleButtonClick = () => {
    setSelectedSubButton('denoising3'); // Set the active sidebar button
    navigate('/denoising3'); // Navigate to the route
  };

  return (
    <>
      <div className='containerr' style={{ height: "80vh", width: "100%" }}>
        {/* Dropdown for image sizes */}
        <FormControl fullWidth style={{ margin: '20px' }}>
          <InputLabel id="image-size-label"></InputLabel>
          <Select
            labelId="image-size-label"
            value={selectedSize}
            onChange={handleSizeChange}
            displayEmpty
          >
            <MenuItem value="" disabled>Select Image Size</MenuItem>
            <MenuItem value="128x128">Image 128x128</MenuItem>
            <MenuItem value="256x256">Image 256x256</MenuItem>
          </Select>
        </FormControl>

        {/* Rescale button */}
        {selectedSize && (
          <Button
            variant="contained"
            sx={{ margin: "20px" }}
            onClick={handleRescale}
            disabled={processing}
          >
            {processing ? 'Processing...' : 'Rescale'}
          </Button>
        )}

        {/* Progress bar */}
        {processing && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <CircularProgress />
            <Typography variant="body1" style={{ marginTop: '10px' }}>Processing...</Typography>
          </div>
        )}

        {/* Processing Done Message */}
        {processingDone && !processing && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Typography variant="h6" color="success.main">Image Processing is Done!</Typography>
          </div>
        )}
      </div>

      <div style={{ position: "relative" }}>
        <Button
          variant="contained"
          sx={{ margin: "20px", position: "absolute", right: 100 }}
          onClick={handleButtonClick}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default ProcessingImage;


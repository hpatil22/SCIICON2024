// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useSidebar } from '../contextapi/SidebarProvider';
// import { Button } from '@mui/material';

// const Denoising3 = () => {
//     const navigate =useNavigate();
//     const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context

//     const handleButtonClick = () => {
//       setSelectedSubButton('output3'); // Set the active sidebar button
//       navigate('/output3'); // Navigate to the route
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
//         Output
//       </Button>
//     </div>
//     </>
//   )
// }

// export default Denoising3

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSidebar } from '../contextapi/SidebarProvider';
// import { Button, CircularProgress, Snackbar, Alert } from '@mui/material';
// import axios from 'axios';

// const Denoising3 = () => {
//   const navigate = useNavigate();
//   const { setSelectedSubButton } = useSidebar();
//   const [denoisedImage, setDenoisedImage] = useState(''); // State to hold the denoised image URL
//   const [isLoading, setIsLoading] = useState(false); // State to manage loading status
//   const [isSuccess, setIsSuccess] = useState(false); // State to manage success status

//   const handleButtonClick = () => {
//     setSelectedSubButton('output3');
//     navigate('/output3');
//   };

//   const handleDenoiseButtonClick = async () => {
//     setIsLoading(true); // Set loading to true when button is clicked
//     setIsSuccess(false); // Reset success status

//     try {
//       const response = await axios.post('http://192.168.1.12:8000/denoise'); // Fetch the denoised image
//       if (response.ok) {
//         const blob = await response.blob();
//         const imageUrl = URL.createObjectURL(blob); // Convert the image to a URL
//         setDenoisedImage(imageUrl);
//         setIsSuccess(true); // Set success to true after image is loaded
//       } else {
//         console.error('Failed to fetch denoised image');
//       }
//     } catch (error) {
//       console.error('Error fetching the denoised image:', error);
//     } finally {
//       setIsLoading(false); // Set loading to false after the fetch operation is complete
//     }
//   };

//   return (
//     <>
//       <div className='containerr' style={{ height: "80vh", width: "100%" }}>
//       <Button
//           variant="contained"
//           sx={{ margin: "20px", position: "absolute", right: 200 }}
//           onClick={handleDenoiseButtonClick}
//           disabled={isLoading} // Disable button while loading
//         >
//           Denoise Image
//         </Button>
//         {isLoading && (
//           <CircularProgress style={{ position: 'absolute', left: '50%', top: '50%' }} />
//         )}
//         {denoisedImage && !isLoading && (
//           <img
//             src={denoisedImage}
//             alt="Denoised output"
//             style={{ maxWidth: "100%", maxHeight: "100%" }}
//           />
//         )}
//       </div>
//       {/* <Snackbar open={isSuccess} autoHideDuration={3000} onClose={() => setIsSuccess(false)}>
//         <Alert onClose={() => setIsSuccess(false)} severity="success" sx={{ width: '100%' }}>
//           Image denoised successfully!
//         </Alert>
//       </Snackbar> */}
//       <Snackbar
//         open={isSuccess}
//         autoHideDuration={2000}
//         onClose={() => setIsSuccess(false)}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       >
//         <Alert onClose={() => setIsSuccess(false)} severity="success" sx={{ width: '100%' }}>
//         Image denoised successfully!
//         </Alert>
//       </Snackbar>
//       <div style={{ position: "relative" }}>
        
//         <Button
//           variant="contained"
//           sx={{ margin: "20px", position: "absolute", right: 100 }}
//           onClick={handleButtonClick}
//         >
//           Output
//         </Button>
//       </div>

//       {/* Snackbar for Success Message */}
      
//     </>
//   );
// };

// export default Denoising3;

import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../contextapi/SidebarProvider';

const Denoising3 = () => {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  // Click handler to update the active button and image
  const clickHandler = (buttonId) => {
    setActiveButton(buttonId);
  };
  const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context

  const handleButtonClick = () => {
    setSelectedSubButton('modelexplainability1'); // Set the active sidebar button
    navigate('/modelexplainability1'); // Navigate to the route
  };
  
  const handleButtonClickk = () => {
    // setSelectedSubButton('matrix'); // Set the active sidebar button
    navigate('/matrix3'); // Navigate to the route
  };

  return (
    <div>
      <div style={{ display: 'flex', height: '10vh', maxWidth: "1200px", marginLeft: "100px" }}>
        {/* <Button
          
          sx={{ margin: "20px", backgroundColor: activeButton === 'LearningRateofResnet50' ? '#115293' : '#e3f2fd', 
            color: activeButton === 'LearningRateofResnet50' ? 'white' : 'black'
          }}
          onClick={() => clickHandler('LearningRateofResnet50')}
        >
          Learning Rate of Resnet50
        </Button> */}
        <Button
          variant="contained"
          sx={{ margin: "20px", backgroundColor: activeButton === 'Metrics' ? '#115293' : '#e3f2fd',
            color: activeButton === 'Metrics' ? 'white' : 'black'
           }}
          onClick={handleButtonClickk}
        >
          Run ML 
        </Button>
        {/* <Button
          variant="contained"
          sx={{ margin: "20px", width: "18%", backgroundColor: activeButton === 'Confusionmatrix' ? '#115293' : '#e3f2fd',
            color: activeButton === 'Confusionmatrix' ? 'white' : 'black'
           }}
          onClick={() => clickHandler('Confusionmatrix')}
        >
          Confusion matrix
        </Button> */}
      </div>
      <div className='containerr' style={{ height: "70vh", width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Conditionally render the image based on the active button */}
        {/* {activeButton && <img src={images[activeButton]} alt={activeButton} style={{ maxWidth: '100%', maxHeight: '100%' }} />} */}
      </div>
      {/* <div style={{ position: "relative" }}>
        <Button
          variant="contained"
          sx={{ margin: "20px", position: "absolute", right: 100 }}
          onClick={handleButtonClick}
        >
          Explain Model
        </Button>
      </div> */}
    </div>
  );
};

export default Denoising3;

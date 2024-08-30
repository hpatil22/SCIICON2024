// import React, { useState } from 'react'
// import { Button } from '@mui/material'

// const DataQualityIndex = () => {
//     const [imageLoader ,setImageLoader] =useState();
//     const clickHandler = (buttonId)=>{
//         setImageLoader((prev)=> )
//     }

//   return (
//     <div>
//         <div style={{display:'flex',height:'10vh', maxWidth:"1200px",marginLeft:"100px" }}>
//         <Button variant="contained"  sx={{margin:"20px",}} >
//  SSIM
// </Button>
//         <Button variant="contained"  sx={{margin:"20px",}} >
//  Brightness
// </Button>
//         <Button variant="contained"  sx={{margin:"20px",width:"18%",}} >
//         Class Dist of Quality Images
// </Button>
//         </div>
//         <div className='containerr' style={{height:"70vh", width:"100%"}}></div>
//     </div>
//   )
  
// }

// export default DataQualityIndex


import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../contextapi/SidebarProvider';

// Define image paths or URLs
const images = {
  SSIM: '/img/ssm.png',
  Brightness: '/img/Brightness.png',
  ClassDist: '/img/last.png'
};

const DataQualityIndex = () => {
  // State to keep track of the active button
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  // Click handler to update the active button and image
  const clickHandler = (buttonId) => {
    setActiveButton(buttonId);
  };
  const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context

  const handleButtonClick = () => {
    setSelectedSubButton('datapreprocessing1'); // Set the active sidebar button
    navigate('/datapreprocessing1'); // Navigate to the route
  };

  
  return (
    <div>
      <div style={{ display: 'flex', height: '10vh', maxWidth: "1200px", marginLeft: "100px" }}>
        <Button
          
          sx={{ margin: "20px", backgroundColor: activeButton === 'SSIM' ? '#115293' : '#e3f2fd', 
            color: activeButton === 'SSIM' ? 'white' : 'black'
          }}
          onClick={() => clickHandler('SSIM')}
        >
          SSIM
        </Button>
        <Button
          variant="contained"
          sx={{ margin: "20px", backgroundColor: activeButton === 'Brightness' ? '#115293' : '#e3f2fd',
            color: activeButton === 'Brightness' ? 'white' : 'black'
           }}
          onClick={() => clickHandler('Brightness')}
        >
          Brightness
        </Button>
        <Button
          variant="contained"
          sx={{ margin: "20px", width: "18%", backgroundColor: activeButton === 'ClassDist' ? '#115293' : '#e3f2fd',
            color: activeButton === 'ClassDist' ? 'white' : 'black'
           }}
          onClick={() => clickHandler('ClassDist')}
        >
          Class Dist of Quality Images
        </Button>
      </div>
      <div className='containerr' style={{ height: "70vh", width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Conditionally render the image based on the active button */}
        {activeButton && <img src={images[activeButton]} alt={activeButton} style={{ maxWidth: '100%', maxHeight: '100%' }} />}
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
    </div>
  );
};

export default DataQualityIndex;

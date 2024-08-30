import React, { useState } from 'react'
import { Button } from '@mui/material';

const images = {
    display1: '/img/display1.png',
    display2: '/img/display2.jpg',
   
  };


const DisplaySamples = () => {
    const [activeButton, setActiveButton] = useState(null);

    // Click handler to update the active button and image
    const clickHandler = (buttonId) => {
      setActiveButton(buttonId);
    };
  return (
    <div>
    <div style={{ display: 'flex', height: '10vh', maxWidth: "1200px", marginLeft: "100px" }}>
      <Button
        
        sx={{ margin: "20px", backgroundColor: activeButton === 'display1' ? '#115293' : '#e3f2fd', 
          color: activeButton === 'display1' ? 'white' : 'black'
        }}
        onClick={() => clickHandler('display1')}
      >
        Display first Image
      </Button>
      <Button
        variant="contained"
        sx={{ margin: "20px", backgroundColor: activeButton === 'display2' ? '#115293' : '#e3f2fd',
          color: activeButton === 'display2' ? 'white' : 'black'
         }}
        onClick={() => clickHandler('display2')}
      >
        Display second Image
      </Button>
    </div>
    <div className='containerr' style={{ height: "70vh", width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Conditionally render the image based on the active button */}
      {activeButton && <img src={images[activeButton]} alt={activeButton} style={{ maxWidth: '100%', maxHeight: '100%' }} />}
    </div>
    {/* <div style={{ position: "relative" }}>
      <Button
        variant="contained"
        sx={{ margin: "20px", position: "absolute", right: 100 }}
      //   onClick={()=> navigate('/step2')}
      >
        Next
      </Button>
    </div> */}
  </div>
    
  )
}

export default DisplaySamples;
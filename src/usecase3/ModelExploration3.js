import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../contextapi/SidebarProvider';

const ModelExploration3 = () => {
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
  )
}

export default ModelExploration3
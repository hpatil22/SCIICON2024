

import React, { useState } from 'react';
import Button from '@mui/material/Button';

const images = {
  detectionandexplainability: '/img/explain.png',
  Shapvalue: '/img/explain3.png',
};

const imageStyles = {
  detectionandexplainability: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: '80%',
    borderRadius: '10px',
    border: '2px solid #ccc',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    objectFit: 'cover',
  },
  Shapvalue: {
    maxWidth: '80%',
    maxHeight: '80%',
    width: '70%',
    // borderRadius: '5px',
    // border: '1px solid #bbb',
    // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    objectFit: 'contain',
  },
};

const ModelExplainability = () => {
  // State to keep track of the active button
  const [activeButton, setActiveButton] = useState(null);

  // Click handler to update the active button and image
  const clickHandler = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <div style={{ display: 'flex', height: '10vh', maxWidth: '1200px', marginLeft: '100px' }}>
        <Button
          sx={{
            margin: '20px',
            backgroundColor: activeButton === 'detectionandexplainability' ? '#115293' : '#e3f2fd',
            color: activeButton === 'detectionandexplainability' ? 'white' : 'black',
          }}
          onClick={() => clickHandler('detectionandexplainability')}
        >
          Detection and Explainability
        </Button>
        <Button
          variant="contained"
          sx={{
            margin: '20px',
            backgroundColor: activeButton === 'Shapvalue' ? '#115293' : '#e3f2fd',
            color: activeButton === 'Shapvalue' ? 'white' : 'black',
          }}
          onClick={() => clickHandler('Shapvalue')}
        >
          Shapvalue
        </Button>
      </div>
      <div className='containerr' style={{ height: '70vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Conditionally render the image based on the active button */}
        {activeButton && (
          <img
            src={images[activeButton]}
            alt={activeButton}
            style={imageStyles[activeButton]} // Apply the individual style
          />
        )}
      </div>
      {/* <div style={{ position: 'relative' }}>
        <Button
          variant="contained"
          sx={{ margin: '20px', position: 'absolute', right: 100 }}
          // onClick={() => navigate('/step2')}
        >
          Next
        </Button>
      </div> */}
    </div>
  );
};

export default ModelExplainability;

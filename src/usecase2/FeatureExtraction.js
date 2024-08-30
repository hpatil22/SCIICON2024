import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../contextapi/SidebarProvider';
import { Button } from '@mui/material';

const FeatureExtraction = () => {
    const navigate =useNavigate();
    const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context

    const handleButtonClick = () => {
      setSelectedSubButton('smoteoperation'); // Set the active sidebar button
      navigate('/smoteoperation'); // Navigate to the route
    };
  return (
    <>
    <div className='containerr' style={{height:"80vh", width:"100%"}}>
        <img src='/img/feature.png' />
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
  )
}

export default FeatureExtraction
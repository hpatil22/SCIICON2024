import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSidebar } from '../contextapi/SidebarProvider';

const Dataprocessing2 = () => {
    const navigate =useNavigate();
    const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context

    const handleButtonClick = () => {
      setSelectedSubButton('featureExtraction'); // Set the active sidebar button
      navigate('/featureExtraction'); // Navigate to the route
    };
  return (
    <>
    <div className='containerr' style={{height:"80vh", width:"100%"}}>
        <img src='/img/dataprocessing.png' style={{height:"70vh", width:"80%"}} />
        <h3 style={{textAlign:"center"}}> The Preprocessed quality class distribution</h3>
      
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

export default Dataprocessing2
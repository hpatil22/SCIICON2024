import React from 'react'
import { useSidebar } from '../contextapi/SidebarProvider';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const SyntheticData = () => {
    const navigate =useNavigate();
    const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context

    const handleButtonClick = () => {
      setSelectedSubButton('displaysamples'); // Set the active sidebar button
      navigate('/displaysamples'); // Navigate to the route
    };
  return (
    <>
    <div className='containerr' style={{height:"80vh", width:"100%"}}>
        <img src='/img/compaireusecae2.png' style={{height:"80vh"}}></img>
    </div>
    <div style={{ position: "relative" }}>
      <Button
        variant="contained"
        sx={{ margin: "20px", position: "absolute", right: 100 }}
        onClick={handleButtonClick}
      >
       Display 
      </Button>
    </div>
    </>
  )
}

export default SyntheticData
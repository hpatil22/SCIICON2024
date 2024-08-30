import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../../contextapi/SidebarProvider';
const Step3 = () => {
    const navigate =useNavigate();
    const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context

    const handleButtonClick = () => {
      setSelectedSubButton('syntheticdata'); // Set the active sidebar button
      navigate('/syntheticdata'); // Navigate to the route
    };
  return (
    <div>
    <div style={{ marginLeft: "70px" }}>
      <Button variant="contained" sx={{ margin: "20px" }}>
        Step3
      </Button>
    </div>
    <div className="containerr" style={{ height: "70vh", width: "100%" }}>
      <h3>Increase the minority and check the output  </h3>
      <img src="/img/step1.png" style={{ width: "80%", height: "60vh" }} />
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
  )
}

export default Step3
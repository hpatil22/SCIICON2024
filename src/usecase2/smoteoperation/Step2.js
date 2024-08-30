import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
const Step2 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div style={{ marginLeft: "70px" }}>
        <Button variant="contained" sx={{ margin: "20px" }}>
          Step2
        </Button>
      </div>
      <div className="containerr" style={{ height: "70vh", width: "100%" }}>
        <h3>Focus on the minority class and generate synthetic samples </h3>
        <img src="/img/step1.png" style={{ width: "80%", height: "60vh" }} />
      </div>
      <div style={{ position: "relative" }}>
        <Button
          variant="contained"
          sx={{ margin: "20px", position: "absolute", right: 100 }}
            onClick={()=> navigate('/step3')}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default Step2
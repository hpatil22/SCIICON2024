import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div style={{ marginLeft: "70px" }}>
        <Button variant="contained" sx={{ margin: "20px" }}>
          Step1
        </Button>
      </div>
      <div className="containerr" style={{ height: "70vh", width: "100%" }}>
        <h3>Identify Imbalance by performing Class Distribution of dataset </h3>
        <img src="/img/dataprocessing.png" style={{ width: "80%", height: "60vh" }} />
      </div>
      <div style={{ position: "relative" }}>
        <Button
          variant="contained"
          sx={{ margin: "20px", position: "absolute", right: 100 }}
          onClick={()=> navigate('/step2')}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Step1
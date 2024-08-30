import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSidebar } from '../contextapi/SidebarProvider';
import '../App.css';

const DataProcessing = () => {
    const navigate =useNavigate();
    const { setSelectedSubButton } = useSidebar();
    const [imageSrc, setImageSrc] = useState(''); // State to hold the image URL
  const [loading, setLoading] = useState(false);  // Destructure the setter from the context

    const handleButtonClick = () => {
      setSelectedSubButton('modelexploration1'); // Set the active sidebar button
      navigate('/modelexploration1'); // Navigate to the route
    };
    const fetchImage = () => {
      setLoading(true); // Start loading
      setTimeout(() => {
        // Simulate fetching image and introduce a delay
        setImageSrc('/img/dataprocessing.png'); // Set the image source
        setLoading(false); // End loading
      }, 2000); // 2-second delay (2000 milliseconds)
    };
    useEffect(()=>{
fetchImage()
    },[])
  return (
    <>
    <div className='containerr' style={{height:"80vh", width:"100%"}}>
    {loading && (
        <div className="spinner"></div> // Show spinner while loading
      )}
      
      {imageSrc && !loading && (
        <div>
          <img
            src={imageSrc}
            alt="Fetched content"
            style={{  marginLeft: "100px", maxHeight: '70vh', width: '80%' }}
          />
          <h3 style={{textAlign:"center"}}> The Preprocessed quality class distribution</h3>
        </div>
      )}
        {/* <img src='/img/dataprocessing.png' style={{height:"70vh", width:"80%"}} />
        <h3 style={{textAlign:"center"}}> The Preprocessed quality class distribution</h3> */}
      
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

export default DataProcessing
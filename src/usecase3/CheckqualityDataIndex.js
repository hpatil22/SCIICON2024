// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useSidebar } from '../contextapi/SidebarProvider';
// import { Button } from '@mui/material';

// const CheckqualityDataIndex = () => {
//     const navigate =useNavigate();
//     const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context

//     const handleButtonClick = () => {
//       setSelectedSubButton('processimage'); // Set the active sidebar button
//       navigate('/processimage'); // Navigate to the route
//     };
//   return (
//     <>
//     <div className='containerr' style={{height:"80vh", width:"100%"}}>
//     {/* <img src='/img/feature.png' /> */}
// </div>
// <div style={{ position: "relative" }}>
//       <Button
//         variant="contained"
//         sx={{ margin: "20px", position: "absolute", right: 100 }}
//         onClick={handleButtonClick}
//       >
//         Next
//       </Button>
//     </div>
//     </>
//   )
// }

// export default CheckqualityDataIndex

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../contextapi/SidebarProvider';
import { Button } from '@mui/material';
import '../App.css'; // Import your CSS file for styling

const CheckqualityDataIndex = () => {
  const navigate = useNavigate();
  const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context

  const [qualityData, setQualityData] = useState(null); // State to store the fetched data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.1.12:8000/check-quality-index');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setQualityData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleButtonClick = () => {
    setSelectedSubButton('processimage'); // Set the active sidebar button
    navigate('/processimage'); // Navigate to the route
  };

  return (
    <>
      <div className='containerr' style={{ height: "80vh", width: "100%" }}>
        {/* Display loading, error, or fetched data */}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {qualityData && (
          <div className="table-container">
            <table className="quality-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MSE</td>
                  <td>{qualityData.MSE}</td>
                </tr>
                <tr>
                  <td>PSNR</td>
                  <td>{qualityData.PSNR}</td>
                </tr>
                <tr>
                  <td>SNR</td>
                  <td>{qualityData.SNR}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
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
  );
};

export default CheckqualityDataIndex;

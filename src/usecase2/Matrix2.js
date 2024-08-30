import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const epochs = [
    { epoch: 0, train_loss: 0.531046, valid_loss: 0.926918, accuracy: 0.923570 },
    { epoch: 1, train_loss: 0.303603, valid_loss: 0.285236, accuracy: 0.940649 },
    { epoch: 2, train_loss: 0.109928, valid_loss: 0.059974, accuracy: 0.978651 },
    { epoch: 3, train_loss: 0.083285, valid_loss: 0.054276, accuracy: 0.977797 }
  ];
  
  // Hardcoded durations for each epoch (in seconds)
  const epochDurations = [
    20, // Example: 20 seconds for Epoch 0
    44, // Example: 20 seconds for Epoch 1
    38, // Example: 20 seconds for Epoch 2
    29  // Example: 20 seconds for Epoch 3
  ];
  
const Matrix2 = () => {
    const [currentEpoch, setCurrentEpoch] = useState(0);
    const [completedEpochs, setCompletedEpochs] = useState([]);
    const [timers, setTimers] = useState(Array(epochs.length).fill(0)); // Array to track each epoch's timer
    const [activeButton, setActiveButton] = useState(null);
    const navigate = useNavigate();
    const handleButtonClickfor = () => {
        // setSelectedSubButton('dataquality1'); // Set the active sidebar button
        navigate('/confusionmatrix'); // Navigate to the route
      };
  
    useEffect(() => {
      let timerId;
  
      if (currentEpoch < epochs.length) {
        // Only set interval for the current epoch that is not completed
        timerId = setInterval(() => {
          setTimers((prevTimers) => {
            const newTimers = [...prevTimers];
            newTimers[currentEpoch] += 1;
  
            if (newTimers[currentEpoch] >= epochDurations[currentEpoch]) {
              clearInterval(timerId);
              handleTimerComplete();
            }
  
            return newTimers;
          });
        }, 1000);
      }
  
      return () => clearInterval(timerId);
    }, [currentEpoch]);
  
    const handleTimerComplete = () => {
      setCompletedEpochs((prevCompleted) => [...prevCompleted, currentEpoch]);
      if (currentEpoch < epochs.length - 1) {
        setCurrentEpoch((prev) => prev + 1); // Move to the next epoch
      }
    };
  
  return (
    <>
      <Button
          variant="contained"
          sx={{ margin: "20px", marginLeft:"100px", backgroundColor: activeButton === 'Metrics' ? '#115293' : '#e3f2fd',
            color: activeButton === 'Metrics' ? 'white' : 'black'
           }}
        //   onClick={handleButtonClickk}
        >
          Metrics
        </Button>
    <div className='containerr' style={{ height: "70vh", width: "100%", position: 'relative' }}>
        <div style={{display:"flex" , }}>
            <div style={{display:'flex' , flexDirection:"column"}}>

       {epochs.map((epochData, index) => (
        <div key={index} style={{ marginBottom: '5px' }}>
          {(index <= currentEpoch || completedEpochs.includes(index)) && (
            <>
              <div style={{display:'flex' , alignItems:'center',}}>
                <h2> Epoch {epochData.epoch}  </h2>
              <div style={{marginLeft:"50px", color:"blue"}}>Time Elapsed: {timers[index]}s</div>
                 </div>
              <div>Train Loss: {epochData.train_loss}</div>
              <div>Valid Loss: {epochData.valid_loss}</div>
              <div>Accuracy: {epochData.accuracy}</div>
            </>
          )}
        </div>
      ))}
            </div>
            {
                currentEpoch >= epochs.length-1 &&

<div style={{margin:"150px", height:"50vh",width:"50%"}}> <img src='/img/matrix2.png' style={{width:"120%"}} /></div>
            }
        </div>
      {/* {currentEpoch >= epochs.length && <div>No more epochs</div>} */}
    </div>
    {/* {
      currentEpoch >= epochs.length-1 &&  
    <div style={{ position: "relative" }}>
        <Button
          variant="contained"
          sx={{ margin: "20px", position: "absolute", right: 100 }}
          onClick={handleButtonClickfor}
        >
          confusion Matrix 
        </Button>
        </div>
    } */}
    </>
  )
}

export default Matrix2
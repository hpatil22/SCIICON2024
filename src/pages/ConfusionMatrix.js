import { Button } from '@mui/material'
import React, { useState } from 'react'

const ConfusionMatrix = () => {
    const [activeButton, setActiveButton] = useState(null);
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
    <div className='containerr' style={{ height: "70vh", width: "100%", position: 'relative',  }}>
        <img src='/img/confusionmatrix.png' style={{width:"45%" , marginLeft:"300px"}}/>
    </div>
    </>
  )
}

export default ConfusionMatrix
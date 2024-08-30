import React from 'react'
import "./Usecase1.css"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSidebar } from '../contextapi/SidebarProvider'

const Usecase1 = () => {
  const navigate = useNavigate();

  const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context

  const handleButtonClick = () => {
    setSelectedSubButton('loaddata1'); // Set the active sidebar button
    navigate('/loaddata1'); // Navigate to the route
  };

  return (
    <>
    <div class="containerr">
    <h1>1. Detection of Pneumonia using an Explainable AI framework
    </h1>
    <div>
      <p><span>Hypothesis:</span> Using SHAP to explain ResNet-50's pneumonia detection improves model interpretability and trust in its diagnostic decisions.
      </p>
    </div>
    <div>
      <h3>Study Details:</h3>
      <div>
        <h4>CXR’s : 11,712
        </h4>
        <h4>Testing: 5216
        </h4>
        <h4>TTraining: 624
        </h4>
        <h4>Validation : 16
        </h4>
      </div>
    </div>
    <h3>Dataset link: <a href="https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia">https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia</a></h3>
    <div>
      <p><span>Application:</span> Integrating SHAP with ResNet-50 in pneumonia detection provides visual explanations of the model’s predictions, enhancing interpretability and trust in clinical decisions. This helps clinicians understand the key features influencing the AI's diagnosis.

</p>
    </div>
    {/* <h2>They introduced a CNN-based transfer learning-based approach for automatically explaining pulmonary diseases, i.e., edema, tuberculosis, nodules, and pneumonia from chest radiographs. Among these pulmonary diseases, pneumonia, which COVID-19 causes, is deadly; therefore, radiographs of COVID-19 are used for the explanation task. References: <a href="https://www.ncbi.nim.nih.gov/pmc/articles/PMC9818469/">https://www.ncbi.nim.nih.gov/pmc/articles/PMC9818469/</a></h2> */}
  </div>
  <div style={{position:"relative"}}>
  <Button variant="contained"  sx={{margin:"20px",width:"10%",position:"absolute" ,right:"30px"}} onClick={handleButtonClick} >
 Run Use Case
</Button>

  </div>
    </>
  
  )
}

export default Usecase1
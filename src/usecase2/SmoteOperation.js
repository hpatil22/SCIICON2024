import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Step1 from './smoteoperation/Step1'
import Step2 from './smoteoperation/Step2'

const SmoteOperation = () => {
  return (
   
        <Routes>
            <Route path='/' element={<Step1></Step1>}></Route>
            <Route path='/step2' element={<Step2></Step2>}></Route>
            {/* <Route path='/' element={<Step1></Step1>}></Route> */}
        </Routes>

  )
}

export default SmoteOperation
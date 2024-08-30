import React, {  Suspense  } from 'react'
import { Route, Routes } from 'react-router-dom'
import Usecase1 from './Usecase1';
import Sidebar from './Sidebar';
import Usecase3 from './Usecase3';
import Usecase2 from './Usecase2';




const SidebarRoutesAll = () => {
  
    

  return (
    // <BrowserRouter>
  <>
<div style={{display:"flex", flexDirection:"column"}}>
    <div style={{width:"20%"}}>

<Sidebar></Sidebar>
    </div>
    <div style={{width:"70%"}}>
    <Suspense fallback={<h1> Loading ....................</h1>}>
    <Routes>
      <Route
        path="/usecase1"
        element={
         
          <Usecase1 />
          
          }
      ></Route>
      <Route
        path="/usecase2"
        element={
         
          <Usecase2/>
          
          }
      ></Route>
      <Route
        path="/usecase3"
        element={
         
          <Usecase3 />
          
          }
      ></Route>
     
    </Routes>

    </Suspense>
    </div>
</div>

   
  </>

 
// {/* </BrowserRouter> */}
  )
}

export default SidebarRoutesAll
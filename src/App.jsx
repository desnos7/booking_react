import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  Home  from "../src/assets/pages/home.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      
        <Route path={"/"} element={<Home/>}/>
       
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

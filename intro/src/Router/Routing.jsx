import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from '../Pages/Homepage'
import Resume from '../Pages/Resume'


const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing
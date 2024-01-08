import React from 'react'
import {Routes, Route} from "react-router-dom";

import Homepage from './Home/Homepage';
import About from './Home/About';
import Sidebar from './Sidemenu/Sidebar';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/sidesmenu" element={<Sidebar/>}></Route>

      </Routes>
    </div>
  )
}

export default AllRoutes

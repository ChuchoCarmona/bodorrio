import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import Homepage4 from '../HomePage4'
import BlogPage from '../blogpage'
import BlogDetailsPage from '../BlogDetailsPage'

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/home2' element={<Homepage2 />} />
          <Route path='/home3' element={<Homepage3 />} />
          <Route path='/home4' element={<Homepage4 />} />
          <Route path='/Blog' element={<BlogPage />} />
          <Route path='/Blog-details' element={<BlogDetailsPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;

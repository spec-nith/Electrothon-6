 import React from 'react';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Video from './video';
 
 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/Electrothon-6.O" element={<Video />} />  
      </Routes>
    </Router>
  );
}

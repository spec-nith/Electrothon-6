 import React from 'react';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
      </Routes>
    </Router>
  );
}

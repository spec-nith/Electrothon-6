 import React from 'react';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sponser from './components/Sponser/Sponser';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponser" element={<Sponser/>} />
      </Routes>
    </Router>
  );
}

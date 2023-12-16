 import React from 'react';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sponser from './components/Sponser/Sponser';
import Pirzenav from './components/prizes-nav/prizes-main/prize';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponser" element={<Sponser/>} />
        <Route path="/Pirzenav" element={<Pirzenav/>} />
      </Routes>
    </Router>
  );
}

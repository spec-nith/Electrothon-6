 import React from 'react';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sponser from "./components/sponsernav/main/main";
 
import MagicalLoader from './components/Loader_P/Loader_P';
 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
      </Routes>
    </Router>
  );
}

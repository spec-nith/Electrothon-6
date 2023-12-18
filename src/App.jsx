import React from "react";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sponser from "./components/sponsernav/main/main";
import Pirzenav from "./components/prizesnav/prizesmain/prize";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sponser" element={<Sponser />} />
        <Route path="/Pirzenav" element={<Pirzenav />} />
      </Routes>
    </Router>
  );
}

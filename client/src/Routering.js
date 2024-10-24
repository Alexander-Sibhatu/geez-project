import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage'
import Verbpages from './pages/VerbPage/VerbPage'

function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
       <Route path="/gis" element={<Verbpages />} />
      </Routes>
    </Router>
  );
}

export default Routering

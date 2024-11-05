import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage'
import Verbspages from './pages/VerbsPage/VerbsPage'

function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
       <Route path="/verbs" element={<Verbspages />} />
      </Routes>
    </Router>
  );
}

export default Routering

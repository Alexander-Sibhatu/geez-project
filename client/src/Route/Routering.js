import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from '../pages/HomePage/HomePage'
import CategoryPage from '../pages/CategoryPage/CategoryPage'
import Grammer from '../pages/Grammer/Grammer'
import Poems from '../pages/Poems/Poem'
import Noun from '../pages/Noun/Noun'
import Verbs from '../pages/Verbs/Verbs'
function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catagory" element={<CategoryPage />} />
        <Route path='/grammer' element={<Grammer/>}/>
        <Route path='/noun' element={<Noun/>}/>
        <Route path='/poem' element={<Poems/>}/>
        <Route path='/verbs' element={<Verbs />} />
      </Routes>
    </Router>
  );
}

export default Routering

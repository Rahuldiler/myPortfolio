import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/homepages/Home'
import About from '../components/homepages/About'
const HomeRoutes = () => {
  return (
    <Routes>
      <Route exact path="/myportfolio" element={<Home />} />
      <Route exact path="/aboutus" element={<About />} />
    </Routes>
  )
}

export default HomeRoutes
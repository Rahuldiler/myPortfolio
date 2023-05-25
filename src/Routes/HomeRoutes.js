import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/homepages/Home'
import AboutMore from '../components/aboutpages/AboutMore'
const HomeRoutes = () => {
  return (
    <Routes>
      <Route exact path="/myportfolio" element={<Home />} />
      <Route exact path="/aboutus" element={<AboutMore />} />
    </Routes>
  )
}

export default HomeRoutes
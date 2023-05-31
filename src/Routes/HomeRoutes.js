import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/homepages/Home'
import AboutMore from '../components/aboutpages/AboutMore'
import Team from '../components/teampages/Team'
import TeamCard from '../components/teampages/TeamCard'
import GetTouch from '../components/reusable/GetTouch'
const HomeRoutes = () => {
  return (
    <Routes>
      <Route exact path="/myportfolio" element={<Home />} />
      <Route exact path="/aboutus" element={<AboutMore />} />
      <Route exact path="/team" element={<Team />} />
      <Route exact path="/team-detail/:id" element={<TeamCard />} />
      <Route exact path="/contact" element={<GetTouch />} />
    </Routes>
  )
}

export default HomeRoutes
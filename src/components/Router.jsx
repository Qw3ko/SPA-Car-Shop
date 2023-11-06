import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home'
import CarDetail from './screens/car-detail/CarDetail'

function Router() {
  return (
  <BrowserRouter>
  <Routes>
    <Route element={<Home />} path='/' />
    <Route element={<CarDetail />} path='/car/:id' />
    <Route element={<div>Not found</div>} path='*' />
  </Routes>
  </BrowserRouter>
  )
}

export default Router
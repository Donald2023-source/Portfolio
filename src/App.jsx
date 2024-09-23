import React from 'react'
import Landingpage from './Pages/LandingPage/Landingpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Pages/LandingPage/layout'

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><Landingpage/></Layout>} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
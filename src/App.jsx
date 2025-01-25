import React from 'react'
import Landingpage from './Pages/LandingPage/Landingpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import UserLayout from './layouts/UserLayout'
import Dashboard from './Pages/UserDashboard/Pages/Dashboard'

import PhoneNumber from './Pages/Auth/Signup/PhoneNumber'
const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><Landingpage/></Layout>} />
        <Route path='/dashboard' element={<UserLayout><Dashboard/></UserLayout>}/>
        <Route path="/auth/signup" element={<PhoneNumber /> } />
      </Routes>
   </BrowserRouter>
  )
}

export default App
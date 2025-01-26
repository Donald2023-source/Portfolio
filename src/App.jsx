import React from 'react'
import Landingpage from './Pages/LandingPage/Landingpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import UserLayout from './layouts/UserLayout'
import Dashboard from './Pages/UserDashboard/Pages/Dashboard'

import PhoneNumber from './Pages/Auth/Signup/PhoneNumber'
import ConfirmNumber from './Pages/Auth/Signup/ConfirmNumber'
import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
   <BrowserRouter>
   <ToastContainer />
      <Routes>
        <Route path='/' element={<Layout><Landingpage/></Layout>} />
        <Route path='/dashboard' element={<UserLayout><Dashboard/></UserLayout>}/>
        <Route path="/auth/signup" element={<PhoneNumber /> } />
        <Route path='/auth/confirm' element={<ConfirmNumber />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
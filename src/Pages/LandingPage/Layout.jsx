import React from 'react'
import Navbar from '../../Components/Navbar'

const Layout = ({children}) => {
  return (
    <div>
      <span className='bg-white'>
        <Navbar/>
        </span>
     
        {children}
    </div>
  )
}

export default Layout
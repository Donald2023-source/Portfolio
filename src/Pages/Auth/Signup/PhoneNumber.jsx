import React from 'react'
import aside from '../../../Components/Aside'
import Aside from '../../../Components/Aside'
import img1 from '../../../assets/Frame 1147.png'
import logo from '../../../assets/logo.jpg'

const PhoneNumber = () => {
  return (
    <div className='w-full h-screen flex items-center gap-3'>
        <div className='w-1/2 h-full border' >
            <img className='h-full object-cover w-full' src={img1} alt='sign up img'/>
        </div>

        <div className='w-1/2'>
            <div>
                <img className='h-10' src={logo} alt='logo'/>
                <h2>First Add your Phone Number</h2>   
            </div>
        </div>
    </div>
  )
}

export default PhoneNumber

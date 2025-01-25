import React from 'react'
import aside from '../../../Components/Aside'
import Aside from '../../../Components/Aside'
import img1 from '../../../assets/Frame 1147.png'
import logo from '../../../assets/logo.jpg'
import { BiPhone } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const ConfirmNumber = () => {
  return (
    <div className='w-full h-screen flex items-center relative gap-3'>
        <div className='lg:w-[60%] w-full h-full border' >
            <img className='h-full object-cover w-full' src={img1} alt='sign up img'/>
        </div>

        
    </div>
  )
}

export default ConfirmNumber

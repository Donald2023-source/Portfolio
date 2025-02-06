import React, { useState } from 'react'
import aside from '../../../Components/Aside'
import Aside from '../../../Components/Aside'
import img1 from '../../../assets/Frame 1147.png'
import logo from '../../../assets/logo.jpg'
import { BiPhone } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
const Newprofile = () => {

  return (
    <div className='w-full h-screen flex items-center relative gap-3'>
        <div className='lg:w-[60%] relative w-full h-full border' >
            <img className='h-full object-cover w-full' src={img1} alt='sign up img'/>
        </div>

        <div className='lg:w-[40%] md:w-[70%] w-fit lg:static left-0 right-0 absolute h-full flex flex-col items-center justify-center px-1 top-0 z-50 mx-auto'>
            <div className='lg:w-[80%] shadow-lg justify-center bg-white lg:mx-auto px-4 rounded-lg py-20 flex flex-col gap-14 items-center'>
                <div className='flex flex-col gap-2'>
                  <img className='h-10' src={logo} alt='logo'/>
                  <h2 className='font-semibold text-2xl'>Hello! Welcome</h2>
                  <p>First Add your Phone Number</p>   
                </div>

                <div className='flex flex-col gap-4'>
                   <form action="">
                      <fieldset className='flex flex-col rounded-lg relative border p-2 '>
                        <label className='text-sm absolute -top-2 left-5 bg-white px-3' htmlFor="">Mobile Number</label>
                        <span className='flex items-center'>
                          <BiPhone className='text-gray-400' />
                          <input className='outline-none py-2 px-3' type="text" placeholder='Enter your mobile number' />
                        </span>
                      </fieldset> 

                      <fieldset className='flex flex-col rounded-lg relative border p-2 '>
                        <legend>New</legend>
                        <label className='text-sm absolute -top-2 left-5 bg-white px-3' htmlFor="">Mobile Number</label>
                        <span className='flex items-center'>
                          <BiPhone className='text-gray-400' />
                          <input className='outline-none py-2 px-3' type="text" placeholder='Enter your mobile number' />
                        </span>
                      </fieldset> 
                   </form>

                   <p className='lg:text-sm text-xs text-gray-400'>By continuing, you confirm ownership of this phone number and agree to receive automated texts to verify it. Standard message and data rates may apply.</p>

                   <button className='p-3 border w-[80%] bg-mainColor font-semibold flex items-center justify-center mx-auto'>Continue</button>
                   <p className='text-center'>Already Have an Account? <Link className='text-myGreen font-semibold'>Login</Link></p>
                </div>
            </div>
        </div>
        <div className='bg-black/70 lg:hidden h-full w-full absolute top-0 left-0'/>
    </div>
  ) 
}

export default Newprofile

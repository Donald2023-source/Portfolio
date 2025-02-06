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

        <div className='lg:w-[40%] md:w-[70%] w-[85%] lg:static left-0 right-0 absolute h-full flex flex-col items-center justify-center px-1 top-0 z-50 mx-auto'>
            <div className='lg:w-[80%] w-full shadow-lg justify-center bg-white lg:mx-auto px-4 rounded-lg py-5 md:py-8 flex flex-col gap-8 items-center'>
                <div className='flex flex-col gap-2'>
                  <img className='h-10' src={logo} alt='logo'/>
                  <h2 className='font-semibold text-2xl'>Set Up Your Profile</h2>
                  <p>The Info needs to be accurate</p>   
                </div>

                <div className='flex flex-col gap-4 w-[100%]'>
                   <form className='flex flex-col gap-5' action="">
                   <fieldset className='flex flex-col rounded-lg relative border px-2 pb-2'>
                      <legend className='px-4 text-gray-500 text-sm'>Full Name</legend>
                        <span className='flex items-center'>    
                          <BiPhone className='text-gray-400' />
                          <input className='outline-none  px-3' type="text" placeholder='Enter your full name' />
                        </span>
                      </fieldset> 

                    <fieldset className='flex flex-col rounded-lg relative border px-2 pb-2'>
                      <legend className='px-4 text-gray-500 text-sm'>Reg No</legend>
                        <span className='flex items-center'>    
                          <BiPhone className='text-gray-400' />
                          <input className='outline-none py-1 px-3' type="text" placeholder='Enter your Keke Reg No' />
                        </span>
                      </fieldset> 

                    <fieldset className='flex flex-col rounded-lg relative border px-2 pb-2'>
                      <legend className='px-4 text-gray-500 text-sm'>Create Password</legend>
                        <span className='flex items-center'>    
                          <BiPhone className='text-gray-400' />
                          <input className='outline-none py-1 px-3' type="text" placeholder='Create a strong password' />
                        </span>

                      </fieldset> 
                    <fieldset className='flex flex-col rounded-lg relative border px-2 pb-2'>
                      <legend className='px-4 text-gray-500 text-sm'>Confirm Password</legend>
                        <span className='flex items-center'>    
                          <BiPhone className='text-gray-400' />
                          <input className='outline-none py-1 px-3' type="text" placeholder='Confirm Password' />
                        </span>
                      </fieldset> 
                   </form>

                   <button className='p-3 border w-[80%] bg-mainColor font-semibold flex items-center justify-center mx-auto'>Continue</button>
                </div>
            </div>
        </div>
        <div className='bg-black/70 lg:hidden h-full w-full absolute top-0 left-0'/>
    </div>
  ) 
}

export default Newprofile

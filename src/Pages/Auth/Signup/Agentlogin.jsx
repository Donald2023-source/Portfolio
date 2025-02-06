import React from 'react'
import img1 from '../../../assets/image 4.png'
import logo from '../../../assets/logo.jpg'
import { BiPhone } from 'react-icons/bi'
const Agentlogin = () => {
  return (
    <div className='w-full h-screen overflow-hidden'>
      <div className='w-full relative h-full'>
        <img className='w-full object-cover h-full' src={img1} alt='Bg img' />
      </div>

        <div className='lg:w-[45%] md:w-[70%] w-[88%] lg:absolute left-0 right-0 absolute h-full flex flex-col items-center justify-center px-1 top-0 z-50 mx-auto overflow-hidden'>
            <div className='lg:w-[80%] w-full shadow-lg justify-center bg-white lg:mx-auto px-4 rounded-lg py-5 md:py-8 flex flex-col gap-10 items-center'>
                <div className='flex flex-col gap-2'>
                    <img className='h-10' src={logo} alt='logo'/>
                    <h2 className='font-semibold text-2xl'>Agent Login</h2>

                </div>

                <div className='w-full flex flex-col items-center'>
                    <form className='w-[90%] flex flex-col gap-6' action="">
                        <fieldset className='flex flex-col rounded-lg relative border px-2 pb-2'>
                            <legend className='px-4 text-gray-500 text-sm'>Agent ID</legend>
                                <span className='flex items-center'>    
                                    <BiPhone className='text-gray-400' />
                                    <input className='outline-none  px-3' type="text" placeholder='Enter your Agent ID' />
                                </span>
                        </fieldset>

                        <fieldset className='flex flex-col rounded-lg relative border px-2 pb-2'>
                            <legend className='px-4 text-gray-500 text-sm'>Password</legend>
                                <span className='flex items-center'>    
                                    <BiPhone className='text-gray-400' />
                                    <input className='outline-none  px-3' type="text" placeholder='Enter your password' />
                                </span>
                        </fieldset>

                        <div className='flex items-center justify-between'>
                            <fieldset className='flex gap-2'>
                                <input type="checkbox" />
                                <p>Remeber Me</p>
                            </fieldset>

                            <p className='text-myGreen cursor-pointer py-4'>Forgot ID or Password</p>
                            
                        </div>
                    </form>

                    <button className='p-3 border my-5 w-[80%] bg-mainColor font-semibold flex items-center justify-center mx-auto'>Continue</button>

                </div>
            </div>
        </div> 
    </div>
  )
}

export default Agentlogin

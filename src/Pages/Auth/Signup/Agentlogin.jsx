import React from 'react'
import img1 from '../../../assets/image 4.png'
import logo from '../../../assets/logo.jpg'
import { BiPhone } from 'react-icons/bi'
const Agentlogin = () => {
  return (
    <div className='w-full'>
      <div className='w-full relative'>
        <img className='w-full object-cover' src={img1} alt='Bg img' />
      </div>

        <div className='lg:w-[40%] md:w-[70%] w-[88%] lg:absolute left-0 right-0 absolute h-full flex flex-col items-center justify-center px-1 top-0 z-50 mx-auto'>
            <div className='lg:w-[80%] w-full shadow-lg justify-center bg-white lg:mx-auto px-4 rounded-lg py-5 md:py-8 flex flex-col gap-8 items-center'>
                <div className='flex flex-col gap-2'>
                    <img className='h-10' src={logo} alt='logo'/>
                    <h2 className='font-semibold text-2xl'>Set Up Your Profile</h2>
                    <p>The Info needs to be accurate</p>   
                </div>

                <div className='w-full flex flex-col items-center'>
                    <form className='w-[90%] flex flex-col gap-5' action="">
                        <fieldset className='flex flex-col rounded-lg relative border px-2 pb-2'>
                            <legend className='px-4 text-gray-500 text-sm'>Full Name</legend>
                                <span className='flex items-center'>    
                                    <BiPhone className='text-gray-400' />
                                    <input className='outline-none  px-3' type="text" placeholder='Enter your full name' />
                                </span>
                        </fieldset>

                        <fieldset className='flex flex-col rounded-lg relative border px-2 pb-2'>
                            <legend className='px-4 text-gray-500 text-sm'>Full Name</legend>
                                <span className='flex items-center'>    
                                    <BiPhone className='text-gray-400' />
                                    <input className='outline-none  px-3' type="text" placeholder='Enter your full name' />
                                </span>
                        </fieldset>

                        <div>
                            <fieldset>
                                <input type="checkbox" />
                                <p>Remeber Me</p>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Agentlogin

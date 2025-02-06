import React from 'react'
import img1 from '../../../assets/image 4.png'
import logo from '../../../assets/logo.jpg'
const Agentlogin = () => {
  return (
    <div className='w-full'>
      <div className='w-full relative'>
        <img className='w-full object-cover' src={img1} alt='Bg img' />
      </div>

        <div className='lg:w-[60%] md:w-[70%] w-[88%] lg:absolute left-0 right-0 absolute h-full flex flex-col items-center justify-center px-1 top-0 z-50 mx-auto'>
            <div className='lg:w-[80%] w-full shadow-lg justify-center bg-white lg:mx-auto px-4 rounded-lg py-5 md:py-8 flex flex-col gap-8 items-center'>
                <div className='flex flex-col gap-2'>
                    <img className='h-10' src={logo} alt='logo'/>
                    <h2 className='font-semibold text-2xl'>Set Up Your Profile</h2>
                    <p>The Info needs to be accurate</p>   
                </div>

                <div className='w-full flex flex-col items-center'>
                    <form className='w-[50%]' action="">
                        <fieldset className='border p-2 rounded-lg'>
                            <legend className='mx-3 px-1'>Agent Id</legend>
                            <input className='h-full flex items-center justify-center w-full outline-none' type="text" />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Agentlogin

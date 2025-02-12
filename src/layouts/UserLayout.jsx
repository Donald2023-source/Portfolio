import React, { useState } from 'react'
import Aside from '../Components/Aside'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
const userLayout = ( {children} ) => {
    const [nav, setNav] = useState(false)
  return (
    <div className='flex relative items-center container bg'>
        <span className={nav ? 'md:-translate-x-0 transition duration-300 w-full absolute z-20 top-0' : '-translate-x-96 lg:-translate-x-0 w-full absolute top-0 transition duration-300'}>
            <Aside/>
        </span>

        <span onClick={() => setNav(!nav)} className='text-lg lg:hidden cursor-pointer absolute top-0 bottom-0 z-50 left-[95%]'>
            <HiOutlineMenuAlt2 />
       </span>

       <div onClick={() =>setNav(!nav)} className='w-screen lg:ml-[26%] px-1 lg:w-[85%] relative'>
            {children}
       </div>
    </div>
  )
}

export default userLayout
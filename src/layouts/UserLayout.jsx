import React, { useState } from 'react'
import Aside from '../Components/Aside'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
const userLayout = ( {children} ) => {
    const [nav, setNav] = useState(false)
  return (
    <div className='flex relative items-center container'>
        <span className={nav ? '' : '-translate-x-32 '}>
            <Aside/>
        </span>

        <span className='text-lg lg:hidden absolute top-2 z-50 left-[95%]'>
            <HiOutlineMenuAlt2 />
       </span>

       <div onClick={() =>setNav(!nav)} className='w-screen lg:ml-[20%] px-3 lg:w-[80%] relative'>
            {children}
       </div>
    </div>
  )
}

export default userLayout
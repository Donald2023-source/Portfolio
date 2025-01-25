import React from 'react'
import aside from '../../../Components/Aside'
import Aside from '../../../Components/Aside'
import img1 from '../../../assets/Frame 1147.png'
import logo from '../../../assets/logo.jpg'
import { BiPhone } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const PhoneNumber = () => {
  return (
    <div className='w-full h-screen flex items-center gap-3'>
        <div className='w-1/2 h-full border' >
            <img className='h-full object-cover w-full' src={img1} alt='sign up img'/>
        </div>

        <div className='w-1/2'>
            <div>
                <img className='h-10' src={logo} alt='logo'/>
                <h2 className='font-semibold text-2xl'>Hello! Welcome</h2>
                <p>First Add your Phone Number</p>   

                <div>
                   <form action="">
                      <fieldset className='flex flex-col'>
                        <label htmlFor="">Mobile Number</label>
                        <span>
                          <BiPhone />
                          <input className='border py-2 px-3' type="text" placeholder='Enter your mobile number' />
                        </span>
                      </fieldset>
                   </form>

                   <p>By continuing, you confirm ownership of this phone number and agree to receive automated texts to verify it. Standard message and data rates may apply.</p>

                   <button>Continue</button>
                   <p>Already Have an Account? <Link>Login</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PhoneNumber

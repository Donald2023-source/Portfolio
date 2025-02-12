import React from 'react'
import { FaEye } from 'react-icons/fa'
import Naira from '../assets/naira.png'
const BalanceCard = () => {
  return (
    <div className='border w-[30%] rounded-lg p-5 flex flex-col space-y-5'>
      <div className='flex items-center justify-between'>
        <h2>Current Balance</h2>
          <FaEye color='gray' />
      </div>

    <div className='flex items-center gap-3'>
      <img className='h-6' src={Naira} alt="" />
      <p className='font-bold text-2xl'>20,000</p>
    </div>

    </div>
  )
}

export default BalanceCard

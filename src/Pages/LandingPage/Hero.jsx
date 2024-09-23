import Arrowleft from '../../assets/Group (3).png'
import Arrowright from '../../assets/Group (4).png'
import user1 from '../../assets/Frame 1073.png'
import user2 from '../../assets/Frame 1099.png'
import user3 from '../../assets/Frame 1099(1).png'
import square from '../../assets/Group (1).png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='relative z-20 top-12'>
        <motion.div
        animate={{x: [0, -10, 0], opacity:[1, 0.7, 1], y: [0, -5, 0]}}
        transition={{
            duration: 2,
            repeat: Infinity, 
            repeatType: 'reverse',
            ease: 'easeInOut'
        }}
         className='flex justify-between py-5 mx-auto  lg:w-[45%]'>
            <img className='blur-sm' src={Arrowleft} alt="" />
            <img className='blur-sm' src={Arrowright} alt="" />
        </motion.div>

        <div className='lg:w-[45%] -mt-32 mx-auto flex flex-col items-center gap-4'>
            <h2 className='font-medium lg:text-[4rem] lg:w-[100%] text-3xl w-[90%]e leading-[3rem] lg:leading-[4.5rem] text-center'>Revolutionalize Your Dues Payment With Keke-Pay</h2>
            <p className='text-gray-500 text-lg'>Streamlined, Efficient and Accessible</p>

            <motion.button
            initial={{x: -500}} 
            animate={{x: 0}}
            transition={{duration: 1}}
            whileHover={{scale: 1.02}}
            className='lg:py-3 py-4 px-7 lg:px-12 font-bold bg-mainColor'>Join Now</motion.button>

            <div className='flex lg:flex-row flex-col items-center gap-3'>
                <span className='flex'>
                    <img className='lg:h-8 h-8' src={user1} alt="" />
                    <img className='lg:h-8 h-8' src={user2} alt="" />
                    <img className='lg:h-8 h-8' src={user3} alt="" />
                </span>

                <h2 className='font-medium text-center lg:text-lg text-myGreen'>Tired of the payment hassle? Join 2000+ drivers and pay easy!</h2>
            </div>
                <motion.img
                  animate={{y: [0, -15, 0], opacity:[1, 0.9, 1]}}
                  transition={{
                      duration: 2,
                      repeat: Infinity, 
                      repeatType: 'reverse',
                      ease: 'easeInOut'
                  }}
                 className='absolute blur-md z-50 top-[80%] lg:top-[55%] left-[15%]' 
                 src={square} alt="" />
        </div>
    </div>
  )
}

export default Hero
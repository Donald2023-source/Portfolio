import logo from '../assets/logo.jpg'
import twitter from '../assets/Frame 1175.png'
import facebook from '../assets/Frame 1173.png'
import instagram from '../assets/Frame 1174.png'
import { motion } from 'framer-motion'
const Footer = () => {
    return (
        <>
        <motion.div
         whileInView={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: 100 }}
         transition={{ duration: 0.8, delay: 0.4 }}
        className='flex flex-col justify-center items-center gap-8 lg:text-md text-xs py-5'>
            <img className='h-8 lg:h-12' src={logo} alt="" />

                <ul className='flex gap-4 lg:gap-20 font-semibold'>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>FAQ</li>
                    <li>SUPPORT</li>
                    <li>CONTACT US</li>
                </ul>

                    <span className='flex gap-10'>
                        <img src={twitter} alt="" />
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                    </span>

                    <h2 className='p-2 w-[100%] text-center bg-myGreen text-white font-semibold'>All rights reserved</h2>
        </motion.div>
        </>
    )
}
export default Footer
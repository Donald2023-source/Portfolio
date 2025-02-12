import { useState } from 'react'
import Quotes from '../../assets/Vector (5).png'
import arrow from '../../assets/Frame 1112.png'
import { testimonials } from '../../data/data'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Testimonials = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
        
        const handleNext = () => {
            if(currentIndex < testimonials.length -2){
                setCurrentIndex(currentIndex + 2)
            }
        };

  return (
    <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 0.8, delay: 0.4 }}>
        <div>
            <h2 className='font-semibold text-3xl lg:text-5xl w-[90%] leading-[3rem] lg:w-[45%] lg:leading-[4rem] text-center mx-auto py-8 ' >Don’t take our word for it. Over 2000 drivers trust us.</h2>

        <div className='flex lg:flex-row flex-col items-center relative inset-0 '>
            <div className='flex lg:flex-row flex-col items-center mx-auto justify-center gap-10'>
                {testimonials.slice(currentIndex, currentIndex + 2).map((item)=> (
                    <div  className='border bg-white shadow-lg w-[90%] mx-auto lg:w-[40%] p-5 flex flex-col gap-2 items-center' key={item.id}>
                        <img src={Quotes} alt="" />
                        <p className='lg:text-sm text-xs text-center leading-[1.5rem]'>{item.text}</p>
                        <span className='flex'>
                            <img className='h-5' src={item.star} alt="" />
                            <img className='h-5' src={item.star} alt="" />
                            <img className='h-5' src={item.star} alt="" />
                            <img className='h-5' src={item.star} alt="" />
                            <img className='h-5' src={item.star} alt="" />
                        </span>
                        <img className='h-12' src={item.profileImg} alt="" />
                        <h4 className='font-semibold'>{item.name}</h4>
                        <p>{item.role}</p>
                    </div>
                ))}
            </div>
            <img onClick={handleNext} className='lg:absolute lg:my-0 my-5 lg:h-10 h-8 left-[90%] lg:left-[95%] cursor-pointer' src={arrow} alt="" />
        </div>
        </div>

        <div className='flex lg:gap-20 gap-5 justify-center items-center py-10'>
            <h3 className='font-semibold lg:text-xl'>Want to begin?</h3>
            <button className='py-2 px-10 text-white border bg-myGreen'><Link to={'/auth/signup'}>Get Started</Link></button>
        </div>
    </motion.div>
  )
}

export default Testimonials
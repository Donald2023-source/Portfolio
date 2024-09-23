import { FaMinus, FaPlus } from 'react-icons/fa'
import img from '../../assets/Woman and man in the city are standing next to big question mark looking at smartphones.png'
import { FAQs } from '../../data/data'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Faq = () => {
    const [openFaq, setOpenFaq] = useState(null); // Track the ID of the open FAQ

    const handleToggle = (id) => {
        setOpenFaq(prevId => (prevId === id ? null : id)); // Toggle open/close by ID
    }

    return (
        <>
            <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='flex lg:flex-row flex-col items-center justify-center gap-40'>
                <img className='h-[50%] shadow-2xl' src={img} alt="" />

                <div className='flex text-center lg:text-left  flex-col gap-2'>
                    <h2 className='text-3xl font-semibold'>Frequently Asked Questions</h2>
                    <p className='lg:w-[60%] lg:text-md text-sm  py-3 text-gray-400'>We understand you might have questions. Here are some answers to some common questions</p>

                    <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className='shadow-xl rounded-lg w-[90%] mx-auto lg:mx-0 lg:w-[80%] p-7'>
                        {FAQs.map((item) => (
                            <div key={item.id}>
                                <div className='flex justify-between items-center'>
                                    <h4 className='md:text-lg font-semibold text-sm text-left'>{item.question}</h4>

                                    {openFaq ? <FaMinus onClick={() => setOpenFaq(false)} color='orange' size={20}/> : <FaPlus className='cursor-pointer' onClick={() => handleToggle(item.id)} color='orange' size={20} />}
                                    
                                </div>
                                <p className={openFaq === item.id ? 'py-5 text-gray-400 lg:text-md text-sm text-left translate-x-0 transition duration-500 ease-in-out' : '-translate-x-[500%] text-left transition ease-in-out duration-500'}>
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default Faq;

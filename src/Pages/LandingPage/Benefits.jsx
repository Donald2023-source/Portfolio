
import card1 from '../../assets/Vector (2).png';
import card2 from '../../assets/Vector (3).png';
import card3 from '../../assets/Group (5).png';
import keke from '../../assets/Screenshot 2023-10-19 085528 1.png';
import { motion } from 'framer-motion';
import bgStar1 from '../../assets/bgStar1.png'
import bgStar2 from '../../assets/bgStar2.png'

const Benefits = () => {
  return (
    <div className='py-20'>
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          <span className='flex flex-col text-center mx-auto w-[90%] lg:w-[50%] py-3 gap-4 my-3'>
            <h2 className='font-semibold text-3xl'>Discover the Benefits</h2>
            <p className='lg:text-xl text-md text-gray-400'>
              We offer a host of powerful features designed to revolutionize the
              way you manage your daily dues.
            </p>
          </span>
        </motion.div>

      <section className='w-[100%] flex lg:flex-row flex-col items-center gap-9 lg:justify-between lg:px-24'>
          <motion.div
            className='rounded-xl shadow-xl lg:w-[30%] h-fit p-5 w-[80%] lg:p-4 flex flex-col gap-5 items-center text-center'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <img src={card1} alt='' />
            <h4 className='font-semibold text-xl'>Accessible for All</h4>
            <p className="text-sm lg:text-md">
              Whether you own a smartphone or not, we've got you covered. We offer
              text message payments, making it accessible to everyone.
            </p>
          </motion.div>

        <motion.div
          className='rounded-xl shadow-xl lg:w-[30%] h-fit p-5 w-[80%] lg:p-4 flex flex-col gap-5 items-center text-center'
        >
          <img src={card3} alt='' />
          <h4 className='font-semibold text-xl'>Effortless Dues Management</h4>
          <motion.p   
          className="text-sm lg:text-md"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
           With our automated deduction system, you can sit back and relax while the app handles your payments on time, every time.
          </motion.p>
        </motion.div>
      </section>

      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8 }}
      >
        <img
          className='border-dashed mx-auto border-4 rounded-[25rem] py-20 mt-5 px-12 lg:py-32 lg:px-20 lg:-mt-36'
          src={keke}
          alt=''
        />
      </motion.div>

      <motion.div
        className='rounded-xl shadow-xl lg:w-[30%] h-fit mx-auto mt-9 lg:mt-0 p-5 w-[80%] lg:p-4 flex flex-col gap-5 items-center text-center'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <img src={card2} alt='' />
        <h4 className='font-semibold text-xl'>Streamlined Verification</h4>
        <p className="text-sm lg:text-md">
        We simplify the enforcement process. Say goodbye to compliance hassles and hello to smooth, hassle-free payments.
        </p>
      </motion.div>
      <img className='absolute -z-20 top-[130rem]' src={bgStar2} alt="" />
      <img className='absolute z-20 top-[65rem] left-[60%] lg:left-[76%] blur-md h-52 lg:h-[69%] right-0' src={bgStar1} alt="" />
    </div>
  );
};

export default Benefits;

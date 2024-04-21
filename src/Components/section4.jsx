import React from 'react';
import Image from 'next/image';

const Section4 = () => {
  return (
    <div className='w-full min-h-screen bg-[#FDFAF4] flex justify-center items-center'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center relative mb-20'>
        <div className='lg:w-1/2 lg:mr-8 relative z-10 border-2 border-yellow-600 p-8 lg:p-16 shadow-lg backdrop-blur-sm bg-white/30 rounded-lg flex flex-col justify-center items-center lg:items-start'>
          <h1 className='text-3xl lg:text-5xl font-bold text-[#03234D] mb-4 lg:mb-6 text-center lg:text-left'>Our Services</h1>
          <p className='text-[#03234D] mt-2 lg:mt-4 lg:text-xl text-center lg:text-left max-w-lg'>
            We provide creative and inspired financial planning, retirement planning, and planning for pre-retirees, retirees, federal employees, and business owners throughout D.C., Maryland, New York, and Virginia.
          </p>
          <div className='mt-6 lg:mt-8'>
            <button className='bg-[#03234D] text-white font-semibold py-3 px-6 shadow-lg hover:bg-opacity-90 focus:outline-none transition duration-300 rounded-md'>
              GET STARTED
            </button>
          </div>
        </div>
        <div className='absolute top-0 right-0 bottom-0 left-0 z-0 lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center'>
          <Image 
            src="/images/finance.jpg"
            alt="Financial Planning"
            width={600}
            height={100}
            className='rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;


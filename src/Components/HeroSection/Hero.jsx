/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='h-[95vh] lg:p-0 p-10 top-0 mt-0  lg:h-[96vh] w-full lg:w-full md:h-[85vh] z-0 relative lg:flex block lg:flex-row justify-center items-center' style={{ backgroundImage: 'url("/images/nature.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className='relative z-0 lg:w-1/2 flex flex-col lg:px-12 lg:py-10 container'>

        <h1 className='text-5xl lg:text-7xl font-bold lg:mb-20 mb-5 text-white mt-0 md:text-xl'>Value-Based Financial Planning</h1>

        <p className='mt-4 lg:text-2xl text-md text-white'>We provide creative and inspired financial planning, retirement planning, and planning for pre-retirees, retirees, federal employees, and business owners throughout D.C., Maryland, New York, and Virginia.</p>
        <div className="mt-5 mb-5 flex">
          <button-1 className="bg-[#03234d] z-5 text-white font-bold py-4 px-4">
            GET STARTED
          </button-1>
        </div>
      </div>
      
      <div className='lg:w-1/2 lg:flex justify-center z-0 '>
        <div className="w-full lg:max-w-[600px]">
          <Image 
            src="/images/couples.png" 
            alt="logo" 
            width={600} 
            height={100} 
            className="rounded-tr-2xl rounded-bl-2xl shadow-lg lg:h-100 lg:w-full w-full h-90" // Removed fixed width for better responsiveness
          />
        </div>
      </div>

    </div>
  )
}

export default Hero;

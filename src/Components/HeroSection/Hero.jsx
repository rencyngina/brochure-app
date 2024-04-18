import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='h-[95vh] lg:p-12 p-10 lg:h-[100vh] w-full lg:w-full md:h-[85vh] z-0 relative lg:flex block lg:flex-row justify-center items-center' style={{ backgroundImage: 'url("/images/nature.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className='relative z-0 lg:w-1/2 flex flex-col lg:px-12 lg:py-10 container'>

        <h1 className='text-xl lg:text-5xl font-bold lg:mb-20 mb-5 text-white mt-0 md:text-xl'>Value-Based Financial Planning</h1>

        <p className='mt-4 lg:text-xl text-sm text-white'>We provide creative and inspired financial planning, retirement planning, and planning for pre-retirees, retirees, federal employees, and business owners throughout D.C., Maryland, New York, and Virginia.</p>
        <div className="mt-10 mb-10 flex">
          <button-1 className="bg-[#03234d] z-5 text-white font-bold py-4 px-4">
            GET STARTED
          </button-1>
        </div>
      </div>
      
      <div className='lg:w-1/2 lg:flex justify-center z-5 '>
        <div className="w-full lg:max-w-[500px]">
          <Image 
            src="/images/finance.jpg" 
            alt="logo" 
            width={800} 
            height={100} 
            className="rounded-tr-2xl rounded-bl-2xl shadow-lg lg:h-100 lg:w-full w-full" // Removed fixed width for better responsiveness
          />
        </div>
      </div>

    </div>
  )
}

export default Hero;

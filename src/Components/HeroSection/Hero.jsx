import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='h-[65vh] p-12 lg:h-[90vh] md:h-[85vh] z-0 relative flex flex-col lg:flex-row justify-center items-center' style={{ backgroundImage: 'url("/images/nature.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className='w-full  relative z-0  lg:w-1/2 flex flex-col lg:px-12 lg:py-10 container'>

        <h1 className='text-xl lg:text-5xl font-bold mb-20 text-white mt-0 md:text-xl'>Value-Based Financial Planning</h1>

        <p className='mt-4 text-xl text-white'>We provide creative and inspired financial planning, retirement planning, and planning for pre-retirees, retirees, federal employees, and business owners throughout D.C., Maryland, New York, and Virginia.</p>
        <div className="mt-10 flex">
          <button-1 className="bg-[#03234d] z-5 text-white font-bold py-4 px-4">
            GET STARTED
          </button-1>
        </div>
      </div>
      <div className='lg:w-1/2 flex justify-center z-0'>
        <Image src="/images/finance.jpg" alt="logo" width={500} height={300} className="rounded-tr-2xl rounded-bl-2xl shadow-lg" />
      </div>
    </div>
  )
}

export default Hero;


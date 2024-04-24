/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image';

const FloatingObject = () => {
  return (
    <div className='flex justify-center items-center h-[15vh] sm:h-[20vh] bg-[#EEF5FF] lg:p-12 p-6'>
    <div className='flex flex-col sm:flex-row mb-5 sm:mb-15 p-2 gap-4 lg:flex lg:flex-grow lg:justify-center lg:gap-20 bg-[#1e3758] shadow-xl lg:py-3 py-2 lg:px-20 px-5 z-10 lg:mb-20 rounded-lg items-center'>

  <div className='text-center text-white flex flex-col items-center mb-4 sm:mb-0'>
    <Image src="/images/assured1.png" alt="logo" width="100%" height="auto" className="sm:w-10 sm:h-10" />
    <p className="text-xs lg:text-base">Market Friendly</p>
  </div>

  <div className='text-white flex flex-col items-center mb-4 sm:mb-0'>
    <Image src="/images/assured2.png" alt="logo" width="100%" height="auto" className="sm:w-20 sm:h-20" />
    <p className="text-xs lg:text-base">Planned for Success</p>
  </div>

  <div className='text-white flex flex-col items-center mb-4 sm:mb-0'>
    <Image src="/images/assured3.png" alt="logo" width="100%" height="auto" className="sm:w-16 sm:h-20" />
    <p className="text-xs lg:text-base">Retirement Ready</p>
  </div>

  <div className='text-white flex flex-col items-center'>
    <Image src="/images/assured4.png" alt="logo" width="100%" height="auto" className="sm:w-20 sm:h-20" />
    <p className="text-xs lg:text-base">Satisfaction Guaranteed</p>
  </div>

</div>

</div>

  )
}

export default FloatingObject;
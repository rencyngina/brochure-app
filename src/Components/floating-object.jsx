import React from 'react'
import Image from 'next/image';


const FloatingObject = () => {
  return (
    <div className='flex bg-[#EEF5FF] justify-center items-center h-[10vh] lg:p-12 p-6'>
    <div className='flex mb-20 p-6 gap-4 lg:flex lg:flex-grow lg:justify-center lg:gap-20 bg-[#1e3758] shadow-xl lg:py-3 py-2 lg:px-20 px-5 z-10 lg:mb-20 rounded-lg items-center'>

    <div className='text-center text-white flex flex-col items-center mb-4 lg:mb-0'>
      <Image src="/images/assured1.png" alt="logo" width={40} height={40} />
      <p className="text-xs lg:text-base">Market Friendly</p>
    </div>
  
    <div className='text-white flex flex-col items-center mb-4 lg:mb-0'>
      <Image src="/images/assured2.png" alt="logo" width={40} height={40} />
      <p className="text-xs lg:text-base">Planned for Success!</p>
    </div>
  
    <div className='text-white flex flex-col items-center mb-4 lg:mb-0'>
      <Image src="/images/assured3.png" alt="logo" width={30} height={40} />
      <p className="text-xs lg:text-base">Retirement Ready</p>
    </div>
  
    <div className='text-white flex flex-col items-center'>
      <Image src="/images/assured4.png" alt="logo" width={40} height={40} />
      <p className="text-xs lg:text-base">Satisfaction Guaranteed</p>
    </div>
  
  </div>
  
</div>

  )
}

export default FloatingObject;
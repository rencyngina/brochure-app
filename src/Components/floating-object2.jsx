import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FloatingObject2 = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-wite h-[55vh] lg:p-12 p-6 '>
      <div className='bg-white flex mb-60 flex-col z-5 justify-center items-center w-full max-w-screen-lg '>
        <div className='text-xl '>
          <h1 className='text-center text-4xl md:text-5xl mt-8 mb-4 md:mb-4'>Not sure where to start?</h1>
          <p className="text-center">We are here to answer your questions. Contact us today to get started!</p>
          <div className="flex justify-center mt-5">
            <button-1 >
              <span className='text-black'>Contact Us</span>
            </button-1>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Link href="/" passHref>
            <div className=' mt-10'>
              <Image src="/images/badge.png" alt="badge" width={100} height={100} />
            </div>
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default FloatingObject2;

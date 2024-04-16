import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FloatingObject2 = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-yellow-200 h-[40vh]'>
      <div className='bg-blue-400 flex mb-80 flex-col justify-center items-center w-full max-w-screen-lg'>
        <div className='text-xl '>
          <h1 className='text-center text-4xl md:text-5xl mt-8 mb-4 md:mb-4'>Not sure where to start?</h1>
          <p className="text-center">We are here to answer your questions. Contact us today to get started!</p>
          <div className="flex justify-center mt-5">
            <button className="mt-4 font-bold text-white py-3 px-8 bg-[#102e56] hover:bg-yellow-500 transition duration-300">
              <span>Contact Us</span>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Link href="/" passHref>
            <div>
              <Image src="/images/badge.png" alt="badge" width={100} height={100} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloatingObject2;

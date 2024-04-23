import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSpotify, FaPinterest, FaDribbble, FaTelegram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const FloatingObject2 = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-white lg:h-[25vh] h-auto lg:p-12 p-6'>
      <div className='bg-yellow-300 flex mb-5 lg:mb-30 flex-col z-10 justify-center items-center w-full max-w-screen-lg shadow-md'>
        <div className='text-xl'>
          <h1 className='text-center text-lg lg:text-4xl md:text-5xl mt-12 mb-4 md:mb-4'>Not sure where to start?</h1>
          <p className="text-center text-sm lg:text-lg">We are here to answer your questions.
          <br />
           Contact us today to get started!</p>
          <div className="flex justify-center mt-5">
            <button-1 className=''>
              <span className='text-black'>Contact Us</span>
            </button-1>
          </div>
        </div>
        {/*<div className="md:w-1/2 flex justify-center lg:mt-10 mt-5">
          <Link href="/" passHref>
              <Image src="/images/badge.png" alt="badge" width={100} height={100} />
          </Link>
  </div>*/}
        <ul className="example-2">
      <li className="icon-content">
        <a
          data-social="spotify"
          aria-label="Spotify"
          href="https://www.spotify.com/"
        >
          <div className="filled"></div>
          <FaFacebook />
        </a>
        <div className="tooltip">Facebook</div>
      </li>
      <li className="icon-content">
        <a
          data-social="pinterest"
          aria-label="Pinterest"
          href="https://www.pinterest.com/"
        >
          <div className="filled"></div>
          <FaTwitter />
        </a>
        <div className="tooltip">Twitter</div>
      </li>
      <li className="icon-content">
        <a
          data-social="dribbble"
          aria-label="Dribbble"
          href="https://dribbble.com/"
        >
          <div className="filled"></div>
          <FaYoutube />
        </a>
        <div className="tooltip">Youtube</div>
      </li>
      <li className="icon-content">
        <a
          data-social="telegram"
          aria-label="Telegram"
          href="https://telegram.org/"
        >
          <div className="filled"></div>
          <FaTelegram />
        </a>
        <div className="tooltip">Telegram</div>
      </li>
    </ul>
      </div>
    </div>
  );
};

export default FloatingObject2;

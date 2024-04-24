import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

const Foot = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#03234d] w-full">
  <div className="container mx-auto py-3 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col sm:flex-row justify-between items-center text-white text-sm">
      <div className="flex items-center mt-2 mb-3 sm:mb-0">
        <p className="mr-4 hidden sm:block">|</p>
        <Link href="mailto:wendaandroyfordadvocates@example.com">
          <p className="mr-40 lg:mr-4 sm:mr-8 text-xs lg:text-sm">admin@thesovereignwealth.com</p>
        </Link>
      </div>
      <div className="flex items-center mt-2 mb-3 sm:mb-0">
        <p className="lg:mr-4 sm:mr-10 text-xs lg:text-sm">© {currentYear}.Sovereign Wealth Management. All rights reserved</p>
        <p className='sm:ml:8'>Privacy Policy</p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Foot;
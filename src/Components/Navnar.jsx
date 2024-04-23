import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="lg:flex backdrop-blur-sm w-full bg-[#03234d]/95 sticky top-0 z-20  h-[10vh] lg:items-center lg:justify-between px-8 py-4">
      <div>
        <Link href="/" passHref>
          <div className="cursor-pointer ">
            <Image className='' src="/images/Logo.svg" alt="logo" width={150} height={100} />
          </div>
        </Link>
      </div>

      <div className="lg:flex lg:flex-grow hidden text-yellow-300 justify-center gap-10 text-lg">
        <Link href="/" passHref>
          <div
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-bottom cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Home
          </div>
        </Link>
        <Link href="/about">
          <div
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-bottom cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            About
          </div>
        </Link>
        <div className="relative flex items-center">
          <button
            className="dropdown-button text-yellow-300 relative text-xl flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Services <RiArrowDropDownLine />
          </button>
          {isDropdownOpen && (
            <div
              className="dropdown-content absolute text-yellow-300 bg-[#03234d] w-40 shadow-lg py-4 p top-12"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <Link href="/services/overview" passHref>
                <div className="cursor-pointer px-4 py-2 hover:bg-gray-600 hover:text-white">Services Overview</div>
              </Link>
              <Link href="/services/financial-planning" passHref>
                <div className="cursor-pointer px-4 py-2 hover:bg-gray-600 hover:text-white">Financial Planning</div>
              </Link>
              <Link href="/services/risk-management" passHref>
                <div className="cursor-pointer px-4 py-2 hover:bg-gray-600 hover:text-white">Risk Management</div>
              </Link>
              <Link href="/services/investment-planning" passHref>
                <div className="cursor-pointer px-4 py-2 hover:bg-gray-600 hover:text-white">Investment Planning</div>
              </Link>
              <Link href="/services/retirement-planning" passHref>
                <div className="cursor-pointer px-4 py-2 hover:bg-gray-600 hover:text-white">Retirement Planning</div>
              </Link>
            </div>
          )}
        </div>
        <Link href="/articles" passHref>
          <div
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-bottom cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Articles
          </div>
        </Link>
      </div>
      <div className="gap-4 mb-3 lg:flex hidden">
        <button className="mt-4 text-sm text-white py-1 px-5 hover:bg-yellow-500 transition duration-300  border border-yellow-300">
          Client Portal
        </button>
        <a href="mailto:info@royfordlaw.com">
          <button
            className="mt-4 text-white py-2 px-5 hover:bg-[#03234d] bg-yellow-500 transition duration-300  border border-yellow-300"
          >
            Contact Us
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

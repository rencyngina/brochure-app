/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = (e) => {
    const dropdown = document.querySelector(".dropdown-content");
    const dropdownButton = document.querySelector(".dropdown-button");

    if (
      !dropdown.contains(e.relatedTarget) &&
      !dropdownButton.contains(e.relatedTarget)
    ) {
      setIsDropdownOpen(false);
    }
};


  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className={`${scrollNav ? 'backdrop-blur-xl text-black bg-white/20' : 'text-white bg-[#03234D]'} lg:flex lg:justify-between w-full sticky top-0 z-20 h-[15vh] lg:h-[10vh] lg:items-center px-0 lg:py-6 py-4`}>
      <div>
        <Link href="/" passHref>
          <div className="cursor-pointer ">
            <Image
              className=" lg:flex lg:ml-4 ml-4 lg:mr-0 mr-0"
              src="/images/Logo.svg"
              alt="logo"
              width={150}
              height={100}
            />
          </div>
        </Link>
      </div>

      <div className={`lg:flex ${isMobileNavOpen ? "flex" : ""} flex-col lg:flex-row lg:flex-grow lg:items-center lg:gap-10 ${scrollNav ? 'text-black' : 'text-yellow-300'} text-lg`}>
        <div className="flex lg:hidden justify-end mt-0 mr-8">
          <button className="mobile-nav-toggle" onClick={handleMobileNavToggle}>
            <FaBars className="h-6 w-6 text-black " />
          </button>
        </div>
        <div className={`lg:flex lg:flex-grow hidden justify-center gap-10 text-lg ${scrollNav ? 'text-black' : 'text-yellow-300'}`}>
          <Link href="/" passHref>
            <div className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-bottom cursor-pointer">
              Home
            </div>
          </Link>
          <Link href="/about" passHref>
            <div className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-bottom cursor-pointer">
              About
            </div>
          </Link>
          <div className={`relative flex items-center ${scrollNav ? 'text-black' : 'text-yellow-300'}`}>
        <button
          className={`dropdown-button relative text-xl flex items-center ${scrollNav ? 'text-black' : 'text-yellow-300'}`}
          onClick={toggleDropdown}
        >
          Services <RiArrowDropDownLine />
        </button>
            {isDropdownOpen && (
              <div className="dropdown-content absolute text-yellow-300 bg-[#03234d] w-60 shadow-lg py-4 p top-14">
                <Link href="/overview" passHref>
                  <div className="cursor-pointer px-4 py-2 hover:bg-gray-600 hover:text-white">
                    Services Overview
                  </div>
                </Link>
                <Link href="/financial" passHref>
                  <div className="cursor-pointer px-4 py-2 hover:bg-gray-600 hover:text-white">
                    Financial Planning
                  </div>
                </Link>
                <Link href="/risk" passHref>
                  <div className="cursor-pointer px-4 py-2 hover:bg-gray-600 hover:text-white">
                    Risk Management
                  </div>
                </Link>
                <Link href="/investment" passHref>
                  <div className="cursor-pointer px-4 py-2 hover:bg-gray-600 hover:text-white">
                    Investment Planning
                  </div>
                </Link>
                <Link href="/retirement" passHref>
                  <div className="cursor-pointer px-4 py-2 hover:bg-gray-600 hover:text-white">
                    Retirement Planning
                  </div>
                </Link>
              </div>
            )}
          </div>
          <Link href="/articles" passHref>
            <div className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-bottom cursor-pointer">
              Articles
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex lg:gap-3 gap-2 lg:mb-10 mt-6 lg:mr-8">
      <div className="flex ">
      <button className="mt-4 text-md ${scrollNav ? 'text-black' : 'text-yellow-300'} py-2 px-5 hover:bg-yellow-500 transition duration-300 border border-yellow-300 flex">
        <div className="" >
              Client Portal
            </div>
            <IoLogInOutline style={{ fontSize: '24px', marginLeft: '5px'}} />
      </button>
      </div>
        <Link href="/contact">
          <button className="mt-4 ${scrollNav ? 'text-black' : 'text-yellow-300'} py-2 px-5 hover:bg-[#03234d] bg-yellow-500 transition duration-300 ">
            Contact Us
          </button>
        </Link>
      </div>
      <div className={`block lg:hidden gap-2 lg:mb-10 mt-6 w-full ${isMobileNavOpen ? "flex lg:hidden flex-col" : "hidden"}`}>
        <nav className=" bg-blue-900 flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center justify-center">
            <li>
              <button className="mt-4 text-sm text-white py-3 px-5 hover:bg-yellow-500 transition duration-300   w-full max-w-xs">
                Client Portal
              </button>
            </li>
            <li>
              <Link href="contact">
                <button className="mt-4 text-white py-2 px-5 hover:bg-yellow-500 transition duration-300  w-full max-w-xs">
                  Contact Us
                </button>
              </Link>
            </li>
            <li>
            <Link href="#">
      <button
        className="mt-4 text-white flex items-center justify-between py-2 px-5 hover:bg-yellow-500 transition duration-300  w-full max-w-xs"
        onClick={handleDropdownToggle}
      >
        <span>Services</span>
        <RiArrowDropDownLine className="text-xl" />
        {isDropdownOpen && (
          <div className="absolute top-full left-0 bg-[#03234d] text-yellow-300 shadow-lg p-4 w-48">
            <ul className="text-white">
              <li>Services Overview</li>
              <li>Financial Planning</li>
              <li>Risk Management</li>
              <li>Investment Planning</li>
            </ul>
          </div>
        )}
      </button>
    </Link>
            </li>
            <li>
              <Link href="/about">
                <button className="mt-4 text-white py-2 px-6 hover:bg-yellow-500 transition duration-300 border border-yellow-300 w-full max-w-xs">
                  About Us
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
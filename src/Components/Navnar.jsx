import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
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
    <nav className="lg:flex lg:justify-between backdrop-blur-sm w-full bg-[#03234d]/95 sticky top-0 z-20 h-[10vh] lg:items-center px-8 py-4">
      <div>
        <Link href="/" passHref>
          <div className="cursor-pointer ">
            <Image
              className="lg:flex hidden"
              src="/images/Logo.svg"
              alt="logo"
              width={150}
              height={100}
            />
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
        </div>
        <div className="lg:flex lg:flex-grow hidden text-yellow-300 justify-center gap-10 text-lg">
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
          <div className="relative flex items-center">
            <button
              className="dropdown-button text-yellow-300 relative text-xl flex items-center"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              Services <RiArrowDropDownLine />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content absolute text-yellow-300 bg-[#03234d] w-60 shadow-lg py-4 p top-14">
                <Link href="/services/overview" passHref>
                  <div className="cursor-pointer px-4 py-2 hover:bg-gray-600 hover:text-white">
                    Services Overview
                  </div>
                </Link>
                <Link href="/services/financial-planning" passHref>
                  <div className="cursor-pointer px-4 py-2 hover:bg-gray-600 hover:text-white">
                    Financial Planning
                  </div>
                </Link>
                <Link href="/services/risk-management" passHref>
                  <div className="cursor-pointer px-4 py-2 hover:bg-gray-600 hover:text-white">
                    Risk Management
                  </div>
                </Link>
                <Link href="/services/investment-planning" passHref>
                  <div className="cursor-pointer px-4 py-2 hover:bg-gray-600 hover:text-white">
                    Investment Planning
                  </div>
                </Link>
                <Link href="/services/retirement-planning" passHref>
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
      <div className="hidden lg:flex lg:gap-4 gap-2 lg:mb-10 mt-6">
      <div className="flex ">
      <button className="mt-4 text-md text-white py-2 px-5 hover:bg-yellow-500 transition duration-300 border border-yellow-300 flex">
        <div className="" >
              Client Portal
            </div>
            <IoLogInOutline style={{ fontSize: '24px', marginLeft: '5px'}} />
      </button>
      </div>
        <a href="mailto:info@royfordlaw.com">
          <button className="mt-4 text-white py-2 px-5 hover:bg-[#03234d] bg-yellow-500 transition duration-300 border border-yellow-300">
            Contact Us
          </button>
        </a>
      </div>
      <div className={`block lg:hidden gap-2 lg:mb-10 mt-6 w-full ${isMobileNavOpen ? "flex lg:hidden flex-col" : "hidden"}`} style={{ backgroundColor: "#03234d" }}>
        <nav className="bg-[#03234d] flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center justify-center">
            <li>
              <button className="mt-4 text-sm text-white py-2 px-5 hover:bg-yellow-500 transition duration-300 border border-yellow-300 w-full max-w-xs">
                Client Portal
              </button>
            </li>
            <li>
              <a href="#">
                <button className="mt-4 text-white py-2 px-5 hover:bg-yellow-500 transition duration-300 border border-yellow-300 w-full max-w-xs">
                  Contact Us
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className="mt-4 text-white py-2 px-5 hover:bg-yellow-500 transition duration-300 border border-yellow-300 w-full max-w-xs">
                  About Us
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className="mt-4 text-white flex items-center justify-between py-2 px-5 hover:bg-yellow-500 transition duration-300 border border-yellow-300 w-full max-w-xs">
                  <span>Services</span>
                  <RiArrowDropDownLine className="text-xl" />
                </button>
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-4 text-white text-sm text-center lg:hidden mb-10">
          <p>&copy; 2023 Royford Law</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

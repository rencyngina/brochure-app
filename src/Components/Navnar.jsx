/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { IoLogInOutline, IoClose  } from "react-icons/io5";


const Navbar = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const dropdownRef = useRef(null);

  const handleScroll = () => {
    setScrollNav(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
      setIsMobileDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

 const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen((prev) => !prev);
  };

  return (
    <nav className={`${scrollNav ? 'backdrop-blur-xl text-black bg-white/20' : 'text-white bg-[#03234D]'} lg:flex lg:justify-between lg:w-full sticky top-0 z-20 h-[10vh] lg:h-[10vh] lg:items-center px-0 lg:py-6 py-4`}>
      <div>
        <Link href="#" passHref>
          <div className="cursor-pointer">
            <Image
              className="hidden lg:flex lg:ml-20 ml-4 lg:mr-0 mr-0"
              src="/images/Logo.svg"
              alt="logo"
              width={160}
              height={150}
              loading="lazy"
            />
          </div>
        </Link>
      </div>

      <div className={`lg:flex ${isMobileNavOpen ? "flex" : ""} flex-col lg:flex-row lg:flex-grow lg:items-center lg:gap-10 ${scrollNav ? 'text-black' : 'text-yellow-300'} text-lg`}>
        <div className="flex lg:hidden">
      <button className="mobile-nav-toggle ml-5 mt-1 mb-4" onClick={handleMobileNavToggle}>
        {isMobileNavOpen ? <IoClose className="h-7 w-7 text-black" /> : <FaBars className="h-7 w-7 text-black" />}
      </button>
      <Link href="#" passHref>
        <div className="cursor-pointer mt-0 ml-8">
          <Image
            src="/images/Logo.svg"
            alt="logo"
            width={150}
            height={120}
            loading="lazy"
          />
        </div>
      </Link>
    </div>
        <div className={`lg:flex lg:flex-grow hidden justify-center gap-10 text-lg ${scrollNav ? 'text-black' : 'text-yellow-300'}`}>
          <Link href="/" passHref>
            <div className={`relative text-xl w-fit block cursor-pointer ${router.pathname === "/" ? "text-yellow-500" : ""}`}>
              Home
            </div>
          </Link>
          <Link href="/about" passHref>
            <div className={`relative text-xl w-fit block cursor-pointer ${router.pathname === "/about" ? "text-yellow-500" : ""}`}>
              About
            </div>
          </Link>
          <div ref={dropdownRef} className={`relative flex items-center ${scrollNav ? 'text-black' : 'text-yellow-300'}`}>
            <button
              className={`dropdown-button relative text-xl flex items-center ${scrollNav ? 'text-black' : 'text-yellow-300'}`}
              onClick={toggleDropdown}
            >
              Services <RiArrowDropDownLine className="text-3xl" />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content absolute text-yellow-300 bg-[#03234d] w-60 shadow-lg py-4 top-14">
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
            <div className={`relative text-xl w-fit block cursor-pointer ${router.pathname === "/articles" ? "text-yellow-500" : ""}`}>
              Articles
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex lg:gap-3 gap-2 lg:mb-10 mt-6 lg:mr-8">
        <div className="flex">
        <Link href="/portal">
        <button className={`mt-4 text-md ${scrollNav ? 'text-black' : 'text-yellow-300'} py-2 px-5 hover:bg-yellow-500 transition duration-300 border border-yellow-300 flex`}>
          <div>Client Portal</div>
          <IoLogInOutline style={{ fontSize: '24px', marginLeft: '5px' }} />
        </button>
        </Link>
        </div>
        <Link href="/contact">
          <button className={`mt-4 ${scrollNav ? 'text-black' : 'text-yellow-300'} py-2 px-5 hover:bg-[#03234d] bg-yellow-500 transition duration-300 border border-yellow-300`}>
            Contact Us
          </button>
        </Link>
      </div>
      <div className={`block lg:hidden gap-2 lg:mb-10 rounded-sm mt-2 left-[-2.5rem] w-50 p-4 ${isMobileNavOpen ? "flex lg:hidden flex-col" : "hidden"}`}>
        <nav className="bg-[#03234d]/90 flex flex-col left-[-2.5rem]  w-60 py-2 rounded-3xl ">
          <ul className="flex flex-col items-center justify-center w-full">
            <li>
              <Link href="/">
                <div className={`mt-4 text-sm text-white py-2 rounded-xl px-8 hover:bg-yellow-500 transition duration-300 border border-yellow-300 w-full text-center ${router.pathname === "/" ? "text-yellow-500" : ""}`}>
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className={`mt-4 text-sm text-white py-2 px-8 rounded-xl hover:bg-yellow-500 transition duration-300 border border-yellow-300 w-full text-center ${router.pathname === "/about" ? "text-yellow-500" : ""}`}>
                  About
                </div>
              </Link>
            </li>
            <li>
          {/* mobile sevices drop */}
              <div className={`relative mt-4 text-sm text-white py-2 rounded-xl px-5  border border-yellow-300 w-full text-center flex items-center justify-center cursor-pointer`}>
                Services <RiArrowDropDownLine className="text-2xl" onClick={toggleMobileDropdown}/>
              </div>
              {isMobileDropdownOpen && (
                <div className="bg-[#03234d] w-32 text-center z-50 top-16">
                  <Link href="/overview" passHref>
                    <div className="cursor-pointer py-2 hover:bg-gray-600 hover:text-white">
                      Services Overview
                    </div>
                  </Link>
                  <Link href="/financial" passHref>
                    <div className="cursor-pointer py-2 hover:bg-gray-600 hover:text-white">
                      Financial Planning
                    </div>
                  </Link>
                  <Link href="/risk" passHref>
                    <div className="cursor-pointer py-2 hover:bg-gray-600 hover:text-white">
                      Risk Management
                    </div>
                  </Link>
                  <Link href="/investment" passHref>
                    <div className="cursor-pointer py-2 hover:bg-gray-600 hover:text-white">
                      Investment Planning
                    </div>
                  </Link>
                  <Link href="/retirement" passHref>
                    <div className="cursor-pointer py-2 hover:bg-gray-600 hover:text-white">
                      Retirement Planning
                    </div>
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link href="/articles">
                <div className={`mt-4 text-sm text-white py-2 px-8 hover:bg-yellow-500 rounded-xl stransition duration-300 border border-yellow-300 w-full text-center ${router.pathname === "/articles" ? "text-yellow-500" : ""}`}>
                  Articles
                </div>
              </Link>
            </li>
            <li>
            <Link href="/portal">
            <button className="mt-4 text-sm text-white py-2 px-5 hover:bg-yellow-500 rounded-xl transition duration-300 border border-yellow-300 w-full text-center">
              Client Portal
            </button>
            </Link>
            </li>
            <li>
              <Link href="/contact">
                <button className={`mt-4 text-sm text-white py-2 px-6 hover:bg-yellow-500 rounded-xl transition duration-300 border border-yellow-300 w-full text-center ${router.pathname === "/contact" ? "text-yellow-500" : ""}`}>
                  Contact Us
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
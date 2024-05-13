import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrollNav(window.scrollY > 0);
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

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  return (
    <>
      <div className={`menu-push ${menuOpen ? 'menu-push-open' : ''}`}></div>
      <nav className={`sticky top-0 z-20 flex justify-between items-center w-full h-[15vh] lg:h-[10vh] px-8 py-4 lg:px-12 ${scrollNav ? 'bg-white/20 text-black' : 'bg-[#03234D] text-white'}`}>
        <div className="flex items-center">
          <div className="hidden lg:flex">
            <Menu
              isOpen={isDropdownOpen}
              width={"20%"}
              right={false}
              onStateChange={handleStateChange}
              customBurgerIcon={<FaBars className="h-8 w-8 text-black" />}
              disableAutoFocus
              noOverlay
              styles={{
                bmMenu: { transition: "transform 0.3s" },
                bmMenuWrap: { top: 0 },
                bmBurgerButton: { position: "fixed", left: "36px", top: "36px" },
                bmCrossButton: { height: "24px", width: "24px" },
                bmCross: { background: "#bdc3c7" },
                bmItemList: { color: "#b8b7ad" },
                bmOverlay: { background: "rgba(0, 0, 0, 0.3)" },
              }}
            >
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                Services <RiArrowDropDownLine />
                {isDropdownOpen && (
                  <div className="submenu">
                    <Link href="/overview">Services Overview</Link>
                    <Link href="/financial">Financial Planning</Link>
                    <Link href="/risk">Risk Management</Link>
                    <Link href="/investment">Investment Planning</Link>
                    <Link href="/retirement">Retirement Planning</Link>
                  </div>
                )}
              </div>
              <Link href="/articles">Articles</Link>
            </Menu>
          </div>
          <div className="flex lg:hidden">
            <button className="mobile-nav-toggle ml-5" onClick={toggleDropdown}>
              <FaBars className="h-8 w-8 text-black" />
            </button>
            <Link href="/" passHref>
              <div className="cursor-pointer mt-2 ml-4">
                <Image
                  src="/images/Logo.svg"
                  alt="logo"
                  width={120}
                  height={80}
                />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;


/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  if (!animateHero) {
    setAnimateHero(true);
  }

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [animateHero]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div
      className="h-[110vh] lg:p-0 p-4 top-0 mt-0  lg:h-[96vh] w-full lg:w-full md:h-[85vh] z-0 relative lg:flex block lg:flex-row justify-center items-center"
      style={{
        backgroundImage: 'url("/images/nature.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div className="relative z-0 lg:w-1/2 flex flex-col lg:px-12 lg:py-10 container"
      initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: animateHero ? 1 : 0,
                y: animateHero ? 0 : 100,
              }}
              transition={{ duration: 1 }}
      >
        <h1 className="text-4xl lg:text-7xl font-bold lg:mb-20 mb-5 text-white mt-10 md:text-xl">
          <span className="text-yellow-500">Value-Based</span> Financial
          Planning
        </h1>
        <p className="mt-4 lg:text-2xl text-sm text-white">
          We provide creative and inspired financial planning, retirement
          planning, and planning for pre-retirees, retirees, federal employees,
          and business owners throughout D.C., Maryland, New York, and Virginia.
        </p>
        <div className="mt-5 mb-5 flex">
          <button-1 className="bg-[#03234d] z-5 text-white font-bold py-4 px-4">
            GET STARTED
          </button-1>
        </div>
      </motion.div>
      <motion.div className="lg:w-1/2 lg:flex justify-center lg:z-0 z-0 mt-20 lg:mt-10 lg:p-0 p-4"
      initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: animateHero ? 1 : 0,
                x: animateHero ? 0 : -100,
              }}
              transition={{ duration: 1 }}
      >
        <div className="relative w-full lg:max-w-[600px]">
          <div className="relative top-[-40px] lg:left-[-20px]">
            <Image
              src="/images/old2.webp"
              alt="logo"
              width={700}
              height={200}
              className="rounded-tr-2xl rounded-bl-2xl rounded-br-2xl bg-white rounded-tl-2xl border lg:border-4 border-blue-950 shadow-lg lg:h-90 lg:w-full w-full h-90"
            />
            <div className="absolute top-[-90px] lg:top-[-90px] right-[-28px] lg:right-[-80px]">
              <Image
                src="/images/old4.jpg"
                alt="Second image"
                width={200}
                height={100}
                className="shadow-xl z-20 rounded-tr-3xl rounded-bl-3xl bg-white border lg:border-4 border-yellow-500 lg:h-40 h-28 w-full object-cover"
              />
            </div>
            <div className="absolute bottom-[-80px] lg:bottom-[-90px] left-[-28px] lg:left-[-110px] ">
              <Image
                src="/images/pic1.jpg"
                alt="Third image"
                width={180}
                height={150}
                className="shadow-md rounded-tl-2xl rounded-br-2xl bg-white border lg:border-4 border-orange-400 lg:h-32  h-24 w-full object-cover "
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

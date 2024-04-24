/* eslint-disable react/no-unescaped-entities */
"use_client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { motion } from "framer-motion";

const Section1 = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const partners = [
    {
      name: "Fredrick Agwel",
      sector: "Associate",
      image: "/images/byron.jpg",
    },
  ];

  return (
    <>
      <section className="bg-[#F3F4F6] py-5 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: scrollY >= 200 ? 1 : 0,
            y: scrollY >= 200 ? 0 : 100,
          }}
          transition={{ duration: 1 }}
          className="mb-10 lg:mb-20 lg:justify-center lg:items-center lg:text-center"
        >
          <p className="text-sm lg:text-xl leading-normal px-2 font-semibold text-gray-800 max-w-4xl mx-auto">
            <span className="text-4xl lg:text-7xl text-gray-700">&ldquo;</span>{" "}
            Wealth Management is a comprehensive and holistic investment process
            that integrates the client's long-term goals with financial
            solutions, using a planning-based and consultative approach.{" "}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: scrollY >= 200 ? 1 : 0,
            x: scrollY >= 200 ? 0 : -100,
          }}
          transition={{ duration: 1 }}
          className="container lg:border-2 shadow-lg  mx-auto gap-4 flex flex-col lg:flex-row lg:items-center lg:justify-between relative p-4 lg:p-10 mb-8 lg:mb-20"
        >
          <div className="lg:mr-6 relative z-10">
            <div className="bg-blue-900  p-6 z-0">
              <h1 className="text-xl lg:text-3xl text-gray-200 mb-4">About</h1>
              <div className="h-1 bg-yellow-500 mb-6"></div>
              <p
                className="text-yellow-500 text-lg lg:text-2xl mb-4 font-bold"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Byron Moore - Founder
              </p>

              <div className="text-white">
                <p className="text-md lg:text-md leading-normal mb-6">
                  At Sovereign Wealth Management, our name says it all. We help
                  our clients be in control of their finances, not the other way
                  around. We believe in creating strong financial foundations
                  and multi-generational wealth.
                </p>
                <p className="text-md lg:text-md leading-normal mb-6">
                  Through our individualized approach, we help you focus on what
                  truly matters to you, whether that’s faith-based or
                  values-based investing, philanthropic giving, spending more
                  time with family, or being active in your community. Money is
                  just a tool to achieve what you want in life, and we help
                  utilize that tool so you can get the most out of your assets.
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="mailto:info@royfordlaw.com">
                  <button className="font-bold text-white py-3 px-8 bg-yellow-500 hover:bg-yellow-600 transition duration-300">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            {partners.map((partner, index) => (
              <div key={index} className="h-full">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={850}
                  height={500}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Section1;
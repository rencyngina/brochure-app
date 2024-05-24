/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FloatingObject from "./floating-object";
import { motion } from "framer-motion";
import Link from "next/link";

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

  return (
    <>
      <FloatingObject />
      <div className="bg-[#EEF5FF] w-full h-auto lg:h-[75vh]">
        <div className="container mx-auto lg:flex lg:items-center lg:justify-between lg:gap-8 xl:gap-10 lg:mb-0 p-6 xl:p-12 lg:p-8">
          <motion.div
            className="lg:w-1/2 relative lg:mb-20"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: scrollY >= 200 ? 1 : 0,
              y: scrollY >= 200 ? 0 : 100,
            }}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="col-span-2 lg:col-span-1">
                <ImageWithHover
                  src="/images/pic1.jpg"
                  width={400}
                  height={200}
                  loading="lazy"
                />
              </div>
              <div className="col-span-1 lg:col-span-2">
                <ImageWithHover
                  src="/images/pic2.jpg"
                  width={400}
                  height={200}
                  loading="lazy"
                />
              </div>
              <div className="col-span-1">
                <ImageWithHover
                  src="/images/pic5.jpg"
                  width={400}
                  height={200}
                  loading="lazy"
                />
              </div>
              <div className="col-span-1">
                <ImageWithHover
                  src="/images/pic4.jpg"
                  width={400}
                  height={200}
                  loading="lazy"
                />
              </div>
              <div className="col-span-1">
                <ImageWithHover
                  src="/images/pic3.jpg"
                  width={400}
                  height={200}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: scrollY >= 200 ? 1 : 0,
              x: scrollY >= 200 ? 0 : -100,
            }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 lg:ml-4 xl:ml-4 lg:mb-40 mt-10"
          >
            <h1 className="text-2xl lg:text-xl xl:text-2xl font-bold mb-4">
              Who We Serve
            </h1>
            <p className="text-yellow-500 text-lg lg:text-xl xl:text-4xl mb-4">
              Learn how to be a steward of your finances.
            </p>
            <p className="text-black text-sm lg:text-lg xl:text-xl leading-normal mb-8">
              We offer financial planning for clients who want to be in control
              of their assets,
              <br />
              not the other way around. Our clients are passionate about
              charitable giving, multi-generational planning, and serving their
              community.
            </p>
            <div className="flex gap-4">
              <Link href="/about">
                <button className="mt-4 font-bold text-white lg:py-5 py-3 lg:px-12 px-8 bg-[#102e56] hover:bg-yellow-500 transition duration-300">
                  <span className="text-white text-lg lg:tex-xl">
                    Learn More
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const ImageWithHover = ({ src, width, height }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-110">
      <Image
        src={src}
        className="object-cover"
        width={width}
        height={height}
        alt=""
        loading="lazy"
      />
    </div>
  );
};

export default Section1;

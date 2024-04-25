/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const Section4 = () => {
  return (
    <div
      className="w-full lg:min-h-screen h-[70vh] flex justify-center items-center p-2 lg:p-0 relative"
      style={{
        backgroundImage: 'url("/images/nature.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center relative">
        <div className="lg:w-1/2 lg:mr-1 relative z-10 border lg:border-2 border-yellow-600 p-8 lg:p-16 shadow-lg backdrop-blur-sm bg-white/30 flex flex-col justify-center items-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#03234D] mb-4 lg:mb-6 text-center lg:text-left z-0">
            Start Your Financial Plan
          </h1>
          <p className="text-[#03234D] mt-2 lg:mt-4 lg:text-xl text-center lg:text-left max-w-lg">
            We’re here to help you be a steward of your wealth. We can answer
            your questions about retirement planning and business planning.
            Contact us today to get started.
          </p>
          <div className="mt-6 lg:mt-8">
            <button className="bg-[#03234D] text-white font-semibold py-3 px-6 shadow-lg hover:bg-opacity-90 focus:outline-none transition duration-300">
              GET STARTED
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 bottom-0 left-0 z-0 lg:w-1/1 mt-10 lg:mt-10 lg:flex justify-center items-center hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10">
            <div className="rounded-lg">
              <Image
                src="/images/pic3.jpg"
                alt="Financial Planning"
                width={350}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="rounded-lg ">
              <Image
                src="/images/pic2.jpg"
                alt="Pic 2"
                width={350}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/pic3.jpg"
                alt="Pic 3"
                width={350}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="">
              <Image
                src="/images/pic1.jpg"
                alt="Pic 4"
                width={350}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/pic4.jpg"
                alt="Pic 4"
                width={350}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/pic4.jpg"
                alt="Pic 4"
                width={350}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/pic4.jpg"
                alt="Pic 4"
                width={350}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/pic4.jpg"
                alt="Pic 4"
                width={350}
                height={200}
                className="rounded-lg shadow-lg"

              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
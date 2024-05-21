/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "@/Components/Navnar";
import Foot from "@/Components/foot";
import { IoMdCheckboxOutline } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Portal = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-[65vh]">
        <div className="bg-[#03234D] flex-grow flex justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center lg:text-center">
            <h1 className="text-2xl lg:text-3xl text-yellow-600 lg:mb-4 mb-8 lg:mt-6 mt-5 font-bold">
              CLIENT PORTAL
            </h1>
            <p className="text-lg lg:text-xl font-thin text-white mt-10 mb-10 mx-6">
              At the heart of any wise financial plan lies effective investment
              management. It not only prioritizes your goals but also
              <br />
              empowers you to grow your nest egg and preserve your family’s
              future.
            </p>
            <button className="mt-4 text-md  py-4 px-10 hover:bg-yellow-500 transition duration-300 border font-bold border-yellow-300 flex items-center justify-center text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="lg:container lg:mx-auto flex flex-col lg:flex-row justify-center gap-5 lg:gap-20 lg:mb-20 mb-10">
        <div className="lg:w-1/1 p-2 lg:p-0">
          <div className="lg:w-96 lg:h-[24rem] w-68 h-[24rem] duration-500 group overflow-hidden relative bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly lg:mt-40 mb-10">
            <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
            <div className="z-10 flex flex-col justify-evenly w-full h-full">
            <div className="flex justify-center items-center">
              <Image src='/images/logo-footer.svg' alt="logo" width={150} height={60} />
              </div>
            <span className="lg:text-xl text-lg font-bold text-center">
             DOWNLOAD
            </span>
              <Link
              href="/file/Sovereign - WMID (1).pdf"
              download
              className="bg-blue-950 py-3 px-2 text-white mt-4 cursor-pointer text-center"
               >
                 CLIENT INTAKE FORM
               </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/1 p-2 lg:p-0">
          <div className="lg:w-96 lg:h-[24rem] w-68 h-[24rem] duration-500 group overflow-hidden relative bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly lg:mt-40 mb-10">
            <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
            <div className="z-10 flex flex-col justify-evenly w-full h-full">
            <div className="flex justify-center items-center">
            <Image src='/images/eMoney-logo.png' alt="logo" width={200} height={60} />
            </div>
            <span className="lg:text-xl text-lg font-bold text-center">
              Log in to your
            </span>
              <button className="border border-yellow-500 py-3 px-2 mt-4">
                FINANCIAL PLAN
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:container lg:mx-auto px-5 lg:px-20 lg:mb-20 mb-10">
        <p className="text-sm lg:text-lg text-black">
          PLEASE NOTE: The information being provided is strictly as a courtesy.
          When you link to any of the websites provided here, you are leaving
          this website. We make no representation as to the completeness or
          accuracy of information provided at these websites. Nor is the company
          liable for any direct or indirect technical or system issues or any
          consequences arising out of your access to or your use of third-party
          technologies, websites, information and programs made available
          through this website. When you access one of these websites, you are
          leaving our website and assume total responsibility and risk for your
          use of the websites you are linking to.
        </p>
      </div>
      <Foot />
    </>
  );
};

export default Portal;

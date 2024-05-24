/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Foot from '@/Components/foot';
import Navbar from '@/Components/Navnar';
import Image from 'next/image';
import { IoMdCheckboxOutline } from "react-icons/io";

const Retirement = () => {
    return (
        <>
        <Navbar />
        <div className="flex flex-col lg:flex-row bg-[#03234D] lg:justify-center lg:items-center lg:h-[75vh] h-[75vh] min-h-[75vh]">
        <div className="lg:w-1/2 flex justify-center lg:z-0 z-0 mt-4 lg:mb-18 lg:p-0 p-2">
          <div className="relative w-full lg:max-w-[600px]">
            <div className="relative lg:left-[-20px]">
              <div className="grid grid-cols-2 gap-0 lg:mb-10 mb-0 mt-4 p-2">
                <div className="relative -top-8">
                  <Image
                    src="/images/old2.webp"
                    alt="logo"
                    width={300}
                    height={100}
                    className="border lg:border-4 border-yellow-600 shadow-xl rounded-3xl"
                  />
                </div>
                <div className="relative lg:-bottom-14">
                  <Image
                    src="/images/old2.webp"
                    alt="logo"
                    width={300}
                    height={100}
                    className="border lg:border-4 border-orange-400 shadow-lg lg:mb-0 rounded-3xl"
                  />
                </div>
                <div className="relative lg:-top-6 -top-6">
                  <Image
                    src="/images/old2.webp"
                    alt="logo"
                    width={300}
                    height={100}
                    className="border lg:border-4 border-yellow-800 shadow-lg rounded-3xl"
                  />
                </div>
                <div className="relative lg:-bottom-16 -bottom-2">
                  <Image
                    src="/images/old2.webp"
                    alt="logo"
                    width={300}
                    height={100}
                    className="border lg:border-4 border-gray-500 shadow-lg rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-2 lg:p-10 lg:mb-16 lg:mt-6 mb-12 min-16">
          
            <h1 className="text-xl lg:text-3xl text-yellow-300 lg:mb-4 lg:mt-6">
            Retirement Planning
            </h1>
            <p className="text-md lg:text-2xl text-yellow-600 lg:mt-6">
            Transition into retirement with ease.
            </p>
            <p className="text-sm lg:text-lg mt-4 lg:mt-6 mb-6  text-white">
            Whether retirement is just around the corner or several years away, partnering with a financial advisor can assist you in establishing realistic financial goals as you prepare for this beautiful new life chapter.
            </p>
            <button className="font-bold text-white py-2 lg:py-3 px-10 lg:px-16 bg-transparent border border-yellow-500 hover:bg-yellow-600 transition duration-300 rounded-full text-sm lg:text-base">
            Get Started
          </button>
          </div>
        </div>
          
          <div className="lg:container lg:mx-auto item-center pl-5 lg:pl-20 flex lg:flex-row flex-col justify-center gap-5 lg:gap-20 lg:mb-20 mb-10">
        <div className="h-auto lg:w-1/2">
          <h4 className='lg:mt-20  mt-10 lg:mb-10 mb-5 text-yellow-600 text-3xl'>How it working</h4>

          <h1 className='text-lg lg:text-2xl mb-3 lg:mb-5 font-bold'>Your retirement, your way.</h1>
          <p className='text-sm lg:text-lg'>
          A clear financial picture can help ease the transition into retirement; knowing what accounts
           you’ll draw from, where they’re being managed, how your investments continue to generate income
            for you, and what tax liabilities they may impose. Keeping your finances organized before and during
             retirement requires discipline and clarity—and we’re here to help.
          </p>
          <h1 className='text-lg lg:text-2xl mb-3 lg:mb-5 font-bold'>
          Experience both financial freedom and personal satisfaction.
          </h1>
          <p className='text-sm lg:text-lg'>
          Our process starts by exploring your values and understanding what is most important to you.
           From there, we work together to determine the specific goals you want to work toward, putting
            a price tag on each, along with a proposed date for achievement. This process is unique in that 
            it considers not just your financial goals but also other important goals that contribute to living
             a fulfilling life. Our team is here to help you work toward both financial success and personal satisfaction.
          </p>
          <h1 className='text-lg lg:text-2xl mb-3 lg:mb-5 font-bold'>
          Partners at every stage.
          </h1>
          <p className='text-sm lg:text-lg'>
          Our team prioritizes building a strong and lasting relationship with our clients.
           We believe that an effective financial plan is not just a written document, but a
            lifelong journey. Our goal is to support you every step of the way to help you work
             toward and celebrate every milestone.
          </p>
          </div>

          <div className="lg:w-1/2 p-2 lg:p-0 mr-2">
          <div class="lg:w-96 lg:h-[24rem] w-68 h-[24rem] duration-500 group overflow-hidden relative  bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly lg:mt-40 mb-10">
              <div
                class="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
              ></div>
              <div
                class="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
              ></div>
              <div
                class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
              ></div>
              <div
                class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"
              ></div>
              <div class="z-10 flex flex-col justify-evenly w-full h-full">
                <span class="text-3xl font-bold">Who this is for</span>
                <ul className='spaced-list'>
                <li className='lg:text-2xl text-lg'><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Pre-Retirees</li>
                <li className='lg:text-2xl text-lg'><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Retirees</li>
                <li className='lg:text-2xl text-lg'><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Federal Employees</li>
                <li className='lg:text-2xl text-lg'><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Business Owner</li>
                </ul>
            </div>
          </div>
          </div>
          </div>
          <Foot />
        </>
    );
}     

export default Retirement;
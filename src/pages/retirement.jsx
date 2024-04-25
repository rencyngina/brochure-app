/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Foot from '@/Components/foot';
import Navbar from '@/Components/Navnar';
import { IoMdCheckboxOutline } from "react-icons/io";

const Retirement = () => {
    return (
        <>
        <Navbar />
          <div className="flex flex-col h-[65vh]">
            <div className="bg-[#03234D] flex-grow flex justify-center items-center w-full">
              <div className="flex flex-col justify-center items-center lg:text-center p-2 lg:p-0">
                <h1 className='text-3xl text-yellow-600 mb-10'>Retirement Planning</h1>
                <p className='text-3xl lg:text-5xl mb-3 lg:mb-2 font-bold text-white'>Transition into retirement with ease.</p>
                <p className='text-sm lg:text-lg mb-5 lg:mb-10 lg:mt-10 mt-10 text-white'>Whether retirement is just around the corner or several years away, partnering with a financial advisor can assist you
                <br /> 
                in establishing realistic financial goals as you prepare for this beautiful new life chapter.
                </p>
                <button className="mt-4 text-md ${scrollNav ? 'text-black' : 'text-yellow-300'} py-4 px-10 hover:bg-yellow-500 transition duration-300 border font-bold border-yellow-300 flex text-white">
              <div className="">Get Started</div>
            </button>
              </div>
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
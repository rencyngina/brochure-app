/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Foot from '@/Components/Foot';
import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import { IoMdCheckboxOutline } from "react-icons/io";

const FinancialPlanning = () => {
    return (
        <>
        <Navbar />
          <div className="flex flex-col min-h-screen">
            <div className="bg-black flex-grow flex justify-center items-center w-full">
              <div className="lg:w-1/2 flex justify-center lg:z-0 z-0 mt-4 lg:mb-18 lg:p-0 p-2">
                <div className="relative w-full lg:max-w-[600px]">
                  <div className="relative lg:left-[-20px]">
                    <div className="grid grid-cols-2 gap-0 lg:mb-10 mb-0 mt-0 p-2">
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
                <h1 className='text-2xl lg:text-3xl text-yellow-600 mb-10 mt-5'>Financial Planning Services</h1>
                <p className='text-2xl mr-2 ml-8 lg:text-5xl'>Sovereign Wealth Management offers financial planning and
                <br />
                 discretionary portfolio management services.</p>
                <p className='text-lg lg:text-xl mt-10 mb-10 mr-2 ml-4'>Synchronizing your wealth with your values, values-based financial planning goes further, helping you make a
                <br /> 
                meaningful impact on the things that matter most.</p>
                <button className="bg-yellow-600 text-white py-2 px-4 rounded">Get Started</button>
              </div>
            </div>
          </div>
          
          <div className='lg:container lg:mx-auto item-center pl-5 lg:pl-20 flex lg:flex-row flex-col justify-center gap-10 lg:gap-20'>
            <div className='h-auto lg:w-1/2'>
              <h4 className='mt-10 lg:mt-40 mb-5 lg:mb-10 text-yellow-600 text-xl lg:text-3xl'>How it works</h4>
              <h1 className='text-2xl lg:text-5xl mb-3 lg:mb-5 font-bold'>Alignment of your wealth and values.</h1>
              <p className='text-md lg:text-2xl'>
                A well-crafted plan should include an accurate summary of your finances, your goals,
                and strategies to work toward reaching them. But values-based financial planning takes 
                it up a notch, leveraging your values to create a plan that not only grows your wealth but 
                also aligns it with what you hold dear. Working together,
                we can create a financial plan that speaks powerfully to the values that matter most to you.
              </p>
              <h1 className='text-2xl lg:text-5xl mb-4 mt-4 lg:mb-5 font-bold'>
                Collaboration in pursuing your financial goals.
              </h1>
              <p className='text-md lg:text-2xl mb-10'>
                Our process is designed to help you work toward your financial goals by following a clear path that aligns with your values.
                We’ll start by organizing your finances and getting a clear picture of your current situation. Then we’ll work with you to
                develop and define your goals and values before crafting a customized plan tailored to your unique needs.
              </p>
              <h1 className='text-2xl lg:text-5xl mb-3 lg:mb-5 font-bold'>
                Optimized plans for informed progress.
              </h1>
              <p className='text-md lg:text-2xl mt-4 lg:mb-40 mb-20'>
                For steady and consistent progress, we’ll continually review and revise your plan.
                We will help you keep your financial interests aligned with the core values that guide you.
              </p>
            </div>

            <div className='lg:w-1/2'>
              <div className="lg:w-96 lg:h-[24rem] w-60 h-[24rem] duration-500 group overflow-hidden relative bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly lg:mt-40 mb-10">
                <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
                <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
                <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
                <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
                <div className="z-10 flex flex-col justify-evenly w-full h-full">
                  <span className="text-3xl font-bold">Who this is for</span>
                  <ul className='spaced-list'>
                    <li className='text-2xl'><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Pre-Retirees</li>
                    <li className='text-2xl'><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Retirees</li>
                    <li className='text-2xl'><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Federal Employees</li>
                    <li className='text-2xl'><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Business Owners</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Foot />
        </>
    );
}

export default FinancialPlanning;

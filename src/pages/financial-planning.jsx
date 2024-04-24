/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Foot from '@/Components/foot';
import Navbar from '@/Components/Navnar';
import { IoMdCheckboxOutline } from "react-icons/io";

const FinancialPlanning = () => {
    return (
        <>
        <Navbar />
          <div className="flex flex-col h-[65vh]">
            <div className="bg-[#284f83] flex-grow flex justify-center items-center w-full">
              <div className="flex flex-col justify-center items-center text-center">
                <h1 className='text-3xl text-yellow-600 mb-10'>Financial Planning Services</h1>
                <p className='text-5xl'>Sovereign Wealth Management offers financial planning and
                <br />
                 discretionary portfolio management services.</p>
                <p className='text-xl mt-10 mb-10'>Synchronizing your wealth with your values, values-based financial planning goes further, helping you make a
                <br /> 
                meaningful impact on the things that matter most.</p>
                <button-1>
                  Get Started
                </button-1>
              </div>
            </div>
          </div>
          
          <div className='container mx-auto item-center pl-20 flex flex-row justify-center gap-20'>

          <div className='h-auto lg:w-1/2'>
          <h4 className='mt-40 mb-10 text-yellow-600 text-3xl'>How it working</h4>

          <h1 className='text-2xl lg:text-5xl mb-3 lg:mb-5 font-bold'>Alignment of your wealth and values.</h1>
          <p className='text-md lg:text-2xl'>
          A well-crafted plan should include an accurate summary of your finances, your goals,
           and strategies to work toward reaching them. But values-based financial planning takes 
           it up a notch, leveraging your values to create a plan that not only grows your wealth but 
           also aligns it with what you hold dear. Working together,
           we can create a financial plan that speaks powerfully to the values that matter most to you.
          </p>
          <h1 className='text-5xl mb-10 mt-10'>
          Collaboration in pursuing your financial goals.
          </h1>
          <p className='text-2xl'>
          Our process is designed to help you work toward your financial goals by following a clear path that aligns with your values.
           We’ll start by organizing your finances and getting a clear picture of your current situation. Then we’ll work with you to
            develop and define your goals and values before crafting a customized plan tailored to your unique needs.
          </p>
          <h1 className='text-5xl mt-10 mb-10'>
          Optimized plans for informed progress.
          </h1>
          <p className='text-2xl mb-20'>
          For steady and consistent progress, we’ll continually review and revise your plan.
           We will help you keep your financial interests aligned with the core values that guide you.
          </p>
          </div>

          <div className='lg:w-1/2'>
          <div
              class="w-96 h-[24rem] duration-500 group overflow-hidden relative  bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly mt-40">
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
                <li className='text-2xl'><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Pre-Retirees</li>
                <li className='text-2xl'><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Retirees</li>
                <li className='text-2xl'><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Federal Employees</li>
                <li className='text-2xl'><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Business Owner</li>
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

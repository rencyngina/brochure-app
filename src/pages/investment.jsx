/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Foot from '@/Components/foot';
import Navbar from '@/Components/Navnar';
import { IoMdCheckboxOutline } from "react-icons/io";

const Investment = () => {
    return (
        <>
        <Navbar />
          <div className="flex flex-col h-[65vh]">
            <div className="bg-[#03234D] flex-grow flex justify-center items-center w-full">
              <div className="flex flex-col justify-center items-center lg:ext-center">
                <h1 className='text-2xl lg:text-3xl text-yellow-600 lg:mb-10 mb-8 lg:mt-20 mt-5 ml-6 lg:ml-0 mr-0 lg:mr-0'>Investment Planning</h1>
                <p className='text-lg mr-2 ml-8 lg:text-5xl text-white'>Strategies developed to help you pursue your financial goals.</p>
                <p className='text-xs font-thin text-white lg:text-xl mt-10 mb-10 mr-0 ml-6'>At the heart of any wise financial plan lies effective investment management. It not only prioritizes your goals but also
                <br /> 
                empowers you to grow your nest egg and preserve your family’s future.
                </p>
                <button-1>
                  Get Started
                </button-1>
              </div>
            </div>
          </div>
          
          <div className="lg:container lg:mx-auto item-center pl-5 lg:pl-20 flex lg:flex-row flex-col justify-center gap-5 lg:gap-20 lg:mb-20 mb-10">
          <div className='h-auto lg:w-1/2'>
          <h4 className='mt-10 lg:mt-40 mb-2 lg:mb-10 text-yellow-600 text-xl lg:text-3xl'>How it working</h4>

          <h1 className='text-lg lg:text-2xl mb-3 lg:mb-5 font-bold'>Values-based investing made simple.</h1>
          <p className='text-sm lg:text-lg'>
          At its core, values-based investing is the alignment of investment decisions with your personal ethics or values. While we all consider what is important to us when making choices in life, when it comes to investment decisions, this is often more complicated than it should be. We help simplify the complex.
          </p>
          <h1 className='text-lg lg:text-2xl mb-3 lg:mb-5 font-bold'>
          A personalized strategy to meet your needs.
          </h1>
          <p className='text-sm lg:text-lg'>
          Our client discovery process can help uncover what is important to you when it comes to how your money is invested. We’ll then craft an investment portfolio uniquely tailored to your needs and objectives, taking into consideration your tolerance for risk, financial goal timeline, and short-term and long-term objectives.
          </p>
          <h1 className='text-lg lg:text-2xl mb-3 lg:mb-5 font-bold'>
          Ongoing monitoring and adjustments as needed.
          </h1>
          <p className='text-sm lg:text-lg'>
          As part of our investment plan, we work to understand the status of your current investments. By looking closely at these factors, we can develop a personalized investment strategy that meets your specific needs. We’ll continuously monitor and review this strategy, evaluate its alignment with your goals, and adjust as necessary.
          </p>
          </div>

          <div className='lg:w-1/2 p-2 lg:p-0'>
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
                <span class="lg:text-3xl text-lg font-bold">Who this is for</span>
                <ul className='spaced-list'>
                <li className='lg:text-2xl text-lgl'><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Pre-Retirees</li>
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

export default Investment;

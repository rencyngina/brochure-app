/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Foot from '@/Components/foot';
import Navbar from '@/Components/Navnar';
import { IoMdCheckboxOutline } from "react-icons/io";

const RetirementPlanning = () => {
    return (
        <>
        <Navbar />
          <div className="flex flex-col h-[65vh]">
            <div className="bg-[#284f83] flex-grow flex justify-center items-center w-full">
              <div className="flex flex-col justify-center items-center lg:text-center">
                <h1 className='text-2xl lg:text-3xl text-yellow-600 mb-10'>Risk Management</h1>
                <p className='text-2xl mr-2 ml-8 lg:text-5xl'>Prepare your business and personal wealth for potential risks.</p>
                <p className='text-lg lg:text-xl mt-10 mb-10 mr-2 ml-4'>Risk is an unavoidable reality of life, and if not managed properly, it can have a profound impact on your financial well-being. 
                <br /> 
                That’s why risk management is such a critical component of our role as financial advisors.
                </p>
                <button-1>
                  Get Started
                </button-1>
              </div>
            </div>
          </div>
          
          <div className='lg:container lg:mx-auto item-center pl-5 lg:pl-20 flex lg:flex-row flex-col justify-center gap-10 lg:gap-20'>

          <div className='h-auto lg:w-1/2'>
          <h4 className='mt-10 lg:mt-40 mb-5 lg:mb-10 text-yellow-600 text-xl lg:text-3xl'>How it working</h4>

          <h1 className='text-2xl lg:text-5xl mb-3 lg:mb-5 font-bold'>Complement your overall financial plan with a good risk strategy.</h1>
          <p className=' text-md lg:text-2xl'>
          Our goal is to minimize any potential financial losses that may arise from risks to your assets, health, or business. By working together to identify and manage potential risks, we can help safeguard your financial future and keep you on track toward your long-term financial goals.
          </p>
          <h1 className='text-2xl lg:text-5xl mb-4 mt-4 lg:mb-5 font-bold'>
          Navigate financial challenges with confidence.
          </h1>
          <p className='text-md lg:text-2xl mb-10'>
          Take control of your financial future with our proven risk management process. Our four-step approach involves clarifying your objectives, identifying potential risks, evaluating and selecting the most effective methods to manage those risks, and constantly monitoring outcomes and adjusting strategies as needed. With our guidance, you can confidently navigate any financial challenge and safeguard your long-term financial stability.
          </p>
          <h1 className='text-2xl lg:text-5xl mb-3 lg:mb-5 font-bold'>
          Partner with a guide to navigate the process.
          </h1>
          <p className='text-md lg:text-2xl mt-4 lg:mb-40 mb-20'>
          Managing risk can be a complex and ever-changing process, but you don’t have to navigate it alone. Our team is here every step of the way, providing the necessary tools and knowledge to guide you and your family through the decision-making process. With our assistance, you’ll gain a better understanding of your potential risks, how to control them, and how your decisions align with your values and goals.
          </p>
          </div>

          <div className='lg:w-1/2 justify-center items-center'>
          <div
              class="lg:w-96 lg:h-[24rem] w-60 h-[24rem] duration-500 group overflow-hidden relative  bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly lg:mt-40 mb-10 ">
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

export default RetirementPlanning;

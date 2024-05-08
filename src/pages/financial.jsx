/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Foot from "@/Components/foot";
import Navbar from "@/Components/Navnar";
import { IoMdCheckboxOutline } from "react-icons/io";

const Financial = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-[65vh]">
        <div className="bg-[#03234D] flex-grow flex justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center lg:text-center">
            <h1 className="text-2xl lg:text-3xl text-yellow-600 lg:mb-10 mb-8 lg:mt-20 mt-5 ml-6 lg:ml-0 mr-0 lg:mr-0">
              Financial Planning Services
            </h1>
            <p className="text-lg mr-2 ml-8 lg:text-5xl text-white">
              Sovereign Wealth Management offers financial planning and
              <br />
              discretionary portfolio management services.
            </p>
            <p className="text-xs font-thin text-white lg:text-xl mt-10 mb-10 mr-0 ml-6">
              Synchronizing your wealth with your values, values-based financial
              planning goes further, helping you make a
              <br />
              meaningful impact on the things that matter most.
            </p>
            <button className="mt-4 text-md ${scrollNav ? 'text-black' : 'text-yellow-300'} py-4 px-10 hover:bg-yellow-500 transition duration-300 border font-bold border-yellow-300 flex text-white">
              <div className="">Get Started</div>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:container lg:mx-auto item-center pl-5 lg:pl-20 flex lg:flex-row flex-col justify-center gap-5 lg:gap-20">
        <div className="h-auto lg:w-1/2">
          <h4 className="mt-10 lg:mt-40 mb-2 lg:mb-10 text-yellow-600 text-xl lg:text-3xl">
            How it working
          </h4>

          <h1 className="text-lg lg:text-2xl mb-3 lg:mb-5 font-bold">
            Alignment of your wealth and values.
          </h1>
          <p className="text-sm lg:text-lg">
            A well-crafted plan should include an accurate summary of your
            finances, your goals, and strategies to work toward reaching them.
            But values-based financial planning takes it up a notch, leveraging
            your values to create a plan that not only grows your wealth but
            also aligns it with what you hold dear. Working together, we can
            create a financial plan that speaks powerfully to the values that
            matter most to you.
          </p>
          <h1 className="text-lg lg:text-2xl mb-4 mt-4 lg:mb-5 font-bold">
            Collaboration in pursuing your financial goals.
          </h1>
          <p className="text-sm lg:text-lg mb-10">
            Our process is designed to help you work toward your financial goals
            by following a clear path that aligns with your values. We’ll start
            by organizing your finances and getting a clear picture of your
            current situation. Then we’ll work with you to develop and define
            your goals and values before crafting a customized plan tailored to
            your unique needs.
          </p>
          <h1 className="text-lg lg:text-2xl mb-3 lg:mb-5 font-bold">
            Optimized plans for informed progress.
          </h1>
          <p className="text-sm lg:text-xl mt-4 lg:mb-40 mb-0">
            For steady and consistent progress, we’ll continually review and
            revise your plan. We will help you keep your financial interests
            aligned with the core values that guide you.
          </p>
        </div>

        <div className="lg:w-1/2 p-2 lg:p-0">
          <div class="lg:w-96 lg:h-[24rem] w-68 h-[24rem] duration-500 group overflow-hidden relative  bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly lg:mt-40 mb-10">
            <div class="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
            <div class="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
            <div class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
            <div class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
            <div class="z-10 flex flex-col justify-evenly w-full h-full">
              <span class="lg:text-3xl text-lg font-bold">Who this is for</span>
              <ul className="spaced-list">
                <li className="lg:text-2xl text-lg">
                  <IoMdCheckboxOutline
                    size={20}
                    className="inline-block mr-2 text-yellow-500"
                  />
                  Pre-Retirees
                </li>
                <li className="lg:text-2xl text-lg">
                  <IoMdCheckboxOutline
                    size={20}
                    className="inline-block mr-2 text-yellow-500"
                  />
                  Retirees
                </li>
                <li className="lg:text-2xl text-lg">
                  <IoMdCheckboxOutline
                    size={20}
                    className="inline-block mr-2 text-yellow-500"
                  />
                  Federal Employees
                </li>
                <li className="lg:text-2xl text-lg">
                  <IoMdCheckboxOutline
                    size={20}
                    className="inline-block mr-2 text-yellow-500"
                  />
                  Business Owner
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Financial;

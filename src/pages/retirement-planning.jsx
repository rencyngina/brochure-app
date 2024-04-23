import React from 'react';
import Foot from '@/Components/foot';
import Navbar from '@/Components/Navnar';

const RetirementPlanning = () => {
    return (
        <>
          <div className="flex flex-col h-[65vh]">
            <Navbar />
            <div className="bg-[#284f83] flex-grow flex justify-center items-center">
              <div className="container flex flex-col justify-center items-center text-center">
                <h1 className='text-3xl text-yellow-600'>Financial Planning Services</h1>
                <p className='text-5xl'>Sovereign Wealth Management offers financial planning and discretionary portfolio management services.</p>
                <p className='text-xl mb-10'>Synchronizing your wealth with your values, values-based financial planning goes further, helping you make a meaningful impact on the things that matter most.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-20 mt-10">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          
          <div className='h-auto lg:w-1/2 m-20'>
          <h4 className='mt-10 mb-10 text-yellow-600 text-3xl'>How it working</h4>

          <h1 className='text-5xl mb-5'>Alignment of your wealth and values.</h1>
          <p className='text-2xl'>
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
          <p className='text-2xl'>
          For steady and consistent progress, we’ll continually review and revise your plan.
           We will help you keep your financial interests aligned with the core values that guide you.
          </p>
          </div>
          <Foot />
        </>
    );
}     

export default RetirementPlanning;

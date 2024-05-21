/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <section className="bg-[#03234D] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="lg:placeholder:text-4xl font-extrabold text-white text-2xl">
            Fee-Only Schedule
          </h2>
          <p className="mt-4 text-sm lg:text-xl text-purple-200">
            Sovereign Wealth Management is a fee-only, independent advisory firm
            and does not sell investment products for a commission.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white bg-opacity-10  shadow-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 m-4">
              <span className="inline-flex items-center px-3 py-1  text-sm font-medium bg-purple-100 text-purple-800">
                Basic
              </span>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">
                The Get Started Plan
              </h3>
              <p className="mt-4 text-purple-200">
                A simplified version of our Comprehensive Financial Plan.
                Schedule a consultation if you need financial guidance without
                investment management or ongoing advice.
              </p>
            </div>
            <div className="mb-8">
              <span className="text-xl font-extrabold text-white">
                $600* - Not Comprehensive
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-purple-200">
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Up to $250,000- 1.10 bps</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>$250,000 to $1,000,000- 1.00 bps</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>$1,000,000 to $5,000,00-.75 bps</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>$5,000,000 and Up- .50 bps</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="block w-full py-3 px-6 text-center text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              Get Started
            </Link>
          </div>
          <div className="bg-white bg-opacity-10  shadow-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 m-4">
              <span className="inline-flex items-center px-3 py-1  text-sm font-medium bg-green-100 text-green-800">
                Pro
              </span>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">Growth Pack</h3>
              <p className="mt-4 text-purple-200">
                Ongoing Financial Planning & Investment Management
              </p>
            </div>
            <div className="mb-8">
              <span className="text-xl font-extrabold text-white">$1,000*</span>
            </div>
            <ul className="mb-8 space-y-4 text-purple-200">
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  One-hour financial review meetings four times a year, once
                  quarterly
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Regular review and updates to your financial plan as your
                  situation or goals change
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Investment management</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Unlimited access to an Advisor/Planning professional through
                  telephone and email
                </span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="block w-full py-3 px-6 text-center text-white font-medium bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
            >
              Get Started
            </Link>
          </div>
          <div className="bg-white bg-opacity-10 shadow-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 m-4">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800">
                Enterprise
              </span>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">
                Comprehensive Financial Plan
              </h3>
              <p className="mt-4 text-purple-200">
                Meet with a Professional Investment Advisor either in person or
                via a video call to go over your financial plan in detail. We’ll
                answer any questions related to your unique financial situation.
              </p>
            </div>
            <div className="mb-8">
              <span className="text-xl font-extrabold text-white">
                $700 - $1,000*
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-purple-200">
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Retirement, Other topics as needed</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Estate Planning</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Charitable Giving</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Tax Planning</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="block w-full py-3 px-6 text-center text-white font-medium bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <p className="mt-8 text-sm lg:text-xl text-purple-200 text-center">
        *If you proceed to open up an account that has a management fee, the
        financial plan fee will be refunded to you.
        <br />
         A client may choose to pay
        fees directly rather than having them deducted from their investment
        account.
      </p>
    </section>
  );
};

export default Pricing;

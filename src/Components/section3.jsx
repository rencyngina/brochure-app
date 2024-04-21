"use_client";
import React, { useState } from "react";

const Section3 = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="w-full p-8 bg-[#03234D]">
        <div>
          <h2 className="lg:text-center text-3xl font-bold text-gray-400 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="lg:text-center text-gray-600 mb-6">
            Stay up to date with the latest articles and news.
          </p>
        </div>
        <div>
          <div className="lg:flex items-center justify-center lg:mr-20">
            <img src="/images/Logo.svg" alt="Logo" className="h-16" />
          </div>
          <div className="mt-8 justify-center items-center lg:text-center">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">
              Get the Latest News and Offers!
            </h2>
            <p className="text-sm text-gray-300 mb-6">
              Sign up to get updates of new amazing products and offers. Save
              more!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center items-center sm:flex-row sm:items-center sm:space-x-4">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 py-3 px-12 mb-4 sm:w-auto sm:mb-0 focus:outline-none focus:border-gray-500"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-500 text-white font-semibold py-3 px-10  transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:py-8 py-4">
        <div className=" lg:mt-10 lg:mb-8 p-3">
          <p className="text-2xl lg:text-3xl text-yellow-500 ">Articles</p>
          <h1 className="mt-10 text-3xl lg:text-4xl leading-tight">
            Articles that might
            <br />
            help your journey
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-lg p-4 hover:border-2 border-yellow-500">
            <img
              src="/images/pic1.jpg"
              alt="pic1"
              className="w-full h-48 object-cover"
            />
            <h2 className="text-lg font-semibold text-gray-800 mt-4">
              Why I Became a Financial Advisor
            </h2>
            <p className="text-gray-500 mt-2">
              By Byron Moore Experiencing difficult things in life can hopefully bring about blessings and good, and sometimes
            </p>
            <button className="bg-[#03234D] hover:bg-yellow-500 text-white  py-3 px-4 mt-10">
              READ MORE
            </button>
          </div>
          <div className="bg-white shadow-lg p-4 hover:border-2 border-yellow-500 cursor-pointer">
            <img
              src="/images/pic2.jpg"
              alt="pic2"
              className="w-full h-48 object-cover"
            />
            <h2 className="text-lg font-semibold text-gray-800 mt-4">
              Article 2
            </h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-[#03234D] hover:bg-yellow-500 text-white  py-3 px-4 mt-10">
              READ MORE
            </button>
          </div>
          <div className="bg-white shadow-lg p-4 hover:border-2 border-yellow-500 cursor-pointer">
            <img
              src="/images/pic3.jpg"
              alt="pic3"
              className="w-full h-48 object-cover"
            />
            <h2 className="text-lg font-semibold text-gray-800 mt-4">
              Article 3
            </h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-[#03234D] hover:bg-yellow-500 text-white  py-3 px-4 mt-10">
              READ MORE
            </button>
          </div>
          <div className="bg-white shadow-lg p-4 hover:border-2 border-yellow-500 cursor-pointer">
            <img src="/images/oldpple.jpg" alt="pic6" />
            <h2 className="text-lg font-semibold text-gray-800 mt-4">
              Article 6
            </h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-[#03234D] hover:bg-yellow-500 text-white  py-3 px-4 mt-10">
              READ MORE
            </button>
          </div>
        </div>
        <button className="bg-[#03234D] hover:bg-blue-700 text-white lg:font-bold lg:py-4 lg:px-6 py-3 px-6 mt-10 lg:ml-0 ml-4">
          SEE MORE ARTICLES
        </button>
      </div>
    </div>
  );
};

export default Section3;

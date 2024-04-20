"use_client"
import React, { useState } from 'react';

const Section3 = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full p-8 bg-[#03234D] shadow-lg rounded-sm">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-center text-gray-600 mb-6">Stay up to date with the latest articles and news.</p>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <img src="/images/Logo.svg" alt="Logo" className="h-16" />
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Get the Latest News and Offers!</h2>
            <p className="text-sm text-gray-600 mb-6">Sign up to get updates of new amazing products and offers. Save more!</p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-md py-3 px-4 mb-4 sm:w-auto sm:mb-0 focus:outline-none focus:border-gray-500"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-500 text-white font-semibold py-3 px-8 rounded-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

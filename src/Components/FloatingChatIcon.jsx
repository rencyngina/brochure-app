"use_strict";
import React, { useState } from 'react';
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { IoIosCloseCircle } from "react-icons/io";

function FloatingChatIcon() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      {!isChatOpen && (
        <div 
          className="fixed bottom-10 right-5 lg:right-10 z-[999] bg-blue-950 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-yellow-600 transform hover:scale-105 transition-transform"
          onClick={toggleChat}
        >
          <HiChatBubbleLeftRight className="text-4xl lg:text-4xl" />
        </div>
      )}
      {isChatOpen && (
        <div className="fixed bottom-10 right-10 bg-white rounded-lg shadow-md w-80 z-30 h-[380px] ">
          <div className="flex items-center justify-between bg-blue-950 text-white p-3 rounded-t-lg">
            <h3 className="text-lg font-semibold">Talk to us</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200 focus:outline-none">
              <IoIosCloseCircle className='text-3xl' />
            </button>
          </div>
          <div className="p-4 h-60 overflow-y-auto">
            <div className="flex flex-col space-y-2">
              <div className="flex items-start">
                <div className="rounded-lg bg-gray-200 p-2">
                  <p className="text-sm">Hey there!</p>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <div className="rounded-lg bg-blue-950 p-2">
                  <p className="text-sm text-white">Hi! How can I help you?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-gray-300 bg-gray-100">
            <input type="text" placeholder="Type a message..." className="w-full border border-gray-300 rounded-full px-3 py-1 focus:outline-none focus:border-green-500" />
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatingChatIcon;

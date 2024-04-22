import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import FloatingObject2 from "./floating-object2";
import { motion, useAnimation } from "framer-motion";

const Bluesection = () => {
  // Data for cards
  const cardsData = useMemo(() => [
    {
      title: "Financial Planning Services",
      description:
        "We offer comprehensive wealth management and financial planning services to pre-retirees, retirees, federal employees, and business owners.",
      imageUrl: "/images/Group-3-1.png",
    },
    {
      title: "Risk Management & Insurance",
      description:
        "Make sure you’re shielded with our insurance and risk management services, including insurance needs analysis, evaluation of risk exposures, and more.",
      imageUrl: "/images/Group-1.png",
    },
    {
      title: "Investment Planning",
      description:
        "We offer investment advice and help develop investing strategies with our clients’ goals and risk level in mind.",
      imageUrl: "/images/Group-4-1.png",
    },
    {
      title: "Retirement Planning",
      description:
        "Retirement is an important milestone and requires diligent planning. We provide retirement planning services, including retirement needs analysis, Social Security maximization, and more.",
      imageUrl: "/images/Group-5.png",
    },
  ], []);

  // Initialize controls array using useAnimation hook
  const controls = cardsData.map(() => useAnimation());

  const [isVisible, setIsVisible] = useState(Array(cardsData.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      cardsData.forEach((_, index) => {
        const element = document.getElementById(`card-${index}`);
        if (element) {
          const elementTop = element.getBoundingClientRect().top;
          const screenHeight = window.innerHeight;
          if (elementTop < screenHeight * 0.9 && !isVisible[index]) {
            controls[index].start({
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.3, duration: 0.5, ease: "easeOut" },
            });
            setIsVisible((prev) => {
              const newVisibility = [...prev];
              newVisibility[index] = true;
              return newVisibility;
            });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cardsData, controls, isVisible]);

  return (
    <>
      <div className="bg-[#03234d] w-full min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-xl lg:text-3xl font-bold mt-10 text-yellow-500">
          Our Services
        </h1>
        <p className="text-white text-center text-2xl mt-4 lg:text-4xl lg:mt-6 lg:px-20">
          We are fiduciaries and independent,
          <br />
          fee-based financial advisors.
        </p>
        <p className="text-white text-center text-lg mt-4 lg:text-xl lg:mt-6 lg:px-20">
          Every financial plan we create is unique.
        </p>
        {/* Dynamic cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-10 px-4 mb-10 lg:px-40 lg:mb-20 lg:mt-20">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              id={`card-${index}`}
              className="relative w-full md:w-1/2 lg:w-1/2 xl:w-1/4 flex flex-col bg-white bg-clip-border text-gray-700 shadow-md transition duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={controls[index]}
            >
              <div className="relative -mt-6 h-40 overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  width={40}
                  height={20}
                  className="w-35 h-30"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased card-title">
                  {card.title}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased card-description">
                  {card.description}
                </p>
              </div>
              <div className="p-8 pt-2 opacity-0 absolute top-2 left-0 w-full h-full flex items-center justify-center hover:opacity-100">
                <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <FloatingObject2 />
      </div>
    </>
  );
};

export default Bluesection;

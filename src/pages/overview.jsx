import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../Components/Navnar"; // Adjust the path if necessary
import Foot from "../Components/Foot"; // Adjust the path if necessary

const features = [
  {
    id: 1,
    title: "Financial Planning Services",
    description:
      "A solid financial plan, essential in pursuing your financial goals, will include a detailed overview of your current financial situation and the strategies you’ll implement. But values-based financial planning takes things to the next level. Rather than just focusing on accumulating wealth, it aligns your values with your financial strategy. Leveraging your wealth to support the things that matter most to you allows you to make a meaningful impact and live a more purposeful life.",
    imageUrl: "/images/financial.jpeg",
  },
  {
    id: 2,
    title: "Risk Management Insurance",
    description:
      "An inevitable part of life, risk can have a significant impact on your financial security. Our goal is to minimize the potential financial and other losses that may arise from risks to your assets, health, or business. As your financial advisors, our role is to safeguard your financial well-being, which may entail helping you mitigate certain risks. We take proactive measures to manage risk so we can help you pursue your ideal financial future and experience greater peace.",
    imageUrl: "/images/risk.jpeg",
  },
  {
    id: 3,
    title: "Investment Planning",
    description:
      "Investment management plays a pivotal role in any comprehensive financial plan, serving as a road map for prioritizing your financial objectives, such as building wealth and safeguarding your family’s financial stability. As your financial advisor, we’ll take the time to understand your individual goals and tailor strategies that align with your unique needs. Partnering together, we can help you work toward your financial aspirations and enjoy greater financial freedom.",
    imageUrl: "/images/investment.jpeg",
  },
  {
    id: 4,
    title: "Retirement Planning",
    description:
      "Whether retirement is right around the corner or several years away, partnering with a financial advisor can be instrumental in setting realistic financial objectives as you plan for the next phase of life. We’ll work closely with you to understand your unique circumstances and develop strategies that help make your retirement dreams a reality. Through our collaboration, we can help prepare you financially for the next chapter and allow you to enjoy the retirement you’ve always envisioned.",
    imageUrl: "/images/retirement.jpeg",
  },
];

const Overview = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Navbar />
      <div className="lg:justify-center lg:items-center bg-[#03234D] flex flex-col lg:flex-row lg:w-full lg:p-0 p-4 lg:h-[75vh] h-[100vh] min-h-[75vh]">
        <div className="lg:w-1/2 flex justify-center lg:z-0 z-0 mt-4 lg:mb-18 lg:p-0 p-2">
          <div className="relative w-full lg:max-w-[600px]">
            <div className="relative lg:left-[-20px]">
              <div className="grid grid-cols-2 gap-0 lg:mb-10 mb-0 mt-0 p-2"> {/* Removed gap between images */}
                <div className="relative -top-8"> {/* Adjusted position */}
                  <Image 
                    src="/images/old2.webp"
                    alt="logo"
                    width={300} // Adjusted width
                    height={100} // Adjusted height
                    className="border lg:border-4 border-yellow-600 shadow-xl rounded-3xl"
                  />
                </div>
                <div className="relative lg:-bottom-14"> {/* Adjusted position */}
                  <Image 
                    src="/images/old2.webp"
                    alt="logo"
                    width={300} // Adjusted width
                    height={100} // Adjusted height
                    className="border lg:border-4 border-orange-400 shadow-lg lg:mb-0 rounded-3xl"
                  />
                </div>
                <div className="relative lg:-top-6 -top-6"> {/* Adjusted position */}
                  <Image 
                    src="/images/old2.webp"
                    alt="logo"
                    width={300} // Adjusted width
                    height={100} // Adjusted height
                    className="border lg:border-4 border-yellow-800 shadow-lg rounded-3xl"
                  />
                </div>
                <div className="relative lg:-bottom-16 -bottom-2"> {/* Adjusted position */}
                  <Image 
                    src="/images/old2.webp"
                    alt="logo"
                    width={300} // Adjusted width
                    height={100} // Adjusted height
                    className="border lg:border-4 border-gray-500 shadow-lg rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-2 lg:p-10 lg:mb-16 lg:mt-6 mb-12 min-16">
        <h1 className="text-lg lg:text-3xl text-yellow-300 lg:mb-4 lg:mt-6 ">
          Services
        </h1>
        <p className="text-md lg:text-2xl text-yellow-600 lg:mt-6">
        Empowering Your Financial Future with Values-Based Planning
        </p>
        <p className="text-sm lg:text-lg mt-4 lg:mt-6 mb-6  text-white">
          Money should serve as a tool to support the things that matter most to you. That’s why we offer a highly personalized approach to building ideas, suggestions, and plans that are tailored to your specific financial goals and objectives. With our customized services, we prioritize and adapt to your changing situation over time to help you work toward financial stability with confidence. Our team is committed to informing and supporting you through each and every meeting.
        </p>
        <p className="text-sm lg:text-lg mt-4 lg:mt-6 mb-6  text-white">
          Whether you’re a pre-retiree, retiree, federal employee, small to midsize business owner, or in the wealth accumulation phase, we have the expertise to help you work toward your financial objectives.
        </p>
        <div className="lg:mb-10 ">
          <button className="font-bold text-white py-2 lg:py-3 px-10 lg:px-16 bg-transparent border border-yellow-500 hover:bg-yellow-600 transition duration-300 rounded-full text-sm lg:text-base">
            Get Started
          </button>
        </div>
      </div>
      </div>

      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={`flex flex-col lg:container md:flex-row items-center lg:gap-16 gap-4 lg:mt-20 mt-10 lg:mb-20 mb-10 lg:p-0 p-4 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
          data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-2xl font-extrabold text-gray-900 leading-tight mb-4">
              {feature.title}
            </h1>
            <p className="text-sm lg:text-lg text-gray-700 mb-4 lg:mt-10">
              {feature.description}
            </p>
          </div>
          <div className="md:w-1/2 mb-10">
            <Image
              src={feature.imageUrl}
              alt="feature-image"
              className="object-cover object-center rounded-lg shadow-xl"
              width={600}
              height={400}
            />
          </div>
        </div>
      ))}
      <Foot />
    </>
  );
};

export default Overview;

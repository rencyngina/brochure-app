import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Components/Navnar";
import Foot from "@/Components/foot";
import Pricing from "../Components/pricing";
import SoftwareRequestForm   from "@/Components/SoftwareRequestForm";
import { IoCloseCircle } from 'react-icons/io5';

const features = [
  {
    id: 1,
    title: "Financial Planning Services",
    description:
      "A solid financial plan, essential in pursuing your financial goals, will include a detailed overview of your current financial situation and the strategies you’ll implement. But values-based financial planning takes things to the next level. Rather than just focusing on accumulating wealth, it aligns your values with your financial strategy. Leveraging your wealth to support the things that matter most to you allows you to make a meaningful impact and live a more purposeful life.",
    imageUrl: "/images/financial.jpeg",
    link: "/financial",
  },
  {
    id: 2,
    title: "Risk Management Insurance",
    description:
      "An inevitable part of life, risk can have a significant impact on your financial security. Our goal is to minimize the potential financial and other losses that may arise from risks to your assets, health, or business. As your financial advisors, our role is to safeguard your financial well-being, which may entail helping you mitigate certain risks. We take proactive measures to manage risk so we can help you pursue your ideal financial future and experience greater peace.",
    imageUrl: "/images/risk.jpeg",
    link: "/risk",
  },
  {
    id: 3,
    title: "Investment Planning",
    description:
      "Investment management plays a pivotal role in any comprehensive financial plan, serving as a road map for prioritizing your financial objectives, such as building wealth and safeguarding your family’s financial stability. As your financial advisor, we’ll take the time to understand your individual goals and tailor strategies that align with your unique needs. Partnering together, we can help you work toward your financial aspirations and enjoy greater financial freedom.",
    imageUrl: "/images/investment.jpeg",
    link: "/investment",
  },
  {
    id: 4,
    title: "Retirement Planning",
    description:
      "Whether retirement is right around the corner or several years away, partnering with a financial advisor can be instrumental in setting realistic financial objectives as you plan for the next phase of life. We’ll work closely with you to understand your unique circumstances and develop strategies that help make your retirement dreams a reality. Through our collaboration, we can help prepare you financially for the next chapter and allow you to enjoy the retirement you’ve always envisioned.",
    imageUrl: "/images/retirement.jpeg",
    link: "/retirement",
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
      <div className="flex flex-col items-center justify-center">
        <div className="lg:justify-center lg:items-center bg-[#03234D]  w-full lg:p-0 p-4 h-auto">
          <div className="lg:container mx-auto lg:flex lg:items-center lg:justify-between lg:gap-8 xl:gap-10 lg:mb-0 p-6 xl:p-12 lg:p-8">
            <div className="block lg:w-1/2">
              <p className="text-2xl lg:text-4xl text-yellow-600 mb-10">
                Financial Planning Services
              </p>
              <p className="text-lg lg:text-5xl text-white">
                Sovereign Wealth Management offers financial planning and
                <br />
                discretionary portfolio management services.
              </p>
              <p className="text-sm lg:text-xl mt-10 mb-10 text-white">
                Synchronizing your wealth with your values, values-based
                financial planning goes further, helping you make a
                <br />
                meaningful impact on the things that matter most.
              </p>
              
                <button className="mt-4 text-md ${scrollNav ? 'text-black' : 'text-yellow-300'} py-2 lg:py-4 px-5 lg:px-10 hover:bg-yellow-500 transition duration-300 border border-yellow-300 flex text-white text-sm lg:text-lg"
                onClick={toggleForm}
                >
                  SCHEDULE A MEETING
                </button>
            </div>
            <div className="hidden lg:block lg:mt-10">
              <div className="grid grid-flow-col grid-rows-1 grid-cols-3 gap-8">
                <div>
                  <Image
                    src="/images/retirement-serv-img.png"
                    alt=""
                    loading="lazy"
                    width={220}
                    height={20}
                    className="rounded-lg border-2 border-yellow-500 shadow-lg"
                  />
                </div>
                <div className="col-start-3">
                  <Image
                    src="/images/old1.jpg"
                    alt=""
                    loading="lazy"
                    width={200}
                    height={20}
                    className="rounded-lg border-2 border-yellow-500 shadow-lg"
                  />
                </div>
                <div className="">
                  <Image
                    src="/images/old3.jpg"
                    alt=""
                    loading="lazy"
                    width={200}
                    height={20}
                    className="rounded-lg border-2 border-yellow-500 shadow-lg"
                  />
                </div>
                <div className="">
                  <Image
                    src="/images/old4.jpg"
                    alt=""
                    loading="lazy"
                    width={200}
                    height={20}
                    className="rounded-lg border-2 border-yellow-500 shadow-lg"
                  />
                </div>
                <div className="row-start-1 col-start-2 col-span-2">
                  <Image
                    src="/images/old2.webp"
                    alt=""
                    loading="lazy"
                    width={450}
                    height={20}
                    className="rounded-lg border-2 border-yellow-500 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col lg:container md:flex-row items-center gap-4 mt-10 mb-10 p-4 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="md:w-1/2">
              <h1 className="text-2xl lg:text-3xl md:text-2xl font-extrabold text-gray-900 leading-tight mb-4">
                {feature.title}
              </h1>
              <p className="text-sm lg:text-lg text-gray-700 mb-4 lg:mt-10">
                {feature.description}
              </p>
              <Link href={feature.link} passHref>
                <p className="inline-block mt-4 font-bold text-white py-3 px-10 bg-[#03234D] hover:bg-yellow-500 transition duration-300">
                  Learn More
                </p>
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src={feature.imageUrl}
                alt="feature-image"
                className="object-cover object-center shadow-xl"
                width={600}
                height={400}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      <Pricing />
      {showForm && (
        <div className="fixed top-0 left-0 w-full  lg:w-full h-full lg:h-full bg-black bg-opacity-75 z-20 flex items-center justify-center">
          <div className="relative z-30">
            <SoftwareRequestForm />
            {/* Close button for the form */}
            <button
              onClick={toggleForm}
              className="absolute top-4 right-4 text-white hover:text-gray-300 mb-12">
              <IoCloseCircle className="w-8 h-8 text-gray-500" />
            </button>
          </div>
        </div>
      )}
      <Foot />
    </>
  );
};

export default Overview;

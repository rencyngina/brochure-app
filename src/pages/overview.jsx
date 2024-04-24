import React, { useState } from "react";
import Image from "next/image";
// import Testimonial from "./testimonial";
// import SoftwareRequestForm from "./SoftwareRequestForm";
import { IoCloseCircle } from "react-icons/io5";
import Navbar from "@/Components/Navnar";
import Foot from "@/Components/foot";

const features = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO) Services",
    description:
      "SEO is crucial for improving a website's visibility in search engine results. Highlight your agency's expertise in optimizing websites to rank higher in search engine results pages (SERPs). Explain the importance of keyword research, on-page optimization, and link building in improving search rankings and driving organic traffic to websites.",
    imageUrl: "/images/financial.jpeg",
  },
  {
    id: 2,
    title: "Content Creation and Marketing",
    description:
      "Content is king in the digital world. Showcase your agency's ability to create high-quality content that engages audiences and drives traffic. Explain how content marketing strategies can help businesses attract, educate, and convert potential customers through valuable and relevant content.",
    imageUrl: "/images/risk.jpeg",
  },
  {
    id: 3,
    title: "Website Design and Development(web and mobile)",
    description:
      "A professional website is essential for establishing a strong online presence. Highlight your agency's expertise in designing and developing custom websites that are visually appealing, user-friendly, and optimized for performance. Showcase examples of your work to demonstrate your design and development capabilities.",
    imageUrl: "/images/investment.jpeg",
  },
  {
    id: 4,
    title: "Content Creation and Marketing",
    description:
      "Content is king in the digital world. Showcase your agency's ability to create high-quality content that engages audiences and drives traffic. Explain how content marketing strategies can help businesses attract, educate, and convert potential customers through valuable and relevant content.",
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
    <div
      className="flex flex-col items-center justify-center  bg-[#F3F5F8] "
      id="features">
    <div className="lg:justify-center lg:items-center bg-[#284f83]  w-full">
      <h1 className='text-3xl text-yellow-600 mb-10 text-center mt-20'>Financial Planning Services</h1>
      <p className='text-5xl text-center'>Sovereign Wealth Management offers financial planning and
      <br />
       discretionary portfolio management services.</p>
      <p className='text-xl mt-10 mb-10 text-center'>Synchronizing your wealth with your values, values-based financial planning goes further, helping you make a
      <br /> 
      meaningful impact on the things that matter most.</p>
      <div className="flex lg:justify-center items-center justify-center lg:items-center mb-10 ">
      <button className="font-bold text-white py-4 px-20 bg-yellow-500 hover:bg-yellow-600 transition duration-300">
        Get Started
      </button>
      </div>
                
              </div>
              
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col lg:container md:flex-row items-center lg:gap-16 gap-4 lg:mt-20 mt-10 ${
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
            <div className="md:w-1/2">
              <Image
                src={feature.imageUrl}
                alt="feature-image"
                className="object-cover object-center rounded-lg shadow-xl "
                width={600}
                height={400}
              />
            </div>
          </div>
        ))}
    </div>
  <Foot />
    </>
  );
};

export default Overview;

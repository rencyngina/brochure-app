import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Components/Navnar";
import Foot from "@/Components/foot";
import Pricing from "../Components/pricing";

const features = [
  {
    id: 1,
    title: "Financial Planning Services",
    description:
      "A solid financial plan, essential in pursuing your financial goals, will include a detailed overview of your current financial situation and the strategies you’ll implement. But values-based financial planning takes things to the next level. Rather than just focusing on accumulating wealth, it aligns your values with your financial strategy. Leveraging your wealth to support the things that matter most to you allows you to make a meaningful impact and live a more purposeful life.",
    imageUrl: "/images/financial.jpeg",
    link: "/financial"
  },
  {
    id: 2,
    title: "Risk Management Insurance",
    description:
      "An inevitable part of life, risk can have a significant impact on your financial security. Our goal is to minimize the potential financial and other losses that may arise from risks to your assets, health, or business. As your financial advisors, our role is to safeguard your financial well-being, which may entail helping you mitigate certain risks. We take proactive measures to manage risk so we can help you pursue your ideal financial future and experience greater peace.",
    imageUrl: "/images/risk.jpeg",
    link: "/risk"
  },
  {
    id: 3,
    title: "Investment Planning",
    description:
      "Investment management plays a pivotal role in any comprehensive financial plan, serving as a road map for prioritizing your financial objectives, such as building wealth and safeguarding your family’s financial stability. As your financial advisor, we’ll take the time to understand your individual goals and tailor strategies that align with your unique needs. Partnering together, we can help you work toward your financial aspirations and enjoy greater financial freedom.",
    imageUrl: "/images/investment.jpeg",
    link: "/investment"
  },
  {
    id: 4,
    title: "Retirement Planning",
    description:
      "Whether retirement is right around the corner or several years away, partnering with a financial advisor can be instrumental in setting realistic financial objectives as you plan for the next phase of life. We’ll work closely with you to understand your unique circumstances and develop strategies that help make your retirement dreams a reality. Through our collaboration, we can help prepare you financially for the next chapter and allow you to enjoy the retirement you’ve always envisioned.",
    imageUrl: "/images/retirement.jpeg",
    link: "/retirement"
  },
];

const Overview = () => {
   return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center" id="features">
        <div className="lg:justify-center lg:items-center bg-[#03234D]  w-full lg:p-0 p-4">
          <h1 className="text-4xl lg:text-3xl text-yellow-600 mb-10 text-center mt-20">
            Financial Planning Services
          </h1>
          <p className="text-lg lg:text-5xl lg:text-center text-white">
            Sovereign Wealth Management offers financial planning and
            <br />
            discretionary portfolio management services.
          </p>
          <p className="text-sm lg:text-xl mt-10 mb-10 lg:text-center text-white">
            Synchronizing your wealth with your values, values-based financial
            planning goes further, helping you make a
            <br />
            meaningful impact on the things that matter most.
          </p>
          <div className="flex lg:justify-center items-center justify-center lg:items-center mb-10 ">
            <button className="font-bold text-white py-4 px-20 bg-yellow-500 hover:bg-yellow-600 transition duration-300">
              Get Started
            </button>
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
                className="object-cover object-center rounded-lg shadow-xl"
                width={600}
                height={400}
              />
            </div>
          </div>
        ))}
      </div>
      <Pricing />
      <Foot />
    </>
  );
};

export default Overview;
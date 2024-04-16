import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import FloatingObject from "./floating-object";


const Section1 = () => {
  const partners = [
    {
      name: "Fredrick Agwel",
      sector: "Associate",
      image: "/images/pic1.jpg",
    },
   
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
  };

  return (
    <>
    <FloatingObject />
      <div className="bg-gray-100 w-full  h-auto lg:h-[85vh] xl:h-[89vh]  ">
        <div className="container mx-auto lg:flex lg:items-center lg:justify-between lg:gap-8 xl:gap-10 lg:mb-0 p-6 xl:p-12 lg:p-8">
          <div className="lg:w-1/2 relative ">
            <Slider {...settings} className="w-full lg:h-[80vh]">
              {partners.map((partner, index) => (
                <div key={index} className="relative h-[60vh] lg:h-[70vh]">
                  <Image
                    width={1220}
                    height={980}
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                  
                </div>
              ))}
            </Slider>
          </div>
          <div className="lg:w-1/2 lg:ml-6 xl:ml-8">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Our Partners
            </h1>
            <div className="w-20 h-1 bg-[#A65A2A] mb-6"></div>
            <p className="text-yellow-500 text-lg lg:text-xl xl:text-2xl mb-4">
              Our lawyers are enthusiastic, committed, flexible, and
              commercially minded.
            </p>
            <p className="text-black text-md lg:text-lg xl:text-xl leading-normal mb-8">
              In our dynamic portfolio, we specialize in debt and equity issues,
              ensuring compliance with local regulations. Beyond mere adherence,
              we craft innovative financial strategies.
              <br />
              Our team includes partners, associates, and support staff; further
              on-call counsel is available for specific projects.
            </p>
            <div className="flex gap-4">
              
              <a href="mailto:info@royfordlaw.com">
                <button
                  className="mt-4 font-bold text-white py-3 px-8 bg-[#102e56] hover:bg-yellow-500 transition duration-300"
                >
                  <span className="text-white">Contact Us</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Section1;
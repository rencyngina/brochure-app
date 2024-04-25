/* eslint-disable react/no-unescaped-entities */

import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "@/Components/Navnar";
// import Head from "../components/head";
// import Foot from "../components/foot";
// import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";
import Foot from "@/Components/foot";
import { TiTick} from 'react-icons/ti'
import { IoMdCheckboxOutline } from "react-icons/io";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AboutWrapper = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  font-family:  "Playfair Display", serif;
`;

const HeroSection = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)),
    url(/images/oldppleha.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  color: white;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    height: 40vh;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  text-align: justify;
  animation: ${fadeIn} 1s ease-in-out;
  margin-top: 30px;

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #333;
    line-height: 1.5;
    
    @media(max-width:768px){
      font-size:16px;
    }
  }

  h1 {
    font-size: 2rem;
    // color: #ff4d4d;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 15px;
  }

  br {
    margin-bottom: 15px;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
    <Navbar />
      <HeroSection>
        <h1>About Us</h1>
      </HeroSection>
      <ContentSection>
      
      <div className="relative lg:mb-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
      <div className="col-span-2 lg:col-span-1">
        <ImageWithHover src="/images/pic1.jpg" width={300} height={200} />
      </div>
      <div className="col-span-1 lg:col-span-2">
        <ImageWithHover src="/images/pic2.jpg" width={300} height={200} />
      </div>
      <div className="col-span-1">
        <ImageWithHover src="/images/pic5.jpg" width={300} height={200} />
      </div>
      <div className="col-span-1">
        <ImageWithHover src="/images/pic4.jpg" width={300} height={200} />
      </div>
      <div className="col-span-1">
        <ImageWithHover src="/images/pic3.jpg" width={300} height={200} />
      </div>
    </div>
      </div>
      
        <p className="mt-10">Byron Moore is the CEO of Sovereign Wealth Management, an independent financial planning firm that serves clients in
          {" "}
          <span style={{ color: "#D0B220" }}>
          D.C., Virginia, and Maryland. In his role, he enjoys the flexibility of being able to serve clients with customized solutions.
          </span>{" "}
          Before founding Sovereign Wealth Management, Byron’s experience in the financial industry included working at larger firms, including serving as Vice President at Capital One. 
        </p>
        <p>
        He has always wanted to own his own firm and enjoys educating his clients and helping them be stewards of their finances. He finds satisfaction in prioritizing his clients’ best interest with no conflicts of interest. Byron believes that money can make you happy, but God gives you joy.
        </p>
        <p>
        Byron has been a financial advisor for over 20 years and thrives on making an impact in his clients’ lives. He specializes in working with individuals and business owners who are in the mid-to-late growth stage and focused on preservation and smart money management. 
        </p>
        <p>
        Outside of the office, Byron enjoys hiking, biking, watching sports, spending time with family, and donating his time to charitable causes. Byron is a native-born Liberian from Monrovia, and he and Divinity sponsor a School for the Blind Orphanage, for which they provide clothes, food, musical instruments, and advanced learning devices. They also visit regularly to help them be as productive and self-sufficient as possible.
        </p>
        <br></br>

        <div className="flex flex-col items-center">
        <h1 className="text-black text-4xl font-family: Playfair Display, serif;">My Plan of Care for You</h1>
      <div className="block lg:flex gap-8 lg:mt-10">
        <ul className="spaced-list">
          <li className="text-lg"><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Help you identify your financial goals and create a plan to achieve them.</li>
          <li className="text-lg"><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Provide guidance on investments that align with your values.</li>
          <li className="text-lg"><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Work with you to create a budget and manage your expenses, so you can live within your means while still pursuing your financial goals.</li>
          <li className="text-lg"><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Offer strategies to manage debt and improve your credit score, if needed.</li>
        </ul>
        <ul className="spaced-list">
          <li className="text-lg"><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Help you plan for major life events such as retirement, college tuition, or the purchase of a home.</li>
          <li className="text-lg"><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Regularly review your financial plan and make adjustments as needed, to keep you on track to meet your goals.</li>
          <li className="text-lg"><IoMdCheckboxOutline size={20} className="inline-block mr-2 text-yellow-500" />Serve as a resource for financial education and advice like estate planning, tax strategies, insurance options, etc.</li>
        </ul>
      </div>
    </div>
      </ContentSection>
      {/*footer*/}
      <Foot/>
    </AboutWrapper>
  );
};

const ImageWithHover = ({ src, width, height }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-transform duration-200 transform hover:scale-105">
      <Image src={src} className="object-cover" width={width} height={height} alt="" loading="lazy" />
    </div>
  );
};
export default About;
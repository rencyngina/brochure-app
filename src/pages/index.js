import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navnar";
import Footer from "@/Components/Footer/FooterLinks";
import Hero from "@/Components/HeroSection/Hero";
import Section1 from "../Components/section1";
import Section2 from "@/Components/section2";
import Bluesection from "@/Components/bluesection";
import Section3 from "@/Components/section3";
import Section4 from "@/Components/section4";
import FloatingChatIcon from "@/Components/FloatingChatIcon";


const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Section1 />
      <Bluesection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </main>
  );
}

export default Home;
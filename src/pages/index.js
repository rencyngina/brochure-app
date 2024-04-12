import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navnar";
import Footer from "@/Components/Footer/FooterLinks";
import Hero from "@/Components/HeroSection/Hero";
import Section1 from "@/Components/Section1";
import Section2 from "@/Components/section2";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Footer />
    </main>
  );
}

'use client'

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';


gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function Home() {
  

  
  return (
    <div className="">
      <HeroSection />
      <div className="h-[1000px] border-2 border-green-400"></div>

    </div>
  );
}

'use client'

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import {  ScrambleTextPlugin, SplitText } from "gsap/all";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

import gsap from "gsap";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import IntroSection from "./sections/IntroSection";
import ProjectsSection from "./sections/ProjectsSection";
import BingeableShowcase from "./components/BingeableShowcase";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP, MorphSVGPlugin, ScrambleTextPlugin);


export default function Home() {
  

  
  return (
    <div className="">
      <HeroSection />
      <IntroSection />
      <ProjectsSection />
      <BingeableShowcase />
      <div className="h-[1000px]"></div>

    </div>
  );
}

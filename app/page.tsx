'use client'

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import {  DrawSVGPlugin, Physics2DPlugin, ScrambleTextPlugin, SplitText } from "gsap/all";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";


import gsap from "gsap";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import IntroSection from "./sections/IntroSection";
import ProjectsSection from "./sections/ProjectsSection";
import BingeableShowcase from "./components/BingeableShowcase";
import TimelineSection from "./sections/TimelineSection";
import TechStack from "./components/TechStack";
import Testimonials from "./sections/Testimonials";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP, MorphSVGPlugin, ScrambleTextPlugin, DrawSVGPlugin, MotionPathPlugin, Physics2DPlugin);


export default function Home() {
  

  
  return (
    <div className="">
      <HeroSection />
      <IntroSection />
      <ProjectsSection />
      <BingeableShowcase />
      <TimelineSection />
      <Testimonials />
      <TechStack />

    </div>
  );
}

'use client'

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export default function HeroSection() {
  useGSAP(()=>{
    const titleSplit = SplitText.create('.hero-title', {
      type : 'chars'
    })

    const captionSplit = SplitText.create('.hero-caption', {
      type : 'lines'
    })

    const tl = gsap.timeline({
      delay: 1,
    })

    tl.to(".hero-content", {
      opacity:1,
      y: 0,
      ease : 'power1.inOut'
    }).to('.headshot', {
      clipPath: "circle(75% at 50% 50%)",
      duration: 1,
      ease : 'circ.out'
    }, "-=0.5").from(titleSplit.chars, {
      yPercent: -100,
      stagger : 0.02,
      ease : 'power2.out',
      opacity: 0,

    }, "-=0.5").to('.hero-caption', {
        clipPath:'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
        duration:0.3,
        y:0,
        ease:'power1.inOut'
    }, '-=0.5')

    const heroTL = gsap.timeline({
      scrollTrigger: {
        trigger:'.hero-section',
        start : '1% top',
        end : 'bottom top',
        scrub : true,
      }
    })

    heroTL.to('.hero-section', {
        rotate : 7,
        scale : 0.9,
        yPercent: 30,
        ease : 'power1.inOut'
    })

  })
  return (
    <div className="main-container h-dvh overflow-hidden relative ">
      <section className="hero-section h-full bg-amber-600">
        <div className="hero-content opacity-0 w-full h-full justify-center items-center flex flex-col translate-y-30 gap-3 pt-30 overflow-hidden">
          <div style={{   clipPath: "circle(0% at 50% 50%)"}} className="headshot w-[250px] h-[250px] rounded-full overflow-hidden">
            <Image 
              src='/headshot.jpg'
              width={1000}
              height={1000}
              alt="profile-image"
              className="object-cover w-full h-full scale-150 -translate-x-2 translate-y-6"
            />
          </div>

          <h1 className="hero-title text-6xl font-bold">Hey there!</h1>
          <p style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)"}} className="hero-caption text-lg w-[500px] overflow-hidden">My name is Andrew Jung, some folks call me Fadesto on the internet (it's a long story). Welcome to my site, let me give you a tour.</p>

        </div>
      </section>

    </div>
  );
}

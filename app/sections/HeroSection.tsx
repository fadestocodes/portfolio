'use client'

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export default function HeroSection() {
  useGSAP(()=>{
    // const titleSplit = SplitText.create('.hero-title', {
    //   type : 'chars'
    // })

    // const captionSplit = SplitText.create('.hero-caption', {
    //   type : 'lines'
    // })

    // const tl = gsap.timeline({
    //   delay: 1,
    // })

    // tl.to(".hero-content", {
    //   opacity:1,
    //   y: 0,
    //   ease : 'power1.inOut'
    // }).to('.headshot', {
    //   clipPath: "circle(75% at 50% 50%)",
    //   duration: 1,
    //   ease : 'circ.out'
    // }, "-=0.5").from(titleSplit.chars, {
    //   yPercent: -100,
    //   stagger : 0.02,
    //   ease : 'power2.out',
    //   opacity: 0,

    // }, "-=0.5").to('.hero-caption', {
    //     clipPath:'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
    //     duration:0.3,
    //     y:0,
    //     ease:'power1.inOut'
    // }, '-=0.5')

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
        scale : 0.7,
        yPercent: 30,
        ease : 'power1.inOut'
    })

    const titleSplit = SplitText.create('.hero-caption', {
      type : 'words ,lines'
    })

    const dollarSplit = SplitText.create('.dollars', {
      type: 'chars'
    })

    const tl = gsap.timeline()

    tl.from(titleSplit.words, {
      ease:'power1.inOut',
      stagger:0.02,
      opacity: 0,
      duration:1,
      delay:0.1,
      y:50
    }).from(dollarSplit.chars, {
      ease:'power1.inOut',
      stagger:0.3,
      opacity: 0,
      duration:1,
      delay:0.5,
      scale:1.5,
      y:50
    }).to('.dollars', {
      scale: 1.1,
      duration: 0.6,
      ease: 'back.out',
      delay:1,
      repeat:2,     // infinite loop
      yoyo: true,   
    })


  })
  return (
    <div className="main-container h-dvh overflow-hidden relative bg-black">
      <section className="hero-section h-full ">
        <div className="w-dvw h-dvh absolute  aspect-[16/9] -z-10">
          <Image
            src='/hero-image.png'
            alt="hero-image"
            fill
            priority
            className="object-cover -z-10 absolute "
          />
        </div>
        <div className="hero-content  w-full h-full justify-center items-center flex flex-col translate-y-30 gap-3 pt-30 overflow-hidden relative">
          {/* <div style={{   clipPath: "circle(0% at 50% 50%)"}} className="headshot w-[250px] h-[250px] rounded-full overflow-hidden">
            <Image 
              src='/headshot.jpg'
              width={1000}
              height={1000}
              alt="profile-image"
              className="object-cover w-full h-full scale-150 -translate-x-2 translate-y-6"
            />
          </div> */}

          {/* <h1 className="hero-title">Hey there</h1> */}
          <p style={{ }} className="hero-caption text-8xl -mt-56 w-[600px] self-center  font-heading tracking-tighter  font-medium text-sand ">I turn <span className="text-[#2e54d1]">computer gibberish</span> into things that make businesses</p>
          <div className="dollars text-[#2e54d1] absolute bottom-38  left-147  0 text-8xl font-heading tacking-tighter self-center text-center"> $$$</div>

        </div>
      </section>

    </div>
  );
}

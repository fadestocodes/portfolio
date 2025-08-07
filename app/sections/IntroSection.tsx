import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const IntroSection = () => {

    

    useGSAP(()=> {

        const intro1 = SplitText.create('.intro-1', {
            type : 'lines'
        })
    
        const intro2 = SplitText.create('.intro-2', {
            type : 'lines'
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:'.intro-section',
                start : 'top center',
                end : 'bottom top',
                scrub : true,
                markers: true

                }
        })

        gsap.from(intro1.lines, {
            opacity: 0,
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
              trigger: ".intro-1",
              start: "top center",
              end: "50% center",
              scrub: true,
            },
        })
        gsap.from(intro2.lines, {
            opacity: 0,
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
              trigger: ".intro-2",
              start: "top center",
              end: "50% center",
              scrub: true,
            },
        })


    })

  return (
    <div className="intro-section w-full flex flex-col min-h-dvh items-center z-20 relative">
        <div className=" flex flex-col  items-center text-7xl w-[900px] ">
            <h2 className="intro-1 ">Pleased to meet ya, I'm a software developer based out of Vancouver, Canada.</h2>
            <h2 className="intro-2 pt-30">I enjoy building everything across the full stack, but what I'm most passionate about is creating something impactful and user facing.</h2>
        </div>
    </div>
  )
}

export default IntroSection
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

        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger:'.intro-section',
        //         start : 'top center',
        //         end : 'bottom top',
        //         scrub : true,
        //         markers: true

        //         }
        // })

        const tl = gsap.timeline()

        tl.from('.intro-1', {
            opacity: 0,
            ease: "power1.in",
            yPercent:70,
            stagger: 1,
            scrollTrigger: {
              trigger: ".intro-1",
              start: "top bottom",
              end: "50% center",
              scrub: true,
            },
        })
        tl.from('.intro-2', {
            opacity: 0,
            ease: "power1.in",
            yPercent:70,
            stagger: 1,
            scrollTrigger: {
              trigger: ".intro-2",
              start: "top bottom",
              end: "50% center",
              scrub: true,
            },
        })

        const heroTL = gsap.timeline({
            scrollTrigger: {
              trigger:'.intro-section',
              start : '1% top',
              end : 'bottom top',
              scrub : true,
            }


        })
        heroTL.to('.intro-section', {
            // rotate : 7,
            // scale : 0.9,
            yPercent: 30,
            ease : 'power1.inOut'
        })


    })

  return (
    <div className="intro-section w-full flex flex-col min-h-dvh items-center relative bg-amber-300" style={{zIndex:-1}}>
        <div className=" flex flex-col  items-center text-7xl w-[900px] pt-[200px] pb-[500px] ">
            <h2 className="intro-1 ">👋 Pleased to meet ya, I'm a software developer based out of Vancouver, Canada.</h2>
            <h2 className="intro-2 pt-30">I enjoy building everything across the full stack, but what I'm most passionate about is creating something impactful and user facing.</h2>
        </div>
    </div>
  )
}

export default IntroSection
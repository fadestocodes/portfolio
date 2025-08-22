import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const IntroSection = () => {

    

    useGSAP(()=> {

        const intro1 = SplitText.create('.intro-1', {
            type : 'words'
        })
    
        const intro2 = SplitText.create('.intro-2', {
            type : 'words'
        })
    
        const intro3 = SplitText.create('.intro-3', {
            type : 'words'
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

        // const tl = gsap.timeline()

        // tl.from('.intro-1', {
        //     opacity: 0,
        //     ease: "power1.in",
        //     yPercent:70,
        //     stagger: 1,
        //     scrollTrigger: {
        //       trigger: ".intro-1",
        //       start: "top bottom",
        //       end: "50% center",
        //       scrub: true,
        //     },
        // })
        // tl.from('.intro-2', {
        //     opacity: 0,
        //     ease: "power1.in",
        //     yPercent:70,
        //     stagger: 1,
        //     scrollTrigger: {
        //       trigger: ".intro-2",
        //       start: "top bottom",
        //       end: "50% center",
        //       scrub: true,
        //     },
        // })

        // const heroTL = gsap.timeline({
        //     scrollTrigger: {
        //       trigger:'.intro-section',
        //       start : '1% top',
        //       end : 'bottom top',
        //       scrub : true,
        //     }


        // })
        // heroTL.to('.intro-section', {
        //     // rotate : 7,
        //     // scale : 0.9,
        //     yPercent: 30,
        //     ease : 'power1.inOut'
        // })

        gsap.to(intro1.words, {
          color: '#2e54d1',
          ease : 'power1.inOut',
          stagger : 1,
          scrollTrigger: {
            start: 'top 70%',
            end : '30% center',
            trigger: '.intro-1',
            scrub: true

          }
        })

        gsap.to(intro2.words, {
          color: '#2e54d1',
          ease : 'power1.inOut',
          stagger : 1,
          scrollTrigger: {
            start: 'top 60%',
            end : 'bottom center',
            trigger: '.intro-2',
            scrub: true

          }
        })

        gsap.to(intro3.words, {
          color: '#2e54d1',
          ease : 'power1.inOut',
          stagger : 1,
          scrollTrigger: {
            start: 'top 60%',
            end : 'bottom center',
            trigger: '.intro-3',
            scrub: true

          }
        })

        const revealTL = gsap.timeline({
          delay: .5,
          scrollTrigger: {
            trigger:'.msg-text-scroll',
            start : 'top 60%',
          }
        })
        
        revealTL.to('.msg-text-scroll', {
          duration: 1,
          x: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.inOut",
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
            rotate : 7,
            scale : 0.3,
            yPercent: 30,
            ease : 'power1.inOut'
        })

        

        gsap.to('.impactful-container', {
          delay: .5,
          duration: 1,
          x: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.inOut",
          scrollTrigger: {
            trigger:'.impactful-container',
            start : 'top 45%',
            markers: true
          }
        })
        gsap.to('.user-facing-container', {
          delay: .5,
          duration: 1,
          x: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.inOut",
          scrollTrigger: {
            trigger:'.user-facing-container',
            start : 'top 50%',
            markers: true
          }
        })
        gsap.to('.and', {
          y:0,
          ease:'bounce.inOut',
          opacity:1,
          delay:1,
          scrollTrigger: {
            trigger:'.and',
            start : 'top 60%',
            markers: true
          }


        })



    })

  return (
    <div className="intro-section w-dvw flex flex-col min-h-dvh items-center relative  bg-black  pb-[500px] " style={{}}>

      
        <div className=" flex flex-col  items-start  w-[1000px] pt-[200px] pb-[500px] justify-start ">
            <h2 className="intro-1  ">👋 Pleased to meet ya, I'm a software developer based in </h2>
              <div 
                style={{
                  clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",

                }}
                className="msg-text-scroll">
                   <div className="vancouver-wrapper bg-sand   justfiy-center items-center">
                      <h2 className="vancouver-canada text-black">Vancouver, Canada</h2>
                   </div>
              </div>
            <h2 className="intro-2">I enjoy building everything across the full stack, but what I'm most passionate about is creating something</h2>
            {/* <span className="most-passionate">most passionate about</span> */}
            {/* <h2 className="intro-3">is creating something</h2> */}

              <div 
                style={{
                  clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",

                }}
                className="impactful-container">
                   <div className="impactful-wrapper bg-sand   justfiy-center items-center">
                      <h2 className="impactful text-black">impactful</h2>
                   </div>
              </div>
              <span className="and opacity-0">&</span>
              <div 
                  style={{
                    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",

                  }}
                  className="user-facing-container">
                    <div className="user-facing-wrapper bg-sand   justfiy-center items-center">
                        <h2 className="user-facing text-black">user-facing</h2>
                    </div>
                </div>
        </div>
       
    </div>
  )
}

export default IntroSection
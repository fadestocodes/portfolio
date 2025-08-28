import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';
import Image from 'next/image';

const TimelineSection = () => {

    useGSAP(()=>{

        
        const pulses = gsap
        .timeline({
          defaults: {
            duration: 0.05,
            autoAlpha: 1,
            scale: 2,
            transformOrigin: "center",
            ease: "elastic(2.5, 1)"
          }
        })
        .to(".ball02, .text01, #text-2011 ", {}, 0.04)
        .to(".ball03, .text02, #text-2011-2 , #uoft", {}, 0.07)
        .to(".ball04, .text03, #text-2014", {}, 0.13)
        .to(".ball05, .text04, #text-2015", {}, 0.17)
        .to(".ball06, .text05, #text-2016, #chair, #haircut", {}, 0.2)
        .to(".ball07, #text-barbering-great, #competition, #pompodour, #combover", {}, 0.23)
        .to(".ball08, .text06, #text-2023", {}, 0.42)
        .to(".ball09, .text07, #text-2024, #camera-op, #still-1, #still-2, #still-3", {}, 0.54)
        .to(".ball10, .text08, #text-2025", {}, 0.62)
        
        const main = gsap
        .timeline({
          defaults: { duration: 1 },
          scrollTrigger: {
            trigger: "#svg-stage",
            scrub: true,
            start: "top 10% ",
            end: "bottom top",
            markers:true
          }
        })
        .to(".ball01", { duration: 0.01, autoAlpha: 1 })
        .from(".theLine", { drawSVG: 0 }, 0)
        .to(
          ".ball01",
          {
            motionPath: {
              path: ".theLine",
              align: ".theLine",
              alignOrigin: [0.5, 0.5]
            }
          },
          0
        )
        .add(pulses, 0);

    })

    
  return (
    <div className='timeline  w-dvw relative pb-40'>

            <Image
                id='uoft'
                src='/uoft.jpg'
                width={150}
                height={150}
                alt='university-of-toronto'
                className='timeline-pic  absolute top-[390px] left-[1200px] opacity-0 rotate-6'
            />
            <Image
                id='chair'
                src='/shop-3.jpg'
                width={120}
                height={120}
                alt='barber-chair'
                className='timeline-pic  absolute top-[1186px] left-[1100px] opacity-0 -rotate-3'
            />
            <Image
                id='haircut'
                src='/haircut.jpg'
                width={120}
                height={120}
                alt='haircut-1'
                className='timeline-pic  absolute top-[1100px] left-[1300px] opacity-0 rotate-3'
            />
            
            <Image
                id='pompodour'
                src='/pompodour.jpg'
                width={120}
                height={120}
                alt='haircut-2'
                className='timeline-pic  absolute top-[1520px] left-[800px] opacity-0'
            />
            <Image
                id='combover'
                src='/combover.jpg'
                width={120}
                height={120}
                alt='haircut-3'
                className='timeline-pic  absolute top-[1530px] left-[1000px] opacity-0 -rotate-5'
            />
            <Image
                id='competition'
                src='/competition.jpg'
                width={120}
                height={120}
                alt='competition'
                className='timeline-pic  absolute top-[1500px] left-[1200px] opacity-0 rotate-5'
            />
            <Image
                id='camera-op'
                src='/camera-operating.jpg'
                width={120}
                height={120}
                alt='camera-operating'
                className='timeline-pic  absolute top-[2000px] left-[600px] opacity-0 -rotate-5'
            />
            <Image
                id='still-1'
                src='/still-5.jpg'
                width={180}
                height={180}
                alt='film-still-1'
                className='timeline-pic  absolute top-[2150px] left-[800px] opacity-0 rotate-6'
            />
            <Image
                id='still-2'
                src='/still-6.jpg'
                width={180}
                height={180}
                alt='film-still-2'
                className='timeline-pic  absolute top-[2000px] left-[920px] opacity-0 rotate-6'
            />
            <Image
                id='still-3'
                src='/best-cine.png'
                width={250}
                height={250}
                alt='film-still-3'
                className='timeline-pic  absolute top-[2100px] left-[1300px] opacity-0 -rotate-3'
            />

       
        <svg id="svg-stage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 2526.3">
            <path className='theLine' d="M-5,0c303.3,153.3,405,303.3,305,450s-156.7,246.7-170,300c-20,66.7,36.7,150,170,250,133.3,100,117.4,455-115.9,488.4-88.3,15.5,121,58.8,158.6,80.1s-116.1,19.6-143.8,52.3,90.2,8.2,114.6,32.7-104.8,31.1-77,63.8c27.8,32.7,196.2-1.6,241.9,93.2s-336.7,14-294.2,94.8c45.8,87,287.7,148.8,243.6,299.1S-12.1,2506.7-12.1,2506.7" fill="none" stroke="#000" strokeWidth="10" />
            <circle className="ball ball01" cx="50" cy="100" r="20" />
            <circle className="ball ball02" cx="278" cy="201" r="20" />
            <circle className="ball ball03" cx="327" cy="401" r="20" />
            <circle className="ball ball04" cx="130.3" cy="799" r="20" />
            <circle className="ball ball05" cx="303.3" cy="1000" r="20" />
            <circle className="ball ball06" cx="384" cy="1192.2" r="20" />
            <circle className="ball ball07" cx="333.4" cy="1392.2" r="20" />
            <circle className="ball ball08" cx="468.1" cy="1792.2" r="20" />
            <circle className="ball ball09" cx="281.8" cy="1992.2" r="20" />
            <circle className="ball ball10" cx="430" cy="2191.1" r="20" />
            <text className="text01" x="50" y="194.11">2011</text>
            <text className="text02" x="50" y="394.11">2011</text>
            <text className="text03" x="50" y="724.11">2014</text>
            <text className="text04" x="50" y="994.11">2015</text>
            <text className="text05" x="50" y="1186.31">2016</text>
            <text className="text06" x="50" y="1786.31">2023</text>
            <text className="text07" x="50" y="1986.31">2024</text>
            <text className="text08" x="50" y="2186.81">2025</text>
        </svg>

        <div id='text-2011' className='timeline-text  absolute top-[200px] left-[800px]  ' > 
            <p>Graduated from Burnaby North Secondary with the Honour Cord</p>
        </div>
        <div id='text-2011-2' className='timeline-text absolute top-[390px] left-[800px]'>
            <p>Went to the University of Toronto for Engineering</p>
        </div>
        <div id='text-2014' className='timeline-text absolute top-[770px] left-[800px]'>
            <p>Completed 2 years, but withdrew from the program upon realizing it wasn't for me.</p>
        </div>
        <div id='text-2015' className='timeline-text absolute top-[990px] left-[800px]'>
            <p>Enrolled and completed the Associates Certificate for Graphic Design at BCIT</p>
        </div>
        <div id='text-2016' className='timeline-text absolute top-[1186px] left-[800px]'>
            <p>Entered the world of creative barbering</p>
        </div>
        <div id='text-barbering-great' className='timeline-text absolute top-[1392] left-[800px]'>
            <p>It was great at first. I participated in competitions, built a steady clientele, became self-employed with my best month of doing $9.4k in sales</p>
        </div>
        <div id='text-2023' className='timeline-text absolute top-[1792px] left-[800px]'>
            <p>...but over time I lost the passion, felt limited in my growth, and simply felt like I can achieve more elsewhere.</p>
        </div>
        <div id='text-2024' className='timeline-text absolute top-[1880px] left-[800px]'>
            <p>I explored a few different paths, while keeping my barbering job. Most notably I pursued cinematography where I earned a 'Best Cinematography Award' nomination at a local film festival. </p>
        </div>
        <div id='text-2025' className='timeline-text absolute top-[2400px] left-[800px]'>
            <p>Ultimately, I learned two things about myself after this exploration phase. I love technology and creative problem solving. So I dove head first in software development and after learning on my own, I built and launched my mobile app Bingeable, which has a real growing user base.</p>
            <p>I am now looking to apply my skills and learnings at a place where I can contribute and grow further...</p>
        </div>

    </div>
  )
}

export default TimelineSection
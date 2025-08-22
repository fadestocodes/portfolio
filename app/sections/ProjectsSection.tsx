import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import React from 'react'
import gsap from 'gsap'
import BingeableShowcase from '../components/BingeableShowcase'

const ProjectsSection = () => {

    useGSAP(() => {
        const textSplit1 = SplitText.create('.projects-text1', {
            type : 'chars'
        })

        const tl = gsap.timeline()

        tl.to('.projects-text1', {

        })

        // gsap.from(textSplit1.chars, {
        //     yPercent:200,
        //     // stagger:0.01,
        //     opacity:0,
        //     scale:2,
        //     ease:'power1.inOut',
        //     scrollTrigger:{
        //         trigger:'.projects-container',
        //         start:'top 80%',
        //         end:'top 20%',
        //         scrub:true

        //     }
        // })

        gsap.to('.title', {
            // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration:1,
            scale:1,
            scrollTrigger:{
                trigger:'.projects-container',
                start:'top 55%',
                end:'top 20%',
                scrub:true,
                markers:true

            }
        })

       


})
    

  return (
    <div className='projects-container flex flex-col  justify-center items-center z-50 bg-black ' style={{zIndex:50}}>
        <div className='title scale-[10]  justify-center items-center flex flex-col rounded-xl'   >
            <h2 className='projects-text1 text-3xl font-bold  font-heading text-sand tracking-tighter'>What I've been</h2>
            <h2 style={{ }} className='projects-text2  text-3xl font-bold  font-heading text-sand tracking-tighter'>Working On</h2>
        </div>
        {/* <BingeableShowcase /> */}
        

    </div>
  )
}

export default ProjectsSection
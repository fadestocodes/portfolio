import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { frontEndPoints, backendData } from '../lib/bingeablePoints'
import { Download, FilePen, Star } from 'lucide-react';
import { SplitText } from 'gsap/all'
import LogoScroll from './LogoScroll'
import { frontEndIcons, backendIcons } from '../lib/techStackLogos'




const BingeableShowcase = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const downloadsRef = useRef<HTMLSpanElement>(null)
  const signUpRef = useRef<HTMLSpanElement>(null)
  const ratingRef = useRef<HTMLSpanElement>(null)
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const backendImageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const [val, setVal] = useState(0)
  const [ frontEndHoverIndex, setFrontEndHoverIndex ] = useState(0)
  const [ backEndHoverIndex, setBackEndHoverIndex ] = useState(0)
  const [ frontEndImage, setFrontEndImage ] = useState(frontEndPoints[0]?.image)
  const [ backendImage, setBackendImage ] = useState(backendData[0]?.image)

  const frontEndImages = frontEndPoints.map( data => (data.image) )
  const backendImages = backendData.map( data => (data.image) )

  useEffect(() => {
    if (frontEndHoverIndex === null) return;
  
    imageRefs.current.forEach((img, index) => {
      if (!img) return;
  
      if (index === frontEndHoverIndex) {
        gsap.to(img, {
          top: `${index * 40 - 60}px`, // raise up
          zIndex: 99,
          duration: 0.4,
          ease: 'back.out',
        });
      } else {
        gsap.to(img, {
          top: `${index * 40}px`,
          zIndex: index,
          duration: 0.4,
          ease: 'back.out',
        });
      }
    });
  }, [frontEndHoverIndex]);

  useEffect(() => {
    if (backEndHoverIndex === null) return;
  
    backendImageRefs.current.forEach((img, index) => {
      if (!img) return;
  
      if (index === backEndHoverIndex) {
        gsap.to(img, {
          top: `${index * 40 - 60}px`, // raise up
          zIndex: 99,
          duration: 0.4,
          ease: 'back.out',
        });
      } else {
        gsap.to(img, {
          top: `${index * 40}px`,
          zIndex: index,
          duration: 0.4,
          ease: 'back.out',
        });
      }
    });
  }, [backEndHoverIndex]);
  

  useGSAP(() => {
    if (!sliderRef.current || !wrapperRef.current) return;

    const downloadObj = { val: 0 }
    const signUpObj = { val: 0 }
    const ratingObj = { val: 0 }


    const scrollAmount =
      sliderRef.current.scrollWidth - window.innerWidth

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current, // ✅ use wrapper
        start: 'top top',
        end: `+=${scrollAmount}`,
        scrub: true,
        pin: true,
      },
    })

   


    tl.to(sliderRef.current, {
      x: -scrollAmount, // ✅ move only the slider
      ease: 'none',
    })


    gsap.timeline({
        scrollTrigger: {
          trigger: '.slide-1',
          start: 'center bottom',
          end: 'right center',
        //   markers:true,
          scrub:true
        },
      })
      .to('.image-1', {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        ease: 'power1.out',
      })
      .to('.slide-1-text', {
        opacity: 1,
        duration:.5,
        y: 30,
        ease: 'power1.out',
      },'-=0.05')
      .to('.count-up', {
        opacity: 1,
        duration:.5,
        y: 30,
        ease: 'power1.out'
      },'-=0.5')
      

      ScrollTrigger.create({
        trigger: '.count-up',
        start: 'top 70%',  // when .count-up is near viewport bottom
        onEnter: () => {
          gsap.to(downloadObj, {
            val: 385,
            duration: 2.5,
            ease: 'power1.out',
            onUpdate: () => {
              if (downloadsRef.current) {
                downloadsRef.current.textContent = Math.floor(downloadObj.val).toLocaleString();
              }
            },
          });
        },
        onLeaveBack: () => {
            gsap.to(downloadObj, {
              val: 0,
              duration: 1,
              ease: 'power1.out',
              onUpdate: () => {
                if (downloadsRef.current) {
                  downloadsRef.current.textContent = Math.floor(downloadObj.val).toLocaleString();
                }
              },
            });
          },
      });

      ScrollTrigger.create({
        trigger: '.count-up',
        start: 'top 70%',  // when .count-up is near viewport bottom
        onEnter: () => {
          gsap.to(signUpObj, {
            val: 292,
            duration: 2,
            ease: 'power1.out',
            onUpdate: () => {
              if (signUpRef.current) {
                signUpRef.current.textContent = Math.floor(signUpObj.val).toLocaleString();
              }
            },
          });
        },
        onLeaveBack: () => {
            gsap.to(signUpObj, {
              val: 0,
              duration: 1,
              ease: 'power1.out',
              onUpdate: () => {
                if (signUpRef.current) {
                  signUpRef.current.textContent = Math.floor(signUpObj.val).toLocaleString();
                }
              },
            });
          },
      });

      ScrollTrigger.create({
        trigger: '.count-up',
        start: 'top 70%',  // when .count-up is near viewport bottom
        onEnter: () => {
          gsap.to(ratingObj, {
            val: 5.0    ,
            duration: 1.7,
            ease: 'power1.out',
            onUpdate: () => {
              if (ratingRef.current) {
                ratingRef.current.textContent = ratingObj.val.toFixed(1);
              }
            },
          });
        },
        onLeaveBack: () => {
            gsap.to(ratingObj, {
              val: 0,
              duration: 1,
              ease: 'power1.out',
              onUpdate: () => {
                if (ratingRef.current) {
                    ratingRef.current.textContent = ratingObj.val.toFixed(1);
                }
              },
            });
          },
      });


    //   ScrollTrigger.create({
    //     trigger: '.front-end',
    //     start: 'top 70%',  
    //     onEnter: () => {
    //       gsap.to(ratingObj, {
    //         val: 5.0    ,
    //         duration: 1.7,
    //         ease: 'power1.out',
    //         onUpdate: () => {
    //           if (ratingRef.current) {
    //             ratingRef.current.textContent = ratingObj.val.toFixed(1);
    //           }
    //         },
    //       });
    //     },
    //     onLeaveBack: () => {
    //         gsap.to(ratingObj, {
    //           val: 0,
    //           duration: 1,
    //           ease: 'power1.out',
    //           onUpdate: () => {
    //             if (ratingRef.current) {
    //                 ratingRef.current.textContent = ratingObj.val.toFixed(1);
    //             }
    //           },
    //         });
    //       },
    //   });

    //   const frontendTL = gsap.timeline({
    //     scrollTrigger:{
    //         trigger : '#front-end',
    //         markers:true,
    //         start : 'right 10%',
    //     }
    //   })
    //   .from('.front-end-text > div', {
    //     opacity: 0,
    //     y: 20,
    //     stagger: 0.2,
    //     duration: 0.5,
    //     delay:0.5,

    //     ease: 'power1.out',
    //   })


      gsap.from('.front-end-images', {
        scrollTrigger:{
            start : 'center 10%',
            trigger:'.front-end-images'
        },
        opacity : 0,
        duration:1.2,
        y:100,
        ease:'power1.inOut'
      })

      gsap.to('.front-end-title', {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity:1,
        ease:'power1.inOut',
        scrollTrigger:{
            trigger:'.front-end-images',
            start : 'center 80%',
            containerAnimation:tl,
        }
      })

      const frontEndSplit = SplitText.create('.front-end-para', {
        type : 'words, lines'
      })
      const backendSplit = SplitText.create('.back-end-para', {
        type : 'words, lines'
      })
      const challengesSplit = SplitText.create('.challenges-para', {
        type: 'words, lines'
      })

      gsap.from(frontEndSplit.words, {
        yPercent: 100,
        rotate: 5,
        opacity:0,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
        delay:0.5,
        scrollTrigger:{
            trigger:'.front-end-images',
            start : 'center 80%',
            containerAnimation:tl,
        }
      })

      gsap.from('.back-end-images', {
        scrollTrigger:{
            trigger:'.front-end-text',
            start : 'bottom center',
            end:'bottom center',
            containerAnimation:tl,
        },
        opacity : 0,
        duration:1.2,
        y:100,
        ease:'power1.inOut'
      })

      gsap.to('.back-end-title', {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity:1,
        ease:'power1.inOut',
        scrollTrigger:{
            start : 'center 70%',
            end:'bottom center',
            containerAnimation:tl,
            trigger:'.back-end-images',       
            // markers:true     


        }
      })

      gsap.from(backendSplit.words, {
        yPercent: 100,
        rotate: 5,
        opacity:0,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
        delay:0.5,
        scrollTrigger:{
            containerAnimation:tl,
            start : 'center 70%',
            end:'bottom center',
            trigger:'.back-end-images'            

        }
      })
      gsap.to('.challenges-title', {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity:1,
        ease:'power1.inOut',
        scrollTrigger:{
            start : 'center 70%',
            end:'bottom center',
            containerAnimation:tl,
            trigger:'.challenges',       
            // markers:true     


        }
      })

      gsap.from(challengesSplit.words, {
        yPercent: 100,
        rotate: 5,
        opacity:0,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
        delay:0.5,
        scrollTrigger:{
            containerAnimation:tl,
            start : 'center 70%',
            // end:'bottom center',
            trigger:'.challenges'            

        }
      })

      gsap.fromTo(
        '.bingeable-logo-final',
        {
          scale: 0,
          opacity: 0,
          rotation: -180,
          filter: 'blur(10px)',
         
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          filter: 'blur(0px)',
          duration: 3,
          ease: 'elastic.out(1, 0.4)',
          scrollTrigger:{
            trigger:'.bingeable-final',
            start:'left 20%',
            containerAnimation: tl,
            toggleActions: 'restart none restart none',
            onLeave: () => {
              // Instantly hide when it scrolls out
              gsap.set('.bingeable-logo-final', {
                scale: 0,
                opacity: 0,
                rotation: -180,
                filter: 'blur(10px)',
              })
            },
            onEnterBack: () => {
              gsap.set('.bingeable-logo-final', {
                scale: 0,
                opacity: 0,
                rotation: -180,
                filter: 'blur(10px)',
              })
            }
        }
        }
      )

      gsap.to('#challenge-problem-1', {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity:1,
        xPercent:-20,
        ease:'power1.inOut',
        scrollTrigger:{
            start : 'center 70%',
            end:'bottom center',
            containerAnimation:tl,
            trigger:'.challenges-1',       
        }
      })
      gsap.to('#challenge-solution-1', {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: .7,
        opacity:1,
        delay:0.3,
        ease:'power1.inOut',
        scrollTrigger:{
            start : 'center 70%',
            end:'bottom center',
            containerAnimation:tl,
            trigger:'.challenges-1',       
        }
      })
      gsap.to('#challenge-problem-2', {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity:1,
        ease:'power1.inOut',
        scrollTrigger:{
            start : 'left 70%',
            containerAnimation:tl,
            trigger:'.challenges-2',       
        }
      })
      gsap.to('#challenge-solution-2', {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: .7,
        opacity:1,
        delay:0.3,
        ease:'power1.inOut',
        scrollTrigger:{
            start : 'left 70%',
            containerAnimation:tl,
            trigger:'.challenges-2',       
        }
      })
      gsap.to('#challenge-problem-3', {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity:1,
        // xPercent:40,
        ease:'power1.inOut',
        scrollTrigger:{
            start : 'left 70%',
            containerAnimation:tl,
            trigger:'.challenges-3',       
        }
      })
      gsap.to('#challenge-solution-3', {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: .7,
        opacity:1,
        delay:0.3,
        ease:'power1.inOut',
        scrollTrigger:{
            start : 'left 70%',
            containerAnimation:tl,
            trigger:'.challenges-3',       
        }
      })

    

     


      
    


  }, [])

  return (
    <div ref={wrapperRef} className="bingeable-wrapper h-dvh w-full">
      <div ref={sliderRef} className="bingeable-slider flex h-full w-max">
        <div className="bingeable-element w-screen h-full flex items-center justify-center">
            <div className="slide-1 flex flex-row justify-center items-center " >           
                <Image 
                    src='/bingeable-main-4.png'
                    width={1100}
                    height={1400}
                    alt='app-screenshots'
                    className='image-1 '
                    style={{ transform : 'translateX(-110px)', clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                />

                <div className="slide-1-right flex flex-col justify-center items-center  -translate-x-12">
                    <div className="slide-1-text flex flex-col  justify-center items-center gap-5  opacity-0 translate-y-50 ">
                        <div className='flex flex-row justify-center items-center w-full  '>
                            <Image
                                src='/bingeable-logo.png'
                                width={80}
                                height={80}
                                alt='bingeable-icon'
                            />
                           <h3 className=' font-extrabold text-5xl text-sand font-bingeable '>Bingeable</h3>
                        </div>
                        <h3 className=" text-2xl  font-bold text-sand font-bingeable">A social media for film lovers and filmmakers.</h3>
                        <Image
                            src='/ios-store-1.png'
                            width={160}
                            height={120}
                            alt='ios-store-icon'
                            className='-translate-y-15'
                        />
                    </div>
                    <div className="flex flex-row gap-14 -translate-y-12 text-sand ">
                        <div className="count-up flex flex-row gap-3 opacity-0 justify-center items-center">
                            <Download size={26} />
                          <div className="flex flex-col text-sm font-medium text-center"><span className='text-5xl font-bold' ref={downloadsRef}>0</span> downloads</div>
                        </div>
                        <div className="count-up flex flex-row gap-3 opacity-0 justify-center items-center">
                            <FilePen size={26} />
                          <div className="flex flex-col  text-sm font-medium text-center"><span className='text-5xl font-bold' ref={signUpRef}>0</span> user sign-ups</div>
                        </div>
                        <div className="count-up flex flex-row gap-3 opacity-0 justify-center items-center">
                            <Star size={26} />
                          <div className="flex flex-col  text-sm font-medium text-center"><span className='text-5xl font-bold' ref={ratingRef}>0</span> avg rating/5</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div id='front-end' className="bingeable-element front-end w-screen h-full flex flex-col items-center justify-center gap-0 text-sand  pt-20 ">
            <div className="front-end-title-container flex flex-col justify-center items-center  gap-3 " >
                    <h2 className='front-end-title text-customBlue font-bold font-heading tracking-[0.3em] uppercase' style={{clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}}>The Front End</h2>
                    <p className='front-end-para font-heading w-[1000px] font-bold text-2xl pt-2'>All about the UI and client logic. Take a closer look at how I approached the front end with real production code snippets.</p>
            <LogoScroll   data={frontEndIcons} className='py-3'/>
            </div>
            <div className="flex flex-row  gap-10 pt-10 ">

                <div className='front-end-images w-[700px] h-[700px]  relative' >
                    { frontEndImages.map((image,index) => (
                            <Image
                                src={ image }
                                ref={(el) => {
                                    if (el) imageRefs.current[index] = el
                                  }}                                
                                width={900}
                                
                                height={700}
                                key={index}
                                alt='code-snippet'
                                className= {`front-end-image-${index} absolute left-0 `}
                                style={{ top: `${index * 40}px`,  maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'}}
                            />
                            
                    )) }
                </div>


                <div className='front-end-text flex flex-col justify-start items-center w-[900px] gap-3'  >
                    { frontEndPoints.map( (data,index) => (
                        <div key={index} className='rounded-xl p-4 cursor-pointer   ' style={{ backgroundColor: frontEndHoverIndex === index ? '#2e54d1' : undefined  ,opacity : frontEndHoverIndex === index ? 1 : 0.5  }}
                            onMouseEnter={()=> {setFrontEndHoverIndex(index); setFrontEndImage(data.image)}}
                        >
                            <h3 className=" font-black text-lg font-heading w-full uppercase  ">{data.content.title}</h3>
                            <p className={`font-heading front-end-body  font-semibold ` }>{data.content.body}</p>
                        </div>
                     )) }
                    

                </div>
            </div>
            
        </div>
        <div id='back-end' className="bingeable-element back-end w-screen h-full flex flex-col items-center justify-center gap-0  text-sand  pt-20">
            <div className="back-end-title-container flex flex-col justify-center items-center gap-3">
                    <h2 className=' font-bold text-customBlue font-heading tracking-[0.3em] back-end-title  uppercase ' style={{clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}}>The Back End</h2>
                    <p className='font-heading     text-sand w-[1100px] font-bold text-2xl pt-2 '>A robust backend is needed to support the front end. Here are snippets from my production server code.</p>

                    <LogoScroll   data={backendIcons} className='py-3'/>
            </div>
            <div className="flex flex-row  gap-10 pt-10 z-1 relative">

                <div className='back-end-images w-[700px] h-[700px]  relative   ' >
                    { backendImages.map((image,index) => (
                            <Image
                                src={ image }
                                ref={(el) => {
                                    if (el) backendImageRefs.current[index] = el
                                  }}                                
                                width={900}
                                
                                height={700}
                                key={index}
                                alt='code-snippet'
                                className= {`back-end-image-${index} absolute left-0 `}
                                style={{ top: `${index * 40}px`,  maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'}}
                            />
                            
                    )) }
                </div>
                    
               
                     
                <div className='backend-text flex flex-col justify-start items-center w-[900px] gap-3  '>
                    { backendData.map( (data,index) => (
                        <div key={index} className='rounded-xl p-4 cursor-pointer   ' style={{ backgroundColor: backEndHoverIndex === index ? '#2e54d1' : undefined  ,opacity : backEndHoverIndex === index ? 1 : 0.5  }}
                        onMouseEnter={()=> {setBackEndHoverIndex(index); setBackendImage(data.image)}}
                    >
                            
                                <h3 className="  font-heading font-black text-lg uppercase ">{data.content.title}</h3>
                                <p className='font-heading  font-semibold'>{data.content.body}</p>
                        </div>
                     )) }
                    

                </div>
            </div>
            
        </div>

        <div className='bingeable-element challenges pt-10'>
          <div className="challenges-container flex flex-col justify-center items-center  gap-3  " >
            <div className='challenges-text-container flex flex-col justify-center items-center gap-3'>
              <h2 className='challenges-title text-customBlue font-bold font-heading tracking-[0.3em] uppercase' style={{clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}}>Challenges</h2>
              <p className='challenges-para font-heading w-[1000px] font-bold text-2xl pt-2 text-sand '>Here were some of my biggest challenges and takeaways from building this app.</p>
            </div>
            <div className='challenges-1 relative justify-center items-center pt-20'>
              <h3 id='challenge-problem-1' className='challenge-problem ' style={{clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}}>Challenge #1: Building a full production app with a framework and tools I've never used before.</h3>
              <p id='challenge-solution-1' className='challenge-solution top-95'style={{clipPath: "polygon(0 0, 100% 0%, 100% 0%, 0 0%)"}} >Approach: Watch videos, read documentation and adapt as I go. Mistakes were made along the way but that's the best way to learn. I spent a good amount of time 
                researching which options to choose when it came to the framework and tools. <br/><br/>For example, since I wanted to eventually distribute to both iOS and Android, I chose to go with React Native rather than
                writing native code for different platforms. I was confident with this decision since React Native has become well supported through the years and thought it was a safe choice.</p>
            </div>
          </div>
        </div>
        <div className='challenges-2 w-dvw'>
          <h2  className='challenges-title text-customBlue font-bold font-heading tracking-[0.3em] uppercase pt-10 ' >Challenges</h2>
          <div className='challenges-1 relative justify-center items-center pt-20'>

            <h3 id='challenge-problem-2' className='challenge-problem ' style={{clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}}>Challenge #2: Building the algorithm for user's feeds.</h3>
            <p id='challenge-solution-2' className='challenge-solution top-95' style={{clipPath: "polygon(0 0, 100% 0%, 100% 0%, 0 0%)"}}>Approach: I didn't want to overcomplicate this early in the app. So for now, the feed is more chronological based, pulling data from different models such as a user's friend's activities,
               data from interacted movies/shows, etc. <br/><br/>I then sort by the date created. In certain scenarios like for 'Trending Posts', I give a weight or a score for a post based on it's interactions like how many likes, comments, reposts, then
               sort based on its score.<br/><br/>In the future as the app gains more data, I plan on improving the algorithm to suggest relevant content by utilizing more complex data structures like graphs.</p>
          </div>
        </div>
        <div className='challenges-3 w-dvw'>
        <h2 className='challenges-title text-customBlue font-bold font-heading tracking-[0.3em] uppercase pt-10 ' >Challenges</h2>

          <div className='challenges-1 relative justify-center items-center pt-20'>
            <h3 id='challenge-problem-3' className='challenge-problem ' style={{clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}}>Challenge #3: Learning about System Design.</h3>
            <p id='challenge-solution-3' className='challenge-solution top-115' style={{clipPath: "polygon(0 0, 100% 0%, 100% 0%, 0 0%)"}} >Approach: Without much prior knowledge in system design, I wanted to set myself up in the case the app scales in the future. I learned about the 3 pillars in system design: Scalability, Reliability, and Maintainability.
              I've heard you can't have all three and should focus on two of them.<br/><br/>To improve scalability and reliability, I've set up my app like so:<br/><br/>- when a user makes a request,
              this first go throughs nginx, which reverse proxies the request mainly to enhance backend security.<br/><br/>- This then go through a load balancer which I configured in AWS, which will distribute the traffic
              to the most available server instance. This works hand in hand with the auto scaling of my server, which will spin up new instances based on the usage and traffic.<br/><br/>- I have redis setup for frequently requested data as a in memory store.<br/><br/>- As for the DB, if the app really scales, I'll look into vertical scaling with partitioning/sharding.  </p>
          </div>
        </div>

        <div className='bingeable-element bingeable-final justify-center items-center  relative'>
          
            <Image
              src='/bingeable-logo.png'
              width={100}
              height={100}
              alt='bingeable-icon'
              className='bingeable-logo-final absolute top-1/2 left-1/2 transform -translate-x-1/2'
          />
        </div>

       

      </div>
    </div>
  )
}

export default BingeableShowcase

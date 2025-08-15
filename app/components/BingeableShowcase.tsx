import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'



const BingeableShowcase = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const downloadsRef = useRef<HTMLSpanElement>(null)
  const signUpRef = useRef<HTMLSpanElement>(null)
  const ratingRef = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)

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
          markers:true,
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
      
    


  }, [])

  return (
    <div ref={wrapperRef} className="bingeable-wrapper h-dvh w-full overflow-hidden">
      <div ref={sliderRef} className="bingeable-slider flex h-full w-max">
        <div className="bingeable-element w-screen h-full bg-green-500 flex items-center justify-center">
            <div className="slide-1 flex flex-row justify-center items-center " >           
                <Image 
                    src='/bingeable-main-3.png'
                    width={1100}
                    height={1100}
                    alt='app-screenshots'
                    className='image-1'
                    style={{ transform : 'translateX(-110px)', clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                />

                <div className="slide-1-right flex flex-col justify-center ">
                    <div className="slide-1-text flex flex-col  justify-center items-center gap-5 -translate-x-30 opacity-0 translate-y-50 ">
                        <div className='flex flex-row justify-center items-center w-full  '>
                            <Image
                                src='/bingeable-logo.png'
                                width={80}
                                height={80}
                                alt='bingeable-icon'
                            />
                           <h3 className='font-sans font-bold text-5xl '>Bingeable</h3>
                        </div>
                        <h3 className=" text-2xl font-sans font-bold ">A social media for film lovers and filmmakers.</h3>
                        <Image
                            src='/ios-store-1.png'
                            width={160}
                            height={120}
                            alt='ios-store-icon'
                            className='-translate-y-15'
                        />
                    </div>
                    <div className="flex flex-row gap-14 -translate-y-12 -translate-x-7">
                        <div className="count-up flex flex-row gap-3 opacity-0 justify-center items-center">
                          <div className="flex flex-col text-sm font-medium text-center"><span className='text-5xl font-bold' ref={downloadsRef}>0</span> downloads</div>
                        </div>
                        <div className="count-up flex flex-row gap-3 opacity-0 justify-center items-center">
                          <div className="flex flex-col  text-sm font-medium text-center"><span className='text-5xl font-bold' ref={signUpRef}>0</span> user sign-ups</div>
                        </div>
                        <div className="count-up flex flex-row gap-3 opacity-0 justify-center items-center">
                          <div className="flex flex-col  text-sm font-medium text-center"><span className='text-5xl font-bold' ref={ratingRef}>0</span> avg rating/5</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bingeable-element w-screen h-full bg-red-500 flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col justify-center items-center">
                <h2 className='text-6xl font-extrabold'>The Front End</h2>
                <p>Take a closer look at how I approached the front end with production code snippets</p>
            </div>
            <div className="flex flex-row  gap-10 pt-10">
                <div className='w-[900px] h-[700px]  relative overflow-hidden rounded-3xl'>
                        <Image
                            src='/custom-hook.png'
                            fill
                            alt='code-snippet'
                        />
                </div>
                <div className='flex flex-col justify-start items-center w-[40%]'>
                    <h3 className=" text-4xl font-bold">Custom Hooks</h3>
                    <p>In this snippet, I've created a custom hook that fetches a film/tv Review data. This encapsulates the fetch logic and all of its related code like refetch and fetchMore for cursor based fetching which separates concerns from the rest of the parent component.</p>

                </div>
            </div>
            
        </div>
        <div className="bingeable-element w-screen h-full bg-lime-900 flex items-center justify-center">
          <h2 className="text-white text-4xl">HELLOOO</h2>
        </div>
      </div>
    </div>
  )
}

export default BingeableShowcase

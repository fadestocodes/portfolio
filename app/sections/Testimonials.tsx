import React from 'react'
import { testimonialData } from '../lib/testimonialData'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { avatarFallback } from '../lib/fallbackImage'

const Testimonials = () => {

    useGSAP(() => {
        const tl = gsap.timeline()

        const text1Split = SplitText.create('#text-1', {
            type : 'words'
        })
        const text2Split = SplitText.create('#text-2', {
            type : 'words'
        })
        const text3Split = SplitText.create('#text-3', {
            type : 'words'
        })

        tl.to(text1Split.words, {
            color: '#2e54d1',
            ease : 'power1.inOut',
            stagger : 1,
            scrollTrigger: {
              start: 'top 70%',
              end : '30% 80%%',
              trigger: '.testimonials',
              scrub: true,
              markers:true
  
            }
        })
        .to(text2Split.words, {
            color: '#2e54d1',
            ease : 'power1.inOut',
            stagger : 1,
            scrollTrigger: {
              start: 'top 50%',
              end : 'bottom 40%%',
              trigger: '#text-2',
              scrub: true,
              markers:true
  
            }
        })
        .to(text3Split.words, {
            color: '#2e54d1',
            ease : 'power1.inOut',
            stagger : 1,
            scrollTrigger: {
              start: 'top 50%',
              end : 'bottom 40%%',
              trigger: '#text-3',
              scrub: true,
              markers:true
  
            }
        })
    })

    const handleClick = (url) => {
        window.open(url, '_blank')
    }

  return (
    <div className='testimonials'>
        <div className='testimonial-content-wrapper'>
            { testimonialData.map( (data, index) => (
                <div key={index} className='single-testimonial-wrapper'>
                    <h3  id={`text-${index+1}`} className='testimonial-text font-heading text-6xl font-extrabold text-sand tracking-tight'><span className='text-customBlue font-heading text-9xl font-bold tracking-tighter '>" </span>{data.text}</h3>
                    <div className='flex flex-row gap-3 justify-center items-center cursor-pointer' onClick={()=>handleClick(data.linkedIn)}>
                        <Image
                            src={data?.picURL || '/avatarFallbackCustom3.jpg'}
                            height={75}
                            width={75}
                            className={`overflow-hidden object-contain rounded-full ${!data?.picURL && `bg-gray-300`}`}
                            alt='profile-pic'
                        />
                        <div className='flex flex-col '>
                            <p className='font-heading font-bold text-sand mb-2'>{data.name}</p>
                            <p className='font-heading font-medium text-[#897b72] leading-2'>{data.title}</p>
                            <p className='font-heading font-medium text-[#897b72]'> {data?.company}</p>
                        </div>
                    </div>
                </div>
            ) ) }
        </div>

    </div>
  )
}

export default Testimonials
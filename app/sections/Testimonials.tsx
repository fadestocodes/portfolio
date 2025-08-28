import React from 'react'
import { testimonialData } from '../lib/testimonialData'
import Image from 'next/image'

const Testimonials = () => {

    const handleClick = (url) => {
        window.open(url, '_blank')
    }

  return (
    <div className='testimonials'>
        <div className='testimonial-content-wrapper'>
            { testimonialData.map( (data, index) => (
                <div key={index} className='single-testimonial-wrapper'>
                    <h3  className='testimonial-text font-heading text-6xl font-extrabold text-sand tracking-tight'><span className='text-customBlue font-heading text-9xl font-bold tracking-tighter '>" </span>{data.text}</h3>
                    <div className='flex flex-row gap-3 justify-center items-center cursor-pointer' onClick={()=>handleClick(data.linkedIn)}>
                        <Image
                            src={data?.picURL || '/placeholder-profile-pic.png'}
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
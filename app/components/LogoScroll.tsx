import Image from 'next/image'
import React from 'react'

const LogoScroll = ({ data , className=''}) => {
  return (
    <div className={`logo-scroll-container ${className}`}>
        { data.map( icon => (
            <div className='tech-logo' key={icon.name}>
                <Image
                    src={icon.path}
                    width={60}
                    height={50}
                    style={{ objectFit : 'contain'}}
                    alt={icon.name}
                    
                />
            </div>
        )) }
    </div>
  )
}

export default LogoScroll
import React from 'react'

interface HeroProps {
  title: string,
  text?: string
}

const Hero: React.FC<HeroProps> = ({title, text}) => {

  return (
    <div className='hero'>
        <section className='hero_container'>
          <div className='hero_content'>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </section>
        <div className='hero_image'></div>
    </div>
  )
}

export default Hero
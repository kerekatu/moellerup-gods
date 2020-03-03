import React, { useState } from 'react'

import Carousel from './Carousel'
import carouselImgOne from '../../public/images/banner-1.png'
import carouselImgTwo from '../../public/images/banner-2.png'
import carouselImgThree from '../../public/images/banner-3.png'

const Hero = () => {
  const [images] = useState([
    {
      id: 1,
      imgUrl: carouselImgOne
    },
    {
      id: 2,
      imgUrl: carouselImgTwo
    },
    {
      id: 3,
      imgUrl: carouselImgThree
    }
  ])

  return (
    <section className="hero">
      <Carousel images={images} />
    </section>
  )
}

export default Hero

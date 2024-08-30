'use client'

import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

interface ProductImageCarouselProps {
  images: string[]
}

export default function ProductImageCarousel({ images }: ProductImageCarouselProps) {
  return (
    <Carousel showArrows={true} showThumbs={true} infiniteLoop={true}>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt={`Product image ${index + 1}`}
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      ))}
    </Carousel>
  )
}
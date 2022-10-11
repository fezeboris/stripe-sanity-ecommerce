import React from 'react'
import Link from 'next/link'
import { urlFor } from './lib/client'
function HeroBanner ({heroBanner}) {
  return (
    <div className='hero-banner-container'>
      <div>
        <div className='beats-solo'>
          {heroBanner.smallText}
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        </div>
        <img src={urlFor(heroBanner.image)} alt='headphones' className='hero-banner-image' />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
          <button type='button'>
          {heroBanner.buttonText}
          </button>
          </Link>
          <div className='desc'>
            <h5>{heroBanner.desc}</h5>
            <p>
              DESCRIPTION
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner

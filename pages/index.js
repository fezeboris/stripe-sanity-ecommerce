import React from 'react'
import { client } from '../components/lib/client'
import { Product,  HeroBanner, Layout, Cart, Navbar, FooterBanner, Footer } from '../components'

const Home = ({products, bannerData}) => {
  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    <div>
      <h2 className='products-heading'>Best Selling Products</h2>
      <p>Speakers of many variation</p>
      <div className='products-container' >
        {products?.map(product=>(
          <Product key={product._id} product={product}/>

        ))}
        
      </div>
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
}

export const getServerSideProps = async()=>{
    const query ='*[_type == "product"]'
    const products =  await client.fetch(query)
    const bannerQuery ='*[_type == "banner"]'
    const bannerData =  await client.fetch(bannerQuery)

    return{
      props:{products, bannerData}
    }
  }
export default Home;

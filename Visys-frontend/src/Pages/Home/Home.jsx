import React from 'react'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import WhyChooseUs from '../../components/WhyChooseUs'
import Blogs from '../../components/Blog'
import About from '../../components/About'
import BusinessSection from '../../components/BusinessSection '
import ProductsSection from '../../components/ProductsSection'
import Testimonials from '../../components/testimonials'

const Home = () => {
  return (
 <div  className="py-0">
      <Hero />
      <Services/>
      <WhyChooseUs/>
      <Blogs/>
      <About/>
      <BusinessSection/>
      <ProductsSection/>
      <Testimonials/>
    </div>
  )
}

export default Home

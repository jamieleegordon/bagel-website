import React from 'react'
import BagelAbout from '../assets/bagelAbout.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' 
        style = {{backgroundImage: `url(${BagelAbout})`}}>
        </div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p className='bigDesription'>Created by world famous baker Jamie-Lee Gordon</p>
            <p className='description'>
              Welcome to Jamie-Lee's Bagel Shop, where bagels aren't just a meal; 
              they're an experience crafted with passion and precision. Since 2023, 
              we've been dedicated to perfecting the art of bagel-making, using the finest ingredients, 
              from our handcrafted dough to our secret-recipe spreads. Our team of skilled bagel-makers and 
              chefs pour their heart into every bite we serve, ensuring each munch is a flavor-packed delight. 
              Beyond bagels, our menu offers a diverse range of options to satisfy every palate, and our commitment to 
              community involvement means we're more than just a bagel shop we're a cherished part of your neighborhood. 
              Join us to experience the difference for yourself; we look forward to serving you soon!
            </p>

            <h2>20% OFF WITH STUDENT DISCOUNT</h2>
            <p className='discountDescription'>Just add code at checkout or show your student ID in store</p>
        </div>
    </div>
  )
}

export default About
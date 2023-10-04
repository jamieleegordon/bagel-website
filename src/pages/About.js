import React from 'react'
import LeftBagel from '../assets/leftBagels.jpg'
import '../styles/About2.css'

function About() {
  return (
    <div className='about'>
        <div className='leftSide' 
        style = {{backgroundImage: `url(${LeftBagel})`}}>
        </div>
        <div className='rightSide'>
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

            <p>
                At Jamie-Lee's Bagel Shop, we take pride not only in our delicious bagels but also in our inviting shop ambiance. 
                Our cozy and welcoming shop is designed to make you feel right at home. It's the perfect spot to savor your bagel while 
                catching up with friends, working on your laptop, or simply enjoying a moment of solitude.
                Our founder and owner, Jamie-Lee, is a true bagel enthusiast with a passion for delivering quality and flavor. 
                With a lifelong dedication to perfecting the art of bagel-making, Jamie-Lee's vision has brought our shop to life,
                and her commitment to excellence is the driving force behind everything we do.
                Behind the scenes, our talented team of chefs and bagel-makers is constantly innovating. We're always experimenting with new 
                flavors and ingredients to surprise and delight your taste buds. This dedication to creativity means you can expect exciting 
                new menu items regularly, ensuring there's always something fresh to try.

                And that's not all—Jamie-Lee's Bagel Shop is expanding! We're excited to announce that new branches will be opening soon in 
                different neighborhoods, bringing our passion for bagels and community involvement to even more areas. 
                We believe that great food should be accessible to everyone, and we're on a mission to share our love for bagels with as 
                many people as possible.
            </p>

              <p className='end'>
                So, whether you're a bagel connoisseur or simply looking for a satisfying meal, visit us at Jamie-Lee's Bagel Shop. 
                Join us in celebrating the art of bagel-making, the joy of community, and the excitement of culinary innovation. 
                We can't wait to serve you soon and become a cherished part of your daily life. 
                Thank you for being a part of our bagel-loving journey!
              </p>

            <h2>20% OFF WITH STUDENT DISCOUNT</h2>
            <p className='discountDescription'>Just add code at checkout or show your student ID in store</p>
        </div>
    </div>
  )
}

export default About


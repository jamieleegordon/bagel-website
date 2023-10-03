import React from 'react'
import BagelLeft from '../assets/bagelLeft.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'
        style = {{backgroundImage: `url(${BagelLeft})`}}>
        </div>
        <div className='rightSide'>
            <h1>Contact us</h1>
            <form id = "contact-form" method = "POST">
                <label htmlFor = "name">Full Name</label>
                <input name = "name" placeholder='Enter full name' type = "text"/>
                <label htmlFor = "email">Email Address</label>
                <input name = "email" placeholder='Enter email address' type = "email"/>
                <label htmlFor = "message">Message</label>
                <textarea rows = "6" placeholder='Enter message' name = "message" required></textarea>
                <button type = "submit">Submit form</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
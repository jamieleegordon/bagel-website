import React from 'react'
import {Link} from 'react-router-dom'
import BagelHome from '../assets/bagelHome2.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className = "home" 
    style = {{backgroundImage: `url(${BagelHome})`}}>
       <div className = "headerContainer">
        <h1> Jamie-Lee's Bagel Bakery </h1>
        <p> BAGELS TO FIT ANY TASTE </p>
        <Link to = "/menu">
          <button> ORDER NOW </button>
        </Link>
       </div>
    </div>
  );
}

export default Home;

import React from 'react'
import '../styles/Locations.css'
import ChoppingBoard from "../assets/choppingBoard.jpg";
import { LocationList } from '../helpers/LocationList'

function Locations() {
  return (
    <div className='locations'
      //style = {{backgroundImage: `url(${ChoppingBoard})`}}
    >
        <h1>Our Locations</h1>
        <h3>There are more than 30 Jamie-Lee's Bagel Bakery stores in the UK. Find locations below and enjoy our special taste </h3>
        
        <div className='locationList'>
        {LocationList.map((locationItem, key) => (
          <div key={key}>
            <h2>{locationItem.location}</h2>
            <p>{locationItem.address}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Locations
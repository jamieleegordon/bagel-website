import React from 'react'
import LocationItem from '../components/LocationItem';
import ChoppingBoard from "../assets/choppingBoard.jpg";
import { LocationList } from '../helpers/LocationList';
import '../styles/Locations2.css'

function Locations() {
  return (
    <div className='locations'
      style = {{backgroundImage: `url(${ChoppingBoard})`}}>
        <h1 className='locationsTitle'>Our Locations</h1>
        <h3>There are more than 30 Jamie-Lee's Bagel Boutique stores in the UK. Find locations below and enjoy our special taste </h3>
        <div className='locationList'>
            {LocationList.map((locationItem, key) => {
                return <LocationItem 
                    key = {key}  
                    location = {locationItem.location} 
                    address = {locationItem.address}
                />
            })}
        </div>
    </div>
  )
}

export default Locations
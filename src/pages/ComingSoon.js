import React from 'react'
import '../styles/ComingSoon.css';
import { MenuListComingList } from '../helpers/MenuItemsComingList';
import MenuItem from '../components/MenuItem';
import { LocationsComingList } from '../helpers/LocationsComingList';
import LocationItem from '../components/LocationItem';
import ChoppingBoard from "../assets/choppingBoard.jpg";

function ComingSoon() {
  return (
    <div className='comingSoon'
    style = {{backgroundImage: `url(${ChoppingBoard})`}}>
        <h1 className='comingSoonTitle'> Coming soon </h1>
        <h2>Menu items to be released in November 2023</h2>
        <div className='menuList'>
            {MenuListComingList.map((menuItem, key) => {
                return <MenuItem 
                    key = {key} 
                    image = {menuItem.image} 
                    name = {menuItem.name} 
                    description={menuItem.description}
                    price = {menuItem.price}
                />
            })}
        </div>
        <br></br>
        <br></br>
        <h2>New branches opening in 2024</h2>
        <div className='locationList'>
            {LocationsComingList.map((locationItem, key) => {
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

export default ComingSoon
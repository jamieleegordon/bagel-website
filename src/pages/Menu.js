import React from 'react'
import ChoppingBoard from "../assets/choppingBoard.jpg";
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'
    style = {{backgroundImage: `url(${ChoppingBoard})`}}>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((menuItem, key) => {
                return <MenuItem 
                    key = {key} 
                    image = {menuItem.image} 
                    name = {menuItem.name} 
                    description={menuItem.description}
                    price = {menuItem.price}
                />
            })}
        </div>
    </div>
  );
}

export default Menu
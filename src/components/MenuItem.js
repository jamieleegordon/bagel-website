import React from 'react'

function MenuItem({image, name, description, price}) {
  return (
    <div className='menuItem'>
        <div style = {{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p className='description'>{description}</p>
        <p className='price'>£{price}</p>
    </div>
  )
}

export default MenuItem
import React from 'react'

function LocationItem({location, address}) {
  return (
    <div className='locationItem'>
        <h1>{location}</h1>
        <p>{address}</p>
    </div>
  )
}

export default LocationItem
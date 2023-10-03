import React from 'react'

function ReviewItem({reviewerName, date, review}) {
  return (
    <div className='reviewItem'>
        <h2>{reviewerName}</h2>
        <h3>{date}</h3>
        <p>{review}</p>
    </div>
  )
}

export default ReviewItem
import React from 'react'
import '../styles/Reviews.css'
import { ReviewList } from '../helpers/ReviewList';
import ReviewItem from '../components/ReviewItem';
import ChoppingBoard from "../assets/choppingBoard.jpg";

function Reviews() {
  return (
    <div className='reviews'
    style = {{backgroundImage: `url(${ChoppingBoard})`}}>
        <h1 className='reviewsTitle'>What people have been saying</h1>
        {ReviewList.map((reviewItem, key) => {
                return <ReviewItem 
                    key = {key} 
                    reviewerName={reviewItem.reviewerName}
                    date = {reviewItem.date}
                    review={reviewItem.review}
                />
            })}
    </div>
  )
}

export default Reviews
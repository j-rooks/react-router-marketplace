import React from 'react';
import { Link } from 'react-router-dom';
import { initialReviews } from './data.js';

function ItemDetails(props) {
  const { item } = props;
  const reviews = item.reviews.map((reviewId) =>
    initialReviews.find((review) => review.id === reviewId)
  );

  return item ? (
    <>
      <div>Inventory left: {item.inventory}</div>
      {reviews.length > 0 && <div>Reviews:</div>}
      <ul>
        {reviews.map((review) => (
          <li>
            {review.content} -
            <Link to={`/reviewer/${review.reviewerId}`}>Go to reviewer</Link>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <div>No item found</div>
  );
}

export default ItemDetails;

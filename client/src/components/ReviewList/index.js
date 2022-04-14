import React from 'react';
import { Link } from 'react-router-dom';

const ReviewList = ({ reviews }) => {
  return (
//     <div className="card mb-3">
//     <div className="card-header">
//       <span className="text-light">{reviews.username}'s review</span>
//     </div>
//     <div className="card-body">
//       {reviews &&
//         reviews.map(review => (
//           <p className="pill mb-3" key={reviews._id}>
//             {reviews.reactionText} {'// '}
//             <Link to={`/profile/${reviews.username}`} style={{ fontWeight: 700 }}>
//               {reviews.username} on {reviews.createdAt}
//             </Link>
//           </p>
//         ))}
//     </div>
//   </div>

    <div className="card mb-3">
    <div className="card-header">
        <span className="text-light">review</span>
    </div>
    <div className="card-body">
        {reviews &&
        reviews.map(review => (
            <p className="pill mb-3" key={review._id}>
            {review.reviewText} {'// '}
            <Link to={`/profile/${review.username}`} style={{ fontWeight: 700 }}>
                {review.username} on {review.createdAt}
            </Link>
            </p>
        ))}
    </div>
    </div>

  );
};

export default ReviewList;
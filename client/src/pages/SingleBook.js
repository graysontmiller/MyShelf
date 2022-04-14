import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_BOOK } from '../utils/queries';

import ReviewList from '../components/ReviewList';


const SingleThought = props => {
  const { id: bookId } = useParams();

  const { loading, data } = useQuery(QUERY_BOOK, {
    variables: { id: bookId }
  });

  const book = data?.book || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (

      <div>
    <div className="card mb-3">
      <p className="card-header">
        <span style={{ fontWeight: 700 }} className="text-light">
        {book.username}
        </span>{' '}
        added on {book.createdAt}
      </p>
      <div className="card-body">
        <p>{book.bookTitle}</p>
        <p>{book.authors}</p>
      </div>
    </div>

    {book.isReviewed > 0 && <ReviewList reviews={book.reviews} />}
    {!book.isReviewed > 0 && <p>This book has not been reviewed yet</p> }
  </div>
  );
};

export default SingleThought;

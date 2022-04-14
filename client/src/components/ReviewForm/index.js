import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/mutations';

const ReviewForm = ({ bookId }) => {
  const [reviewTitle, setTitle] = useState('');
  const [reviewText, setText] = useState('');
  const [reviewScore, setScore] = useState('');
  const [addReview, { error }] = useMutation(ADD_REVIEW);
  
  const handleTitleChange = event => {
    if (event.target.value.length <= 280) {
      setTitle(event.target.value);
      
    }
  };
  const handleTextChange = event => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      
    }
  };
  const handleScoreChange = event => {
    if (event.target.value.length <= 280) {
      setScore(event.target.value);
      
    }
  };
  
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addReview({
        variables: { reviewTitle, reviewText, reviewScore, bookId },
      });

      // clear form value
      setTitle('');
      setText('');
      setScore('');
      
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <div>
      
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
      <textarea
          placeholder="Book Review"
          value={reviewTitle}
          className="form-input col-12 col-md-9"
          onChange={handleTitleChange}
        ></textarea>
        
        <textarea
          placeholder="Leave a review to this book..."
          value={reviewText}
          className="form-input col-12 col-md-9"
          onChange={handleTextChange}
        ></textarea>

        <textarea
          placeholder="Review Score..."
          value={reviewScore}
          className="form-input col-12 col-md-9"
          onChange={handleScoreChange}
        ></textarea>

        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
     
      {error && <div>Something went wrong...</div>}

    </div>
  );
};

export default ReviewForm;
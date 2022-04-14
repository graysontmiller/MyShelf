import React from 'react';
import { Link } from 'react-router-dom';


const BookFormButton = () => {
  return (
    <div>
        
        <button  className="btn justify-center" type="submit">
          <Link to="/bookform">
            Add a book to your shelf
          </Link>
        </button>
      
    </div>
  );
};

export default BookFormButton;
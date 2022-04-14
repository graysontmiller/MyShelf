import React from 'react';
import { Link } from 'react-router-dom';


const BookList = ({ books, title }) => {
  if (!books.length) {
    return <h3>No books on the shelf yet!</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {books &&
        books.map(book => (
          <div key={book._id} className="card mb-3">
            <p className="card-header">
              This book was added by 
                <Link 
                to={`/profile/${book.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
                >
                  {" "} {book.username} {" "}
                </Link>
              on {book.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/book/${book._id}`}>
                <p>{book.bookTitle}</p>
                <p>{book.authors}</p>
                {/* <img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> */}
              </Link>
              <p className="mb-0">
                {' '}
                {book.isReviewed ? 'Click to read this user\'s review' : 'This user has not yet reviewed this book'}.
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookList;

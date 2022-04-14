import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_BOOK } from '../../utils/mutations';


const BookForm = () => {
    const [bookTitle, setBookTitle] = useState('');
    const [authors, setAuthors] = useState('');

    const [addBook, { error }] = useMutation(ADD_BOOK);


    const handleTitleChange = event => {
        if (event.target.value.length <= 280) {
          setBookTitle(event.target.value);
          
        }
      };
      const handleAuthorChange = event => {
        if (event.target.value.length <= 280) {
          setAuthors(event.target.value);
          
        }
      };

      const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            // add book to database
            await addBook({
              variables: { bookTitle, authors }
            });
        
            // clear form value
            setBookTitle('');
            setAuthors('');
            
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
        placeholder="Name of Book"
        value={bookTitle}
        className="form-input col-12 col-md-9"
        onChange={handleTitleChange}
        ></textarea>

        <textarea
        placeholder="name of author"
        value={authors}
        className="form-input col-12 col-md-9"
        onChange={handleAuthorChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
import React, { useState }  from 'react';
import { useMutation } from '@apollo/client';

import { ADD_BOOK } from '../utils/mutations';
import { QUERY_BOOKS, QUERY_ME } from '../utils/queries';
// import Row1Sq1 from './PromptPages/Row1Sq1';

const BookForm = () => {

  const [bookTitle, setTitle] = useState('');
  const [authors, setAuthors] = useState(0);

  const [addBook, { error }] = useMutation(ADD_BOOK, {
      update(cache, { data: { addBook } }) {
        try {
          // could potentially not exist yet, so wrap in a try...catch
          const { books } = cache.readQuery({ query: QUERY_BOOKS });
          cache.writeQuery({
            query: QUERY_BOOKS,
            data: { books: [addBook, ...books] }
          });
        } catch (e) {
          console.error(e);
        }
    
        // update me object's cache, appending new thought to the end of the array
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, books: [...me.books, addBook] } }
        });
      }
    });

  const handleTitleChange = event => {
      if (event.target.value.length <= 500) {
        setTitle(event.target.value);
        
      }
    };

    const handleAuthorsChange = event => {
      if (event.target.value.length <= 500) {
        setAuthors(event.target.value);
        
      }
    };

    const handleFormSubmit = async event => {
      event.preventDefault();
    
      try {
        await addBook({
          variables: { bookTitle, authors }
        });
    
        setTitle('');
        setAuthors('');
      } catch (e) {
        console.error(e);
      }
    };

    return (
      <main>
        <form
            onSubmit={handleFormSubmit}
        >


        <div className="mb-3">
            <label for="bookTitle"  className="form-label" >Book Title</label>
            <textarea className="form-control" value={bookTitle} id="exampleFormControlTextarea1" rows="3" placeholder='Title...' onChange={handleTitleChange}></textarea>
           
        </div>
        <div className="mb-3">
            <label for="authors"  className="form-label" >Author of the Book</label>
            <textarea className="form-control" value={authors} id="exampleFormControlTextarea1" rows="3" placeholder='Authors...' onChange={handleAuthorsChange}></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary" >
            Submit
            </button>
        </form>
      </main>
    );

    
  };



export default BookForm;
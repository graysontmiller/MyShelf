import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BOOKS } from '../utils/queries';

import BookList from '../components/BookList';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_BOOKS);

  const books = data?.books || [];
  console.log(books);

  return (
    <main>
      <div className="col-12 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <BookList books={books} title="What's being added to the shelves:" />
      )}
    </div>
    </main>
  );
};


export default Home;

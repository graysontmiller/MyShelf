import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BOOKS, QUERY_ME_BASIC } from '../utils/queries';
import Auth from '../utils/auth';


import BookList from '../components/BookList';
import FriendList from '../components/FriendList';
import BookFormButton from '../components/BookFormButton';
import BookForm from '../components/BookForm';


const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_BOOKS);
  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
const { data: userData } = useQuery(QUERY_ME_BASIC);

  const books = data?.books || [];
  console.log(books);

  const loggedIn = Auth.loggedIn();
  return (
    <main>
  <div className="flex-row justify-space-between">
    {/* {loggedIn && (
      <div className="col-12 mb-3">
        <BookForm />
      </div>
    )} */}
    <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
    
           {loading ? (
        <div>Loading...</div>
      ) : (
        <BookList books={books} title="What's being added to the shelves:" />
      )}
    </div>
    {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};


export default Home;

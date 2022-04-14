import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
  query books($username: String) {
    books(username: $username) {
      _id
      bookTitle
      createdAt
      username
      authors
      image
      reviews {
        _id
        reviewTitle
        reviewText
        reviewScore
        createdAt
        username
      }
    }
  }
`;
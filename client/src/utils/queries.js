import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
  query books($username: String) {
    books(username: $username) {
      _id
      bookTitle
      createdAt
      username
      authors
      image
      isReviewed
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

export const QUERY_BOOK = gql`
  query book($id: ID!) {
    book(_id: $id) {
      _id
      bookTitle
      createdAt
      username
      authors
      image
      isReviewed
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

export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    friendCount
    books {
      _id
      bookTitle
      createdAt
      username
      authors
      image
      isReviewed
    }
    friends {
      _id
      username
    }
  }
}
`;

export const QUERY_ME = gql`
  {
  me {
    _id
    username
    email
    friendCount
    books {
      _id
      bookTitle
      createdAt
      username
      authors
      image
      isReviewed
      reviews {
        _id
        reviewTitle
        reviewText
        reviewScore
        createdAt
        username
      }
    }
    friends {
      _id
      username
    }
  }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;
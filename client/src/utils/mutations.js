import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
mutation addBook($bookTitle: String!, $authors: String!) {
  addBook(bookTitle: $bookTitle, authors: $authors) {
    _id
    bookTitle
    createdAt
    username
    authors
    isReviewed
    bingoPrompt
    reviews {
      _id
      reviewTitle
    }
  }
}
`;

export const ADD_REVIEW = gql`
mutation addReview($bookId: ID!, $reviewTitle: String!, $reviewText: String!, $reviewScore: String!) {
  addReview(bookId: $bookId, reviewTitle: $reviewTitle, reviewText: $reviewText, reviewScore: $reviewScore) {
    _id
    bookTitle
    createdAt
    username
    authors
    bingoPrompt
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
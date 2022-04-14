const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    books: [Book]
    friends: [User]
  }
  
  type Book {
    _id: ID
    bookTitle: String
    createdAt: String
    username: String
    authors: String
    image: String
    prompt: String
    reviews: [Review]
  }

  type Review {
    _id: ID
    reviewTitle: String
    reviewText: String
    reviewScore: String
    createdAt: String
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(_id: ID!): Book
    reviews: [Review]
    review(_id: ID!): Review
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(username: String!, email: String!, password: String!): Auth

    addBook(bookTitle: String!, authors: String!, prompt: String): Book

    addReview(bookId: ID!, reviewTitle: String! reviewText: String!, reviewScore: String!): Book

    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    followingCount: Int
    books: [User]
    following: [User]
  }
  
  type Book {
    _id: ID
    prompt: [Prompt]
    bookTitle: String
    createdAt: String
    username: String
    reviews: [Review]
    authors: String
    image: String
  }

  type Review {
    _id: ID
    reviewTitle: String
    reviewText: String
    reviewScore: String
    createdAt: String
    username: String
  }

  type Prompt {
    _id: ID
    cardName: String
    promptLocation: String
    prompt: String
    description: String
    hardMode: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    books: [Book]
    book(_id: ID!): Book
    prompts: [Prompt]
    prompt(_id: ID!): Prompt
    reviews: [Review]
    review(_id: ID!): Review
    
  }
`;

module.exports = typeDefs;
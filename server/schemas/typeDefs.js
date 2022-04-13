const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    followingCount: Int
    books: [Book]
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
    me: User
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(_id: ID!): Book
    prompts: [Prompt]
    prompt(_id: ID!): Prompt
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
    addBook(bookTitle: String!, authors: String!): Book
    addPrompt(bookID: ID!, prompt: String!): Book
    addFollowing(followingId: ID!): User
  }
`;

module.exports = typeDefs;
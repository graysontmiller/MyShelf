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
    bingoPrompt: String
    isReviewed: Int
    reviews: [Review]
  }

  type Prompt {
    _id: ID
    promptLocation: String
    prompt: String
    description: String
    hardMode: String
    book: [Book]
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
    prompts: [Prompt]
    prompt(_id: ID!): Prompt
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(username: String!, email: String!, password: String!): Auth

    addBook(bookTitle: String!, authors: String!, bingoPrompt: String!): Book

    addPrompt(promptLocation: String!, prompt: String!, description: String!, hardMode: String!): Prompt

    addReview(bookId: ID!, reviewTitle: String! reviewText: String!, reviewScore: String!): Book

    addFriend(friendId: ID!): User

    removeFriend(friendId: ID!): User

    

  }
`;

module.exports = typeDefs;
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

  type Prompt {
    _id: ID
  }

  type Books {
    _id: ID
  }

  type Query {
    users: [User]
    user(username: String!): User
    
  }
`;

module.exports = typeDefs;
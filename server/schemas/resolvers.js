const { User, Book } = require('../models');

const resolvers = {
  Query: {
    //when I query "users", perform a .find() method on the User Model
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('thoughts')
        .populate('friends');
    },
    //when I query "user", perform a .findOne() method on the User Model
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },
    //when I query "books", perform a .find() method on the Book Model
    books: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Book.find(params).sort({ createdAt: -1 });
    },
    //when I query "book", perform a .findOne() method on the Book Model
    book: async (parent, { _id }) => {
      return Book.findOne({ _id });
    }
  }
};

module.exports = resolvers;
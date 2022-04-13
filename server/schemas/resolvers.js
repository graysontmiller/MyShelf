const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const Prompt = require('inquirer/lib/prompts/base');



const resolvers = {
  Query: {
    //Reads JWT as User information
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('books')
          .populate('following');
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },
    //when I query "users", perform a .find() method on the User Model
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('books')
        .populate('following');
    },
    //when I query "user", perform a .findOne() method on the User Model
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('books')
        .populate('following');
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
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
    
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
    
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const correctPw = await user.isCorrectPassword(password);
    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const token = signToken(user);
      return { token, user };
    },
    addBook: async (parent, args, context) => {
      //Check for context.user (JWT) to verify user is logged-in before adding a book
      if (context.user) {
        const book = await Book.create({ ...args, username: context.user.username });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { books: Book._id } },
          { new: true }
        );
    
        return book;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },

    addPrompt: async (parent, { bookId, reactionBody }, context) => {
      if (context.user) {
        const updatedBook = await Book.findOneAndUpdate(
          { _id: bookId },
          { $push: { prompt: Prompt._id } },
          { new: true, runValidators: true }
        );
    
        return updatedPrompt;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    }
  }

};

module.exports = resolvers;
const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const dateFormat = require('../utils/dateFormat');



const resolvers = {
  Query: {
    //Reads JWT as User information
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('books')
          .populate('friends');
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },
    //when I query "users", perform a .find() method on the User Model
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('books')
        .populate('friends');
    },
    //when I query "user", perform a .findOne() method on the User Model
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('books')
        .populate('friends');
    },
    //when I query "books", perform a .find() method on the Book Model
    books: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Book.find(params).sort({ createdAt: -1 });
    },
    //when I query "book", perform a .findOne() method on the Book Model
    book: async (parent, { _id }) => {
      return Book.findOne({ _id });
    },
    prompts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return prompt.find(params).sort({ createdAt: -1 });
    },
    prompt: async (parent, { _id }) => {
      return prompt.findOne({ _id });


    },
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
          { $push: { books: book._id } },
          { new: true }
        );
    
        return book;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
 
  

    addReview: async (parent, { bookId, reviewTitle, reviewText, reviewScore }, context) => {
      if (context.user) {
        const updatedBook = await Book.findOneAndUpdate(
          { _id: bookId },
          { $push: { reviews: { reviewTitle, reviewText, reviewScore, username: context.user.username } } },
          { new: true, runValidators: true }
        );
    
        return updatedBook;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },

    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');
    
        return updatedUser;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },

    removeFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.update(
          { _id: context.user._id },
          { $pull: { friends: friendId } },
          { new: true }
        ).populate('friends');
    
        return updatedUser;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    }
  }

};

module.exports = resolvers;
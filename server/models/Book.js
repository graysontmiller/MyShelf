const { Schema, model } = require('mongoose');
const promptSchema = require('./Prompt');
const reviewSchema = require('./Review');
const dateFormat = require('../utils/dateFormat');

const bookSchema = new Schema(
  {
    prompt: [promptSchema],
    thoughtTitle: {
      type: String,
      required: 'You need to include the title!',
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reviews: [reviewSchema],
    authors: {
      type: String
    },
    image: {
      type: String
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Book = model('Book', bookSchema);

module.exports = Book;
